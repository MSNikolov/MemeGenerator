import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <MemeGenerator/>
            </div>
        )
    }
}

export default App;
