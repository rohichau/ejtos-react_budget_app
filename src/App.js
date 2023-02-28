import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencySelector from './components/CurrencySelector';
import Dropdown from './components/Dropdown';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>            
                {/* // Budget component */}
                    <div className='col-sm'>
                        <Budget />
                    </div>       
                    {                 
                    //Remaining component
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    }        
                    {                 
                    //ExpenseTotal component
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    }
                    {                 
                    //CurrencySelector component
                    <div className='col-sm'>
                        <CurrencySelector />
                    </div>
                    }
                    </div>        
                    <div className='row mt-3'>   
                    {                    
                    <div className='col-lg'>
                        <ExpenseList />
                    </div>
                    }          
                    </div>
                    <div className= 'row mt-2'>
                    <h2 className='mt-3'>Change Allocation</h2>     
                    {                    
                   <div className='col-sm'>
                        <AllocationForm />
                    </div>
                    }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
