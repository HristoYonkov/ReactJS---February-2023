import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood'
        case 2:
            return 'Double Kill'
        case 3:
            return 'Triple Kill'
        case 4:
            return 'Quadra Kill'
        case 5:
            return 'Rampage'
        default:
            return 'Counter'
    }
}

const Counter = (props) => {
    const [counter, setCounter] = useState(props.counter);

    const increment = (e) => {
        setCounter((oldCount) => oldCount + 1);
    }

    const decrement = (e) => {
        setCounter((oldCount) => oldCount - 1);
    }

    const clear = (e) => {
        setCounter((oldCount) => oldCount = 0);
    }

    // let title = 'Counter';
    // if (counter == 1) {
    //     title = 'First Blood'
    // } else if (counter == 2) {
    //     title = 'Double Kill'
    // }

    // let color = '';
    // if (counter == 0) {
    //     color = 'red'
    // } else {
    //     color = 'blue'
    // }
    
    return (
        <div>
            {/* <h2>{counter > 0 ? 'First Blood' : 'Counter'} : {counter}</h2> */}

            <p style={{ fontSize: counter + 1 * 10, color: counter == 0 ? 'red' : 'blue' }}>
                {counter >= 6
                    ? 'Rampage'
                    : getTitle(counter)
                }
                : {counter}
            </p>

            {counter < 10
                ? <button onClick={increment}>+</button>
                : null
            }

            {props.canReset && <button onClick={clear}>0</button>}

            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;