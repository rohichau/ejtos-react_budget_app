import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget } = useContext(AppContext);

    // const increaseBudgetAllocation = (name) => {
    //     const budget = {
    //         name: name,
    //         cost: 10,
    //     };

    //     dispatch({
    //         type: 'ADD_EXPENSE',
    //         payload: expense
    //     });

    // }

    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: </span>
            <input
                required='required'
                type='number'
                id='budget'
                step={10}
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) =>    dispatch({
                    type: 'SET_BUDGET',
                    payload: event.target.value,
                })}>
            </input>
        </div>
    );
};
export default Budget;
