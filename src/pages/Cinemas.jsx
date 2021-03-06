import React, {useEffect, useState} from 'react';
import fakeDataCinema from "../fakeDataForDev/fakeData";
import {Link} from "react-router-dom";

const Cinemas = () => {

    const [cinemas, setCinema] = useState([]);


    useEffect(() => {
        fetchCinema();
    }, []);

    const fetchCinema = () => {
        const cinemaList = fakeDataCinema();
        setCinema(cinemaList);
    };

    return <>
        <h1>Les Cinémas</h1>
        <div className="row">
            {cinemas.map(cinema =>
                <div key={cinema.id} className="card col-2 mr-2">
                    <div className="card-body">
                        <h5 className="card-title">{cinema.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{cinema.adresse} {cinema.codePostal} {cinema.ville}</h6>
                        <Link to={"/cinema/" + cinema.id} className="btn btn-primary">Voir le cinéma</Link>
                    </div>
                </div>
            )}
        </div>
    </>
}
export default Cinemas;
