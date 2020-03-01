import React from 'react';
import './language-ticker.css'

// Data
import { alldevexperience } from '../../assets/data/languages-data';

// Components
import Languages from './Languages';

const LanguageList = () => {
    return (
        <div className="language-wrapper">
            {alldevexperience.map((exp, i) => {
                return (
                        <Languages key= {i} index={i} lang={exp} />
                )
            })}
        </div>
    )
}

export default LanguageList;