import React, {useState, useEffect} from 'react';
import './language-ticker.css'

// Data
import { alldevexperience } from '../../assets/data/languages-data';

// Components
import Languages from './Languages';

const LanguageList = () => {   
    let count = 1; 
    const [lang, setLang] = useState(alldevexperience[0])
    
    function setLanguage(){
        setInterval(() => {
            if(count >= alldevexperience.length){
                count = 0;
            }
                setLang(alldevexperience[count])
                count ++
        },3000)
    }

    useEffect(() => {
        setLanguage()
    },[count])

    return (
        <div className="language-wrapper">
            <Languages lang={lang} />
        </div>
    )
}

export default LanguageList;