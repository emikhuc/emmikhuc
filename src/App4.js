import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const handlePlusButton = () => {setCount(count +1)}
    return(
        <div>
            <h1>Count: {count}</h1>
            <p>
                <button onClick={handlePlusButton}></button>
            </p>
        </div>
    )
}

export default App;