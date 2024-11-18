import {useState} from "react";

function ComponentB() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Component B</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default ComponentB;