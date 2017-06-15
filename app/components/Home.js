import React, { Component } from "react";
//import Panel from "./common/Panel";
//import QuoteForm from "./common/QuoteForm";
//import API from "../utils/API";
class Home extends Component {
    constructor() {
        super();
        this.state = {
        quotes: []
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    sdf
                  { //quotes form goes here 
                  }
                </div>
                <div className="row">
                    <hr />
                    {
                        //render quotes
                    }
                </div>
            </div>
        );
    }
}
export default Home;