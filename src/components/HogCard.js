import React, { Component } from 'react';

export default class HogCard extends Component {
    constructor() {
        super()
        this.state = {
            showPiggyDetails: false
        }
    }

    showDetails = () => {
        this.setState(prevState => {
            return { showPiggyDetails: !this.state.showPiggyDetails }
        })
    }

    render() {
        let hogImage = require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/ /g, "_")}.jpg`)
        const { name, weight, greased, specialty } = this.props.hog;
        return (
            <div>
            <button onClick={this.showDetails} >
                {this.state.showPiggyDetails
                ? 
                <div>
                    <img src={hogImage} />
                    <div>
                    Name: {name} 
                    <br />
                    Weight: {weight} 
                    <br />
                    Greased: {greased} 
                    <br />
                    Specialty: {specialty} 
                </div>
                </div>
                :
                <img src={hogImage} />
            }
            </button>
            </div>
        )
    }
}
