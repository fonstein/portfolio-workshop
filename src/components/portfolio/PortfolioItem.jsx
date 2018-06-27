import React from 'react';

const PortfolioItem = () => {
    return (
        <div className="portfolio-item">
            <div className="portfolio-item__title">PROJECT NAME</div>

            <div className="portfolio-item__desc">
            PROJECT DESCRIPTION
            </div>
            <div className="portfolio-item__icon">
                <i className="fa fa-js" />
                <i className="fa fa-react" />
                <i className="fa fa-html5" />
            </div>
            <div className="portfolio-item__links">
            <a src="#">More</a>
            </div>
        </div>
        );
    
};

export default PortfolioItem;