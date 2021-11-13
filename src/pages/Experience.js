import React from 'react';
import Navigation from '../Components/Navigation';

const Experience = () => {
    return (
        <div className="knowledges">
        <Navigation></Navigation>
        <div className="experience">
            <h2>Expérience</h2>
            <div className="exp-1">
                <h4>Stage AXA</h4>
                <h5>Septembre-octobre 2018</h5>
                <p>Tâches réalisées : Réalisation d’un site internet marchand, création de devis</p>
                <p>Outil utilisés : WIX</p>
            </div>
            <div className="exp-2">
                <h4>Stage Destockage-habitat</h4>
                <h5>Avril-juin 2019 </h5>
                <p>Tâches réalisées : Maintenance d’une marketplace, ajout de fonctionnalités</p>
                <p>Langages utilisés: PHP, JavaScript, HTML, CSS</p>
            </div>
            <div className="exp-3">
                <h4>Stage VSYS-informatique</h4>
                <h5>Janvier-Avril 2020  </h5>
                <p>Tâches réalisées : Services clients, migration de serveur, installation et configuration d’ordinateur, switch, routeur,…</p>
            </div>
            <div className="exp-3">
                <h4>Stage Wiker</h4>
                <h5>Avril-juin 2019 </h5>
                <p>Tâches réalisées : Maintenance d’un site, ajout de fonctionnalités</p>
                <p>Langages utilisés: PHP, JavaScript, HTML, CSS</p>
            </div>
        </div>
    </div>
    );
};

export default Experience;