import React from 'react';
import Navigation from '../Components/Navigation';
import {portfolioData} from '../data/portfolioData';
import CardPortfolio from '../Components/CardPortfolio';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation></Navigation>
            <div className="portfolioContent">
                <div className="projects">
            {
                   portfolioData.map((item)=>{
                        return (
                            <CardPortfolio portfolio={item} className="project"></CardPortfolio>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;