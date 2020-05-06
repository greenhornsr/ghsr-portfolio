import React from 'react';

const Languages = (props) => {
    console.log(props)
    return (
        <div className="MARQUEE">  
            {/* <section className="marq-div1">
                <div className="marq-div-img"><img src={props.icon.icon} alt=""/></div> */}
            <p>{props.icon.lang}</p>
            {/* </section> */}
        </div>
    )
}

export default Languages;