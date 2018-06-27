import React, { Component } from 'react';
import { ScrollToPage } from '../scroll';

class AboutPage extends Component {

    render() {
        return (
            <div className="about-page">
                <div className="content-grid">
                    <h1>About</h1>
                    <div className="about-wrapper">
                    <div className="about-content">
                        <p>
                        Analyst at Accenture with a MCs in Cybernetics and Robotics from NTNU
                        </p>
                        <p className="text-emoji">
                        \ (•◡•) /
                        </p>
                    </div>
                    </div>
                </div>
                <ScrollToPage isFinal={false} isRed={true} pageSelector=".portfolio-page" />
            </div>
        )
    }
}

export default AboutPage;