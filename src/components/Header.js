import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    search: "",
  };
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  };
  searchHandler = (e) => {
    e.preventDefault();
    const search = this.state.search.replace(/\s/g, '').toLowerCase();
    this.props.history.push(`/search/${search}`);
  };
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/" className="navbar-brand">
            {" "}
            Eargasm{" "}
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/artists" className="nav-link">
                  {" "}
                  Artists
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/albums" className="nav-link">
                  {" "}
                  Albums
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/genres" className="nav-link">
                  {" "}
                  Genres
                </Link>
              </li>
            </ul>
            <form
              className="form-inline mt-2 mt-md-0"
              onSubmit={this.searchHandler}
            >
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={this.changeHandler}
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Header);
