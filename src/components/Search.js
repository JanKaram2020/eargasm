import React from "react";
import Fuse from "fuse.js";
import { Link, useParams } from "react-router-dom";
import { songs } from "../Database";
const fuse = new Fuse(songs, {
  keys: ["name", "artist", "album", "genre"],
});
function Search() {
  let { name } = useParams();
  const result = fuse.search(`${name}`);
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
          <thead className="thead-dark">
          <tr><th>Name</th><th>Artist</th><th>Album</th><th>Genre</th><th>Link</th></tr>
          </thead>
        <tbody>
          {result.map((s, i) => (
            <tr key={`${s.item.name + i}`}>
              <td> {s.item.name} </td>
              <td>
                {" "}
                <Link to={"/artists/" + s.item.artist.replace(/\s/g, '').toLowerCase()}>{s.item.artist}</Link>
              </td>
              <td>
                {" "}
                <Link to={"/albums/" + s.item.album.replace(/\s/g, '').toLowerCase()}>{s.item.album}</Link>
              </td>
              <td>
                {" "}
                <Link to={"/genres/" + s.item.genre.replace(/\s/g, '').toLowerCase()}>{s.item.genre}</Link>
              </td>
              <td>
                {" "}
                <a href={s.item.link} target="blank">
                  {s.item.link}
                </a>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Search;
