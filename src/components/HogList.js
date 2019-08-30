import React, { Component } from 'react';
import HogCard from './HogCard';
import uuid from 'uuid';

export default class HogList extends Component {

    createHogCards = () => {
        return this.props.hogs.map(hog => {
            return <HogCard key={uuid()} hog={hog} />
        })
    }
    render() {
        return (
            <div>
                {this.createHogCards()}
            </div>
        )
    }
}
