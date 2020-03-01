import React from 'react';

const Languages = (props) => {
    console.log(props)
    console.log(props.index)
    return (
        <>
            <p>{props.lang}</p>
        </>
    )
}

export default Languages;