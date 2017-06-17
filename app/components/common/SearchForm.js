import React, { Component } from "react";
//import API from "../utils/API";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryTerm: "",
      startYear:"",
      endYear: ""
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleInputChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log(newState);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    console.log(this.state);
    this.props.setQuery(this.state.queryTerm, this.state.startYear, this.state.endYear);
    this.setState({ 
      queryTerm: "", 
      startYear: "", 
      endYear: ""
   });
  }
  render() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Topic</strong>
              </h4>

              <input
                type="text"
                className="form-control text-center"
                id="queryTerm"
                value={this.state.queryTerm}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <h4 className="">
                <strong>Start Year</strong>
              </h4>
              <input
                type="text"
                id="startYear"
                className="form-control text-center"
                value={this.state.startYear}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <h4 className="">
                <strong>End Year</strong>
              </h4>
              <input
                type="text"
                id="endYear"
                className="form-control text-center"
                value={this.state.endYear}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};
export default SearchForm;