import React, {Component} from 'react';
// import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
// import DrawPad from '../DrawPad/DrawPad.js';


class App extends Component {

handleDelete = () => {
  console.log('Deleted canvas');
  
}





  render(){
    // console.log('Rendering:', this.state);
    
    return(
      <div className="App">
        <header>
          <h1>What Makes You Happy?</h1>
        </header>
         {/* <form>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event, 'name')}/>
            <label>Last:</label>
            <input type="text" value={this.state.last} onChange={(event) => this.handleChange(event, 'last')}/>
            <button onClick={this.handleClick}>Submit</button>
          </form>  */}
          <h3 className="drawpad-link">Instructions: Grab Mouse, Click down, Drag across screen, Release when done</h3>
          {/* <Router>
            <Link to="/drawpad" replace>Click to Draw Your Feelings Out</Link>
            <Route exact path="/"></Route>
            <Route exact path="/drawpad" component={DrawPad}/>
          </Router> */}
          <button onClick={this.handleDelete}>Delete Drawing</button>
      </div>
    )
  }
}

export default App;
