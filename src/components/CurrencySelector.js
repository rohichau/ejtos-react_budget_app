import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrencySelector = () => {

    const {dispatch} = useContext(AppContext);
    return (
    <div className="input-group mb-3" style={{ marginLeft: '0rem' }}>
    <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
    </div>
    <select 
        className="custom-select" 
        id="inputGroupSelect01"
        style={{backgroundColor: 'lightgreen'}}
        onChange={(event) =>  dispatch({
           type: 'CHG_CURRENCY',
           payload: event.target.value,
       })}>
           <option defaultValue>£ Pound</option>
           <option value="£" name="pounds"> £ Pound</option>
           <option value="$" name="dollars">$ Dollar</option>
           <option value="€" name="finance">€ Euro</option>
           <option value="₹" name="rupees">₹ Ruppee</option>
   </select>
    </div>
);
    
};
export default CurrencySelector;