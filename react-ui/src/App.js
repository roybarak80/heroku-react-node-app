import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
      
    };
  }

  componentDidMount() {
    fetch('/api', {
        method: "GET"
    }).then(response => response.json())
        .then(json => {
            this.setState({
                message: json
               
            })
          

        })
}

  // componentDidMount() {
  //   fetch('/api')
  //     .then(response => {

  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     }).then(
        
  //       response => console.log('Success:', response))
    
  //     .then(response => {
  //       this.setState({
  //         message: response,
  //         fetching: false
  //       });
  //     }).catch(e => {
  //       this.setState({
  //         message: `API call failed: ${e}`,
  //         fetching: false
  //       });
  //     })
  // }

  render() {
   
    
    return (
      <div className="App">
        
        <p className="App-intro">
          {'This is '}
          <a href="https://github.com/mars/heroku-cra-node">
            {'create-react-app with a custom Node/Express server'}
          </a><br/>
        </p>
       
        <List carslist={this.state.message}/>
      </div>
    );
  }
}

export default App;
