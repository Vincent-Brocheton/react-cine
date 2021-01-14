import React, {useState, useEffect} from 'react';
import fakeDataCinema from "../fakeDataForDev/fakeData";
import {Link} from "react-router-dom";

const Cinema = ({history, match}) => {

    const cinemaList = fakeDataCinema();

    const id = match.params;

    const [cinema, setCinema] = useState(cinemaList[id.id]);

    useEffect(() => {
        fetchCinema(id);
    },[id]);

    const fetchCinema = id => {
        setCinema(cinemaList[id.id]);
    };

    const backToCinema = () => {
        history.replace("/cinema");
    }

    return <>
        <h2>{cinema.name}</h2>
        <div className="container">
            <div className="card m-4 p-2">
                <p className="description-style">{cinema.adresse} {cinema.codePostal} {cinema.ville}</p>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom du film</th>
                        <th>Durée</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {cinema.films.map(film =>
                    <tr key={film.id}>
                        <td>{film.titre}</td>
                        <td>{film.duree.hours} h {film.duree.minutes} min</td>
                        <td>
                            <Link className="btn btn-primary" to={"/films/" + film.id}>Voir l'affiche du film</Link>
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
            <button className="btn btn-danger" onClick={backToCinema}>Retour aux cinéma</button>
        </div>
    </>
}

export default Cinema;
