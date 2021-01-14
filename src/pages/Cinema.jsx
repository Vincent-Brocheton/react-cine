import React, {useState, useEffect} from 'react';
import fakeDataCinema from "../fakeDataForDev/fakeData";

const Cinema = ({match}) => {

    const cinemaList = fakeDataCinema();

    const id = match.params;

    const [cinema, setCinema] = useState(cinemaList[id.id]);

    useEffect(() => {
        fetchCinema(id);
    },[id]);

    const fetchCinema = id => {
        setCinema(cinemaList[id.id]);
    };

    return <>
        <h2>{cinema.name}</h2>
        <div className="container">
            <div className="card m-4 p-2">
                <p className="description-style">{cinema.adresse} {cinema.codePostal} {cinema.ville}</p>
            </div>
        </div>
    </>
}

export default Cinema;
