import React from 'react';

// Components
import Nav from '../../components/navcomponents/Nav';
import Name from '../../components/portfolio-owner/Name';
import LanguageList from '../../components/languages-ticker/LanguageList';

const Home = () => {
    return (
        <>
            <Nav />
            <Name/>
            <LanguageList />
        </>
    )
}

export default Home;