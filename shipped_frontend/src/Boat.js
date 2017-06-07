import React, { Component } from "react";
import axios from "axios";

class Boat extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            containerAmount: "",
            returnedBoat: []
        };
        this.setName = this.setName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.setContainerAmount = this.setContainerAmount.bind(this);
        this.makeBoat = this.makeBoat.bind(this);
    }
    render() {
        var Boats;
        Boats = this.state.returnedBoat.map(function(boat) {
            return (
                <div>
                    <div>{boat.name}</div>
                    <div>{boat.location}</div>
                    <div>{boat.container_amount}</div>
                </div>
            );
        });
        return (
            <div>
                <div>
                    <input onChange={this.setName} placeholder="name" />
                    <input onChange={this.setLocation} placeholder="location" />
                    <input
                        onChange={this.setContainerAmount}
                        placeholder="Container Amount"
                    />
                    <button onClick={this.makeBoat}>Make Boat</button>
                </div>
                <div>{Boats}</div>
            </div>
        );
    }
    setName(event) {
        this.setState({ name: event.target.value });
    }
    setLocation(event) {
        this.setState({ location: event.target.value });
    }
    setContainerAmount(event) {
        this.setState({ containerAmount: event.target.value });
    }
    makeBoat() {
        axios
            .post("/boats", {
                data: {
                    name: this.state.name,
                    location: this.state.location,
                    container_amount: this.state.containerAmount
                }
            })
            .then(
                function(response) {
                    console.log(response.data);
                    this.setState({ returnedBoat: response.data });
                }.bind(this)
            );
    }
}

export default Boat;
