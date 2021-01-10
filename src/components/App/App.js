import React, {Component} from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import DrawPad from '../DrawPad/DrawPad.js';

class App extends Component {

// creating local state to store variables
// state = {
//   name: '',
//   last: ''
// }

// handleChange = (event, input) => {
//   this.setState({
//     [input]: event.target.value
//   })
// }

// handleClick = () => {
//   console.log('Submit button working');
//   this.setState({
//     name: '',
//     last: ''
//   })
// }


  render(){
    // console.log('Rendering:', this.state);
    
    return(
      <div>
        <header>
          <h1>Spike Solo Project</h1>
        </header>
         {/* <form>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event, 'name')}/>
            <label>Last:</label>
            <input type="text" value={this.state.last} onChange={(event) => this.handleChange(event, 'last')}/>
            <button onClick={this.handleClick}>Submit</button>
          </form>  */}
          <h3 className="drawpad-link">
          <Router>
            <Link to="/drawpad" replace>Click to Draw Your Feelings Out</Link>
            <Route exact path="/"></Route>
            <Route path="/drawpad" component={DrawPad}/>
          </Router>
          </h3>
      </div>
    )
  }
}

export default App;
