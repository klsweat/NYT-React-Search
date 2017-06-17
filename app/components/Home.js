import React, { Component } from "react";
//import Panel from "./common/Panel";
import SearchForm from "./common/SearchForm";
//import API from "../utils/API";

import Results from "./common/Results";


// Helper Function
import helpers from "./utils/helpers";

class Home extends Component {
  constructor() {
    super();
    this.state = {
        queryTerm: '',
		results: [],
		startYear: '',
		endYear: ''
    };
    // Binding getArticles to our component since we'll be passing this
    // method to child components
    //this.getArticles = ths.getArticles.bind(this);
    this.setQuery = this.setQuery.bind(this);

  }


 componentDidUpdate(prevProps, prevState) {
    if (prevState.queryTerm !== this.state.queryTerm) {
      console.log("UPDATED");
      helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear).then((data) => {
        if (data !== this.state.results) {
          console.log("data");
          console.log(data);
          this.setState({ results: data });
        }
      });
    }
  }

    setQuery(term, year1, year2) {
      console.log("term: " + term);
      console.log("startYear: " + year1);
      console.log("endYear: " + year2);

    this.setState({
      queryTerm: term,
      startYear: year1,
      endYear: year2,
      results: []

    });
  }



  //getArticles() {
 //   API.getArticles().then(res => {
 //     this.setState({ articles: res.data });
 //   });
 // }

// A helper method for rendering one panel for each article
//renderArticles() {
//    <Panel
//    article={article}
//    key={article._id}
//    getArticles={this.getArticles}
//    />
//}

  render() {
    return (
      <div className="container">
        <div className="row">
            <SearchForm
            setQuery = {this.setQuery}
             />
         
        </div>
        <div className="row">
          <hr />
            <Results nytArticles={this.state.results} />

        </div>
      </div>
    );
  }
}
export default Home;
