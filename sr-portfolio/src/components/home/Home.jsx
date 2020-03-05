import React from 'react';

// Components
import Nav from '../../components/navcomponents/Nav';
import Name from '../../components/portfolio-owner/Name';
import LanguageList from '../../components/languages-ticker/LanguageList';

const Home = () => {
    return (
        <div className="home-container" >
            <Nav />
            <section className="home-body">
                <Name/>
                <LanguageList />
            </section>
        </div>
    )
}

export default Home;