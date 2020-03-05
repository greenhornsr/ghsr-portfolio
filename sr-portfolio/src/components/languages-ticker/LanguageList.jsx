import React, {useState, useEffect} from 'react';
import './language-ticker.css'

// Data
import { alldevexperience } from '../../assets/data/languages-data';

// Components
import Languages from './Languages';

const LanguageList = () => {
    let [index, setIndex] = useState(0)

    function setId(){
        setIndex(index + 1)
    }

    useEffect(() => {
        // console.log("This is my index state: ", index)
        setId()
    },[])

    return (
        <div className="language-wrapper">
            {alldevexperience.map((exp, index) => {
                // if(index === i){
                    return (
                        <Languages key={index} lang={exp} />
                    )
                // }
            })}
        </div>
    )
}

export default LanguageList;