import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
// importing Canvas element
import CanvasDraw from 'react-canvas-draw';



class App extends Component {

  state = {
    color: "#ffc600",
    width: 500,
    height: 500,
    brushRadius: 10,
    // helps load only necessary code when user requests for it
    // this enables loading time to be faster upon initial upload
    lazyRadius: 5
  };


  componentDidMount(){
    window.setInterval(() => {
      this.setState({
        // changes color randomly every 2 seconds 
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000)
  }

  render(){
    return(

      <div className="App">
        <header style={{
          backgroundColor: this.state.color
        }}>
          <h1>Noodle Doodle</h1>
        </header>
          <h3 className="drawpad-link">Instructions: Grab Mouse, Click down, Drag across screen, Release when done</h3>
        {/* Order of the the line below is important so rendering it under the h3 instructions text*/}
        {/* Canvas can also be written as follows:
          <Canvas id="target-id-sample" width="150" height="300"></Canvas>
          It is similiar to an img tag but without src and img tag attributes
        */}
        {/* onChange empty arrow function just to log msg about each time brush color changes */}
          <CanvasDraw onChange={() => console.log("Brush should change color now")}></CanvasDraw>
        <div>
          Random color:{" "}
          <div
            className="color-block"
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: this.state.color,
              border: "1px solid #272727"
            }}
            />
    
     
          <CanvasDraw brushColor={this.state.color} /> 
        <div>
          Random Color:{" "}
          <div
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              backgroundColor: this.state.color,
              border: "1px solid #272727"
            }}
          />
        </div>

        </div>
      </div>
    )
  }
}

// ReactDOM.render(
//   <React.StrictMode>
//     {/* Added CanvasDraw */}
//     <Canvas/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


export default App;
