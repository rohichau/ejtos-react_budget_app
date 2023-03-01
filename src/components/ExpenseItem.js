import React, { useContext } from 'react';
import { TiDelete} from 'react-icons/ti';
import {FaPlus, FaMinus} from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        {/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td> */}
        {<td><button size='1.5em' onClick={event=> increaseAllocation(props.name)}><FaPlus style={{color:'green',fontSize:'1.5em'}}/></button></td>}
        {<td><button size='1.5em' onClick={event=> decreaseAllocation(props.name)}><FaMinus style={{color:'red',fontSize:'1.5em'}}/></button></td>}
        {/* <td><TiUserAdd size='1.5em' color='green' onClick={event=> increaseAllocation(props.name)}></TiUserAdd></td> */}
        <td><TiDelete size='1.5em' color='red' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
