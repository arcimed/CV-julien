import React from 'react';
import Hobbies from '../Components/knowledge/Hobbies';
import Languages from '../Components/knowledge/Languages';
import OtherSkills from '../Components/knowledge/OtherSkills';
import Navigation from '../Components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation></Navigation>
            <div className="knowledgesContent">
                <Languages></Languages>
                <OtherSkills></OtherSkills>
                <Hobbies></Hobbies>
            </div>
        </div>
    );
};

export default Knowledges;