import React, {Component} from 'react';
import './App.css';

class App extends Component {

// creating local state to store variables
state = {
  name: '',
  last: ''
}

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
          <h1>React Canvas</h1>
          {/* <form>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event, 'name')}/>
            <label>Last:</label>
            <input type="text" value={this.state.last} onChange={(event) => this.handleChange(event, 'last')}/>
            <button onClick={this.handleClick}>Submit</button>
          </form> */}
        </header>
      </div>
    )
  }
}

export default App;
