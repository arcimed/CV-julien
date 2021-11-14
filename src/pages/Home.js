import React from 'react';
import Navigation from '../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
           <Navigation></Navigation>
           <div className="homeContent">
               <div className="content">
                    <h2>Julien Fallempin</h2>
                    <h3>Dévelopeur front-end</h3>
                    <h4>A propos de moi</h4>
                    <p style={{marginRight:"10%"}}>Je suis actuellement en 5-ème année d’école d’ingénieur au Cesi à Saint-Nazaire et je recherche activement un stage de fin d’étude dans le développement web.
                    Le stage doit se dérouler entre le 24 janvier 2022 et se terminer le 29 juillet 2022.
                    Très motivé, je suis déterminé à apprendre rapidement dans ce domaine qui me passionne.
                    Pour toutes questions supplémentaires je serais ravie de pouvoir vous répondre par mail, par téléphone ou encore lors d’un entretien.
                    </p>
                    <div className="pdf" style={{marginTop:"10%"}}>
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Home;