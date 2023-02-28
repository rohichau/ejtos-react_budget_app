import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrencySelector = () => {

    const {dispatch} = useContext(AppContext);
    return (
    <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
    <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
    </div>
    <select className="custom-select" id="inputGroupSelect01" onChange={(event) =>  dispatch({
           type: 'CHG_CURRENCY',
           payload: event.target.value,
       })}>
           <option defaultValue>Choose...</option>
           <option value="£ Pound" name="pounds"> £ Pound</option>
           <option value="$ Dollar" name="dollars">$ Dollar</option>
           <option value="€ Euro" name="finance">€ Euro</option>
           <option value="₹ Ruppee" name="rupees">₹ Ruppee</option>
   </select>
    </div>
);
    
};
export default CurrencySelector;