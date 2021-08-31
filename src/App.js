import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Navibar from "./Components/Navibar";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';

function App() {
    return (
        <>
            <Router>
                <Navibar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
