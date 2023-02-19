import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrencySelector = () => {

    // const styles = {
    //     customSelect: {
    //       backgroundColor: "red",
    //     },
    //   };

    return (
        <div className='currencySelector'>
                    <div className = 'col-sm'>
            <label className="currencyLabel">Currency</label>
        </div>
            {/* <div className="dropdown">
            <select className="dropdown" id="customSelect">
                <option  value="£" name="pound" style={{color: 'green', backgroundColor:'green'}}> £ Pound</option>
                <option  value="$" name="dollar" style={{color: 'green'}}> $ Dollar</option>
                <option  value="€" name="euro" > € Euro</option>
                <option  value="₹" name="ruppee"> ₹ Ruppee</option>
            </select>
            </div> */}
            <DropdownButton id="dropdown-basic-button">
                <Dropdown.Item  style={{color: 'black', backgroundColor: 'green'}}>£ Pound</Dropdown.Item>
                <Dropdown.Item  style={{color: 'black', backgroundColor: 'green'}}>$ Dollar</Dropdown.Item>
                <Dropdown.Item  style={{color: 'black', backgroundColor: 'green'}}>€ Euro</Dropdown.Item>
                <Dropdown.Item  style={{color: 'black', backgroundColor: 'green'}}>₹ Ruppee</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};
export default CurrencySelector;