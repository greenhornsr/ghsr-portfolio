import React, {useState, useEffect} from 'react';
import './language-ticker.css'

// Data
import { alldevexperience } from '../../assets/data/languages-data';

// Components
import Languages from './Languages';

const LanguageList = () => {   
    let count = 1; 
    const [lang, setLang] = useState(alldevexperience[0])
    // console.log(alldevexperience)
    
    function setLanguage(){
        setInterval(() => {
            if(count >= alldevexperience.length){
                count = 0;
            }
                setLang(alldevexperience[count])
                count ++
                // console.log('count is: ', count)
        },3000)
    }

    useEffect(() => {
        // console.log("This is my index state: ", index)
        setLanguage()
        // console.log('my state lang is : ', lang)
    },[count])

    return (
        <div className="language-wrapper">
            <Languages lang={lang} />
            {/* {alldevexperience.map((exp, index) => {
                // if(index === i){
                    return (
                        <Languages key={index} lang={exp} />
                    )
                // }
            })} */}
        </div>
    )
}

export default LanguageList;