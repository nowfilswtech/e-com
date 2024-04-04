import React, { useEffect, useState } from "react";

export function Products() {
    const [content, setContent] = useState(<ProductsList showForm={showForm} />)
    function showList() {
        setContent(<ProductsList showForm={showForm} />)
    }
    function showForm(product) {
        // console.log("product ", product)
        setContent(<ProductForm product={product} showList={showList} />)
    }
    return (
        <div className="container my-5">
            {content}
        </div>
    )
}

function ProductsList(props) {
    const [products, setProducts] = useState([])
   
    function fetchProducts() {
        console.log("CHECKING: ",process.env)
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unexpected server response.")
                }
                return response.json()
            })
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => fetchProducts(), [])

    // Delete Product

    function productDelete(id) {
        console.log(id)
        fetch(`${process.env.REACT_APP_API_URL}/products/` + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Unexpected server response.")
                }
                return response.json()
            })
            .then((data) => {
                fetchProducts()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <h2 className="text-center mb-3">List of Products</h2>
            <button type="button" onClick={() => props.showForm()} className="btn btn-primary me-2">Create</button>
            <button type="button" onClick={() => fetchProducts()} className="btn btn-outline-primary me-2">Refresh</button>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                {/* <td>{product.id}</td> */}
                                <td>{product.product_name}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.created_at}</td>
                                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                    <button onClick={() => props.showForm(product)} type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                                    <button onClick={() => productDelete(product.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

function ProductForm(props) {
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMsg] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        // read form data
        const formData = new FormData(event.target)
        // convert form data to object
        const product = Object.fromEntries(formData.entries())
        // form validation
        if (!product.product_name || !product.brand || !product.price || !product.category) {
            console.log("Please provide all the required informations.")
            setErrorMessage(
                <div class="alert alert-warning" role="alert">
                    Please provide all the required informations.
                </div>
            )
            return;
        }

        // Update the product form
        if (props?.product?.id) {
            fetch(`${process.env.REACT_APP_API_URL}/products/` + props?.product?.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
                .then((response) => { return response.json() })
                .then((date) => { props.showList() })
                .catch((error) => { console.log("Error ", error) })
        } else {
            // create a new peoduct
            product.created_at = new Date().toISOString().slice(0, 10);

            fetch(`${process.env.REACT_APP_API_URL}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Unexpected error from response")
                    }
                    return response.json()
                })
                .then((data) => {
                    setSuccessMsg(
                        <div class="alert alert-success" role="alert">
                            Product successfully added.
                        </div>
                    )
                    props.showList()
                })
                .catch((error) => {
                    console.log("Error ", error)
                })
        }


    }

    return (
        <>
            <h2 className="text-center mb-3">{props?.product?.id != undefined ? "Edit Product" : "Create new Products"}</h2>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    {errorMessage}
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {props?.product?.id && <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">ID</label>
                            <div className="col-sm-8">
                                <input readOnly className="form-control-plaintext" name="id" defaultValue={props?.product?.id}></input>
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="product_name" defaultValue={props?.product?.product_name}></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Brand</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand" defaultValue={props?.product?.brand}></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Categories</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category" defaultValue={props?.product?.category}>
                                    <option value="Others">Others</option>
                                    <option value="Phones">Phones</option>
                                    <option value="Computers">Computers</option>
                                    <option value="Cameras">Cameras</option>
                                    <option value="GPS">GPS</option>
                                    <option value="Accesories">Accesories</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" defaultValue={props?.product?.price}></input>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" defaultValue={props?.product?.description}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary btn-sm me-3">Save</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <button type="button" onClick={() => props.showList()} className="btn btn-secondary me-2">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}
