import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);
const handleMinusButton = () => setCount(count - 1);
const handlePlusButton = () => setCount(count + 1);
const handleResetButton = () => setCount(0);
    return(
        <div>
            <h1>Counter: {count} </h1>
            <p>
                <button onClick={handlePlusButton}>+</button>
                <button onClick={handleMinusButton}>-</button>
                <button onClick={handleResetButton}>Reset</button>
            </p>
        </div>
    )
}

export default App;