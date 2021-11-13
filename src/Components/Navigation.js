import React from 'react';
import {NavLink} from 'react-router-dom'


const Navigation = () => {
    return (
       <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/profil.jpg" alt="profil-pic"></img>
                    <h3>Julien Fallempin</h3>
                </div>
           </div>
            <div className="navigation">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="navActive">
                                <i className="fa fa-home"></i>
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/competence" activeClassName="navActive">
                                <i className="fa fa-mountain"></i>
                                <span>Compétence</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/experience" activeClassName="navActive">
                                <i class="fas fa-project-diagram"></i>
                                <span>Expérience</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">
                                <i className="fa fa-images"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li> 
                        <li>
                            <NavLink exact to="/contact" activeClassName="navActive">
                                <i className="fa fa-address-book"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>             
            </div>
            <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/julien-fallempin-4a7b3b1ab/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/arcimed" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/julien.fallempin" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://my.indeed.com/p/julienf-augsoa3" target="_blank" rel="noopener noreferrer"> <i class="fas fa-portrait"></i></a>
                        </li>
                    </ul>
            </div>
           </div>
    );
};

export default Navigation;