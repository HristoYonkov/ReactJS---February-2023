import React from "react";

const Timer = function Timer(props) {
    const [counter, increment] = React.useState(props.start);
    // Not good practice use effect is better!
    setTimeout(() => {
        // state(10); only if set specific (hard) value!
        increment((state) => state + 1);
    }, 1000);

    return (
        <div>
            Time: {counter}s
        </div>
    )
}

export default Timer;