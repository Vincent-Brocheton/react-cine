import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Link, Switch, Route} from 'react-router-dom';
import Accueil from "./pages/Accueil";
import Cinemas from "./pages/Cinemas";
import Cinema from "./pages/Cinema";

function App() {
    return <>
        <HashRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">ReactCiné</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cinema">Cinéma</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        <Switch>
            <Route path="/cinema/:id" component={Cinema}/>
            <Route path="/cinema" component={Cinemas}/>
            <Route path="/" component={Accueil}/>
        </Switch>
        </HashRouter>
        </>;


}

export default App;
