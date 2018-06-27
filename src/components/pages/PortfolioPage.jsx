import React, { Component } from 'react';
import { ScrollToPage } from '../scroll';
import PortfolioItem from '../portfolio/PortfolioItem';
import { PortfolioAutosys, PortfolioMaster } from '../portfolio';


class PortfolioPage extends Component {
    render() {
        return (
            <div className="portfolio-page">
                <div className="content-grid">
                    <h1>Portfolio</h1>
                    <div className="portfolio-wrapper">
                        <PortfolioAutosys />
                    </div>
                    <div className="portfolio-wrapper">
                        <PortfolioMaster />
                    </div>
                </div>
                <ScrollToPage isFinal={true} pageSelector=".about-page" />
            </div>
        );
    }
}

export default PortfolioPage;