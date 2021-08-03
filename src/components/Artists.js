import React from 'react';
import {artists} from '../Database';
import Art from "./artist";

export class Artist extends React.Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        {artists.map(artist => <Art artist={artist} key={artist.name} type="artists"/>)}
                    </div>
                </div>
        );
    };
};
export default Artist;