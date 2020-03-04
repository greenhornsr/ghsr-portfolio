import React, { useEffect } from 'react';

const Languages = (props) => {
    // console.log("myprops:", props)
    // console.log("index: ", props.keys)
    // const test = props.lang

    // function newProp(){
    //     let id = 0
    //     if(props.keys === 1){
    //         console.log("props.keys", props.keys)
    //         id += 1;
    //         return  <p>{ props.lang }</p>
    //     }
    // }
    
    
    // useEffect(() => {
    //     const intervalTest = setInterval(newProp, 5000);
    //     console.log("lang: ", test)
    // },[test])

    return (
        <>
            <p>{props.lang}</p>
        </>
    )
}

export default Languages;