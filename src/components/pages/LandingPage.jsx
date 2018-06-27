import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import SocialIcons from '../socialIcons/SocialIcons';
import { ScrollToPage } from '../scroll';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <NavBar />
            <main>
                <div className="intro-wrapper">
                    <img 
                        src="assets/31408194_10157395944219972_4290514995462012928_o.jpg"
                        alt="avatar"
                        className="avatar-img" />
                    <div className="intro-name">Ingrid</div>
                    <div className="tagline">
                        Developer
                    </div>
                    <SocialIcons />
                </div>
            </main>
            <ScrollToPage isFinal={false} pageSelector=".about-page" />
        </div>
    )
}

export default LandingPage;
