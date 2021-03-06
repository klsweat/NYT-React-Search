import React from "react";
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">

          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title"> </h3>
            </div>
            <div className="panel-body">
                <p>{this.props.nytArticles}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Export the component back for use in other files
export default Results;
