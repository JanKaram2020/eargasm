import React from "react";
import { genres } from "../Database";
import Art from "./artist";

export class Genre extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {genres.map((genre) => (
            <Art artist={genre} key={genre.name} type="genres" />
          ))}
        </div>
      </div>
    );
  }
}
export default Genre;
