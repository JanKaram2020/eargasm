import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
function Art(props) {
  let { url } = useRouteMatch();
  const artist = props.artist;
  return (
    <div
      className="col-md-6 col-lg-3 center"
      style={{ marginBottom: "35px" }}
      key={artist.name}
    >
      <Link to={`${url}/${artist.name.replace(/\s/g, '').toLowerCase()}`} className="center" target="_parent">
        <div
          className="center"
          style={{
            width: 200,
            height: 200,
            backgroundImage: `url(${artist.photo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "Cover",
            boxShadow: "7px 7px 35px black",
            borderRadius: "20px",
          }}
        ></div>
      </Link>
      <Link to={`${url}/${artist.name.replace(/\s/g, '').toLowerCase()}`} className="center" target="_parent">
        {artist.name}
      </Link>
    </div>
  );
}
export default Art;
