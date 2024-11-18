import {useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return {count: state.count + 1};

        case 'decrement':
            return {count: state.count - 1};
    }
}

function ComponentB() {
    const [count, setCount] = useState(0);
    const [count1, setCoun1] = useState(0);
    const initialState = {count: 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    const test = useRef(null);

    useEffect(() => {
        console.log('Component B did mount');
        return () => {
            console.log('Component B will unmount');
        }
    });


    return (
        <div>
            <div ref={test}></div>
            <h1>Component B</h1>
            <p>{count}</p>
            <p>{state.count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default ComponentB;