import '../modules/components.css';
import Button from './button';
import {useState} from 'react'

export default function Counter({count,increment,decrement}) {
   

    return(
        <>
            <Button Click={increment} value={'Add'}/>
            <Button Click={decrement} value={'Subtract'}/>
            <h2 style={{color:'black'}}>Count: {count}</h2>
            {/* <Button Click={Check} value={'Click'}/> */}
        </>
    )
}