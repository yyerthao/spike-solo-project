import React, {Component} from 'react';
import CanvasDraw from 'react-canvas-draw';
import ReactDOM from 'react-dom';
import './App.css';
// importing Canvas from 
import Canvas from 'react-canvas-draw';
// import hook stuff 


class App extends Component {

  render(){
    // console.log('Rendering:', this.state);



    const startDrawing = () => {
      
    }

    const stopDrawing = () => {

    }

    const draw = () => {

    }


    
    return(
      <div className="App">
        <header>
          <h1>What Makes You Happy?</h1>
        </header>
          <h3 className="drawpad-link">Instructions: Grab Mouse, Click down, Drag across screen, Release when done</h3>
        {/* Order of the the line below is important so rendering it under the h3 instructions text*/}
        {/* Canvas can also be written as follows:
          <Canvas id="target-id-sample" width="150" height="300"></Canvas>
          It is similiar to an img tag but without src and img tag attributes
        */}
        <Canvas
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
        
        
        
        ></Canvas>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* Added CanvasDraw */}
    <CanvasDraw/>
  </React.StrictMode>,
  document.getElementById('root')
);


export default App;
