import React, { useState } from 'react';

const YourComponent = () => {
  const [nameFields, setNameFields] = useState(['']);
  const [ageFields, setAgeFields] = useState(['']);
  const [addressFields, setAddressFields] = useState(['']);

  const handleAddField = (fieldType) => {
    switch (fieldType) {
      case 'name':
        setNameFields([...nameFields, '']);
        break;
      case 'age':
        setAgeFields([...ageFields, '']);
        break;
      case 'address':
        setAddressFields([...addressFields, '']);
        break;
      default:
        break;
    }
  };

  const handleRemoveField = (fieldType, index) => {
    switch (fieldType) {
      case 'name':
        setNameFields(nameFields.filter((_, i) => i !== index));
        break;
      case 'age':
        setAgeFields(ageFields.filter((_, i) => i !== index));
        break;
      case 'address':
        setAddressFields(addressFields.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  const handleChange = (fieldType, index, value) => {
    switch (fieldType) {
      case 'name':
        setNameFields(nameFields.map((field, i) => (i === index ? value : field)));
        break;
      case 'age':
        setAgeFields(ageFields.map((field, i) => (i === index ? value : field)));
        break;
      case 'address':
        setAddressFields(addressFields.map((field, i) => (i === index ? value : field)));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the submitted data
    const submittedData = {
      names: nameFields,
      ages: ageFields,
      addresses: addressFields,
    };
    console.log(submittedData);
    // Reset the fields after submission
    setNameFields(['']);
    setAgeFields(['']);
    setAddressFields(['']);
  };

  return (
    <div className="col-md-6 col-lg-6">
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Name</h4>
          {nameFields.map((field, index) => (
            <div key={`name-${index}`}>
              <input
                type="text"
                placeholder="Name"
                value={field}
                onChange={(e) => handleChange('name', index, e.target.value)}
              />
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveField('name', index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleAddField('name')}>
            Add Name
          </button>
        </div>
        <div>
          <h4>Age</h4>
          {ageFields.map((field, index) => (
            <div key={`age-${index}`}>
              <input
                type="number"
                placeholder="Age"
                value={field}
                onChange={(e) => handleChange('age', index, e.target.value)}
              />
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveField('age', index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleAddField('age')}>
            Add Age
          </button>
        </div>
        <div>
          <h4>Address</h4>
          {addressFields.map((field, index) => (
            <div key={`address-${index}`}>
              <input
                type="text"
                placeholder="Address"
                value={field}
                onChange={(e) => handleChange('address', index, e.target.value)}
              />
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveField('address', index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => handleAddField('address')}>
            Add Address
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YourComponent;



// ----------------------------------------Single input-------------------------------
// import React, { useState } from 'react';

// const DynamicInputs = () => {
//   const [inputFields, setInputFields] = useState([{ value: '' }]);

//   const handleChange = (index, event) => {
//     const values = [...inputFields];
//     values[index].value = event.target.value;
//     setInputFields(values);
//   };

//   const handleAddField = () => {
//     const values = [...inputFields];
//     values.push({ value: '' });
//     setInputFields(values);
//   };

//   const handleRemoveField = (index) => {
//     const values = [...inputFields];
//     values.splice(index, 1);
//     setInputFields(values);
//   };
 
//   return (
//     <div>
//       {inputFields.map((field, index) => (
//         <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
//           <input
//             type="text"
//             value={field.value}
//             onChange={(event) => handleChange(index, event)}
//             placeholder={`Input ${index + 1}`}
//           />
//           {index === inputFields.length - 1 && (
//             <button
//               onClick={handleAddField}
//               style={{ marginLeft: '10px' }}
//               disabled={!field.value}
//             >
//               +
//             </button>
//           )}
//           {inputFields.length > 1 && (
//             <button
//               onClick={() => handleRemoveField(index)}
//               style={{ marginLeft: '10px' }}
//             >
//               -
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DynamicInputs;



// ------------------------------Single + button for only create field--------------------------------------------
// import React, { useState } from 'react';

// const DynamicInputs = () => {
//   const [inputFields, setInputFields] = useState([{ value: '' }]);

//   const handleChange = (index, event) => {
//     const values = [...inputFields];
//     values[index].value = event.target.value;
//     setInputFields(values);
//   };

//   const handleAddField = () => {
//     const values = [...inputFields];
//     values.push({ value: '' });
//     setInputFields(values);
//   };

//   return (
//     <div>
//       {inputFields.map((field, index) => (
//         <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
//           <input
//             type="text"
//             value={field.value}
//             onChange={(event) => handleChange(index, event)}
//             placeholder={`Input ${index + 1}`}
//           />
//           {index === inputFields.length - 1 && (
//             <button onClick={handleAddField} style={{ marginLeft: '10px' }}>
//               +
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DynamicInputs;