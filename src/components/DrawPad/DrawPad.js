import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class DrawPad extends Component {
    render(){
        return(
            <div>
            <h2>
                Draw Vatti Below
            </h2>
            <Router>
                <Link to="/" replace>HOME</Link>
                <Route to="/"/>
            </Router>
            </div>
        )
    }
}

export default DrawPad;