// import React, { useState,} from 'react';
// import './Dropdown.css'; // import the CSS file
// import { AppContext } from '../context/AppContext';

// const currencyOptions = [
//     { value: 'GBP', label: '£ Pound' },
//     { value: 'USD', label: '$ Dollar' },
//     { value: 'EUR', label: '€ Euro' },
//     { value: 'INR', label: '₹ Ruppee' },
//   ];
  
//   const Dropdown = ({ onChange }) => {
//     const { dispatch} = useContext(AppContext);
//     const [selectedOption, setSelectedOption] = useState(currencyOptions[0]);
  
//     const handleOptionChange = (option) => {
//       setSelectedOption(option);
//       onChange((event) =>    dispatch({
//         type: 'SET_BUDGET',
//         payload: event.target.value,
//     })); // dispatch the selected currency value to other places
//     };
  
//     return (
//       <div className="dropdown-container"> {/* add class name here */}
//         <select
//           className="dropdown"
//           value={selectedOption.value}
//           onChange={(e) =>
//             handleOptionChange(
//               currencyOptions.find((option) => option.value === e.target.value)
//             )
//           }
//         >
//           {currencyOptions.map((option) => (
//             <option
//               key={option.value}
//               value={option.value}
//               className="dropdown-option" // add the className here
//             >
//               {option.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };
  
//   export default Dropdown;