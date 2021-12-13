import React, { useState } from 'react';
const Counter = () => {
    const [counter, setCounter] = useState(0)
    function increment() {
        setCounter(counter + 1)
    }
    return (
        <div>
            
            <button onClick={increment} className='btn btn-success'> &#10084; {counter}</button>
            
        </div>
    );
};
export default Counter;