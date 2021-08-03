import React from "react";
import { albums } from "../Database";
import Art from "./artist";
export class Album extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {albums.map((album) => (
            <Art artist={album} key={album.name} type="albums" />
          ))}
        </div>
      </div>
    );
  }
}
export default Album;
