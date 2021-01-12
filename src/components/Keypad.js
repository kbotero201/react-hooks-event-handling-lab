// Code Keypad Component Here
import React from 'react'

function Keypad(){

    function log(){
        console.log('Entering password...')
    }


    return(
        <div>
            <input onChange={log} type="password" />
        </div>
    )

}

export default Keypad