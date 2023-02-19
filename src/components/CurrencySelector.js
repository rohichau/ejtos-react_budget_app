import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelector = () => {
    return (
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
            </div>
        </div>
    );
};
export default CurrencySelector;
