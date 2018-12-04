import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import AnimatedEllipsis from 'react-animated-ellipsis';
import {Button} from "react-bootstrap";


class App extends Component {

    constructor(props) {
        super(props);
        this.handleComponentHide = this.handleComponentHide.bind(this);

        this.state = {
            hide: true
        };
    }

    componentDidMount(){
    }

    handleComponentHide() {
        if(this.state.hide){
            this.setState({
                hide:false
            })
        }else{
            this.setState({
                hide:true
            })
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.hide?
                <Button onClick={this.handleComponentHide}>Open</Button>
                    :null}
                {!this.state.hide?
                <Navigation showFunction={this.handleComponentHide}/>
                :null}
            </div>
        );
    }
}

export default App;
