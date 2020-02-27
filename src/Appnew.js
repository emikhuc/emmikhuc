import React, {useState} from 'react';
import Test1 from './Components/Test1';

const App = () => {
    const [count, setCount] = useState([
        {
            ID: 1,
            name: 'a',
            yearOfBirth: 1990,
            city: 'HCM'
        },
        {
            ID: 2,
            name: 'b',
            yearOfBirth: 1991,
            city: 'VT'
        },
        {
            ID: 3,
            name: 'c',
            yearOfBirth: 1992,
            city: 'HN'
        }
    ])
    return(
        <div>
            <Test1 staffList={count}/>
        </div>
    )
}

export default App;
