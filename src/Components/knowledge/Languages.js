import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id:1, value: "JavaScript", xp:0.9},
            {id:2, value: "PHP", xp:1.3},
            {id:3, value: "CSS", xp:1.3},
            {id:4, value: "Java", xp:0.3},
        ],
        framework: [
        {id:1, value: "React", xp:0.4},
        {id:2, value: "Vue.js", xp:0.3},
        {id:3, value: "Bootstrap", xp:0.7},
        {id:4, value: "Laravel", xp:1.3},
        ]
    }
    
    render() {
        let {languages, framework} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar languages={languages} className="languagesDisplay" title="languages"></ProgressBar>
                <ProgressBar languages={framework} className="frameworksDisplay" title="Frameworks"></ProgressBar>
            </div>
        );
    }
}

export default Languages;