import React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";
import { songs } from "../Database";
function Child() {
  let { path } = useRouteMatch();
  let { name } = useParams();
  const nam1 = name.toString();
  let fav;
  if (path.includes("artists")) {
    fav = songs.filter((song) => song.artist.replace(/\s/g, '').toLowerCase() === nam1);
  } else if (path.includes("albums")) {
    fav = songs.filter((song) => song.album.replace(/\s/g, '').toLowerCase() === nam1);
  } else if (path.includes("genres")) {
    fav = songs.filter((s) => s.genre.toString().replace(/\s/g, '').toLowerCase() === nam1);
  }
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr><th>Name</th><th>Artist</th><th>Album</th><th>Genre</th><th>Link</th></tr>
        </thead>
        <tbody>
          {fav.map((s) => (
            <tr key={s.name}>
              <td> {s.name} </td>
              <td>
                <Link to={"/artists/" + s.artist.replace(/\s/g, '').toLowerCase()}>{s.artist}</Link>
              </td>
              <td>
                <Link to={"/albums/" + s.album.replace(/\s/g, '').toLowerCase()}>{s.album}</Link>
              </td>
              <td>
                <Link to={"/genres/" + s.genre.replace(/\s/g, '').toLowerCase()}>{s.genre}</Link>
              </td>
              <td>
                <a href={s.link} target="blank">
                  {s.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Child;
