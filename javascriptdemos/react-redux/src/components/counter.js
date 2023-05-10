import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { decrementCounter,incrementCounter } from "./counterslice";

export function Counter(){

    const count= useSelector((state)=>state.counter);
    const user= useSelector((state)=>state.user);

    const dispatch= useDispatch();

    return(
        <div>
            <h1>Counter Component</h1>
            <button onClick={()=>dispatch(incrementCounter)}>Increment</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(decrementCounter)}>Decrement</button>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)