import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import App from '../App/App';
import '../App/App.css';

class DrawPad extends Component {
    render(){
        return(
            <div>
            <h2 className="h2-drawPad">
                Draw Vatti Below
            </h2>
            <Router>
                <Link to="/" replace>HOME</Link>
                <Route exact path="/" component={App}/>
            </Router>
            </div>
        )
    }
}

export default DrawPad;