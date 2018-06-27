import React from 'react';

const PortfolioItem = () => {
    return (
        <div className="portfolio-item">
            <div className="portfolio-item__title">Master thesis</div>

            <div className="portfolio-item__desc">
            Additive manufacturing using robot manipulators
            </div>
            <div className="portfolio-item__icon">
                <i className="fa fa-python" />
            </div>
            <div className="portfolio-item__links">
            <a src="#">More</a>
            </div>
        </div>
        );
    
};

export default PortfolioItem;