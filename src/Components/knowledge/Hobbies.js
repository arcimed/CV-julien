import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i class="fab fa-readme"></i>
                    <span>Lecture</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-skiing"></i>
                    <span>Ski</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-weight-hanging"></i>
                    <span>Musculation</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-route"></i>
                    <span>Voyage</span>
                </li>
                <li className="hobby">
                    <i class="fas fa-laptop"></i>
                    <span>Informatique</span>
                </li>
                
            </ul>
        </div>
    );
};

export default Hobbies;