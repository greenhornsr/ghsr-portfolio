import React, {useState, useEffect} from 'react';
import './language-ticker.css'

// Data
import { alldevexpplusicons } from '../../assets/data/languages-data';

// Components
import Languages from './Languages';

const LanguageList = () => {   
    const [icon, setIcon] = useState(alldevexpplusicons[0])
    
    useEffect(() => {
        let count = 1; 
        function setLanguage(){
            setInterval(() => {
                if(count >= alldevexpplusicons.length){
                    count = 0;
                }
                    setIcon(alldevexpplusicons[count])
                    count ++
            },3000)
        }
        setLanguage()
    },[])
    console.log("icon state: ", icon)
    return (
        <div className="language-wrapper">
            <Languages icon={icon} />
        </div>
    )
}

export default LanguageList;