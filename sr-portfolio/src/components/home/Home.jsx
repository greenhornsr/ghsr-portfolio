import React from 'react';

// Components
import { Nav, Name, LanguageList } from '../../components';

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