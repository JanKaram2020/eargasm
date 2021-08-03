import React from "react";

export class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="row">
          <div className="col-6 mx-auto col-md-6 order-md-2 rightDiv"/>
          <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
            <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
              <h1 className="mb-3 bd-text-purple-bright">Eargasm</h1>
              <p className="lead">
                Browse songs , albums , genres and artists here on my first
                re-made site made by your front-end-developer in the making Jan
                Karam.
              </p>
              <p className="lead mb-4">
                Eargasm is a music web site made by me in order to navigate
                music easier. it's made using react, react-router, javascript,
                bootstrap, css and html. it's responsive which means that it can
                work cross-platform and light weight site which means it won't
                cost you a lot of data.
              </p>
              <p className="text-muted mb-0">Currently v2.0.0</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
