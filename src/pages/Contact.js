import React from 'react';
import Navigation from '../Components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Contact = () => {
    return (
        <div className="contact">
            <Navigation></Navigation>
            <div className="contactContent">
                <div className="contactBox">
                    <h1>Contactez moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Saint-nazaire</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text='0752620210'>
                                <span className="clickInput" onClick={() => {alert('Téléphone copié !')}}> 07 52 62 02 10</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text='julien.fallempin@orange.fr'>
                                <span className="clickInput" onClick={() => {alert('Email copié !')}}>julien.fallempin@orange.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/julien-fallempin-4a7b3b1ab/" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4> 
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/arcimed" target="_blank" rel="noopener noreferrer"> 
                            <h4>GitHub</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com/julien.fallempin" target="_blank" rel="noopener noreferrer"> 
                            <h4>Facebook</h4>
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://my.indeed.com/p/julienf-augsoa3" target="_blank" rel="noopener noreferrer">
                            <h4>Indeed</h4>
                            <i class="fas fa-portrait"></i>
                        </a>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Contact;