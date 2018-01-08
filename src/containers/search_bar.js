import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" }); //clear input
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <div className="input-single">
            <input
              placeholder="Get a five-day forecast in your favourite city"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          <span className="input-group-btn search-wrap">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </span>
        </form>
        {this.props.isLoading && (
          <div className="icon-loader">
            <div className="loader" />
          </div>
        )}
        {this.props.cityWeatherError ? (
          <p>{this.props.cityWeatherError}</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state=", state);
  return {
    cityWeatherError: state.cityWeather.message,
    isLoading: state.cityWeather.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
