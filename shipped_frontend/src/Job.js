// axios post to make jobs
import React, { Component } from "react";
import axios from "axios";

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            origin: "",
            destination: "",
            cost: "",
            containers_needed: "",
            name: "",
            boat_id: "",
            user_id: this.props.userid
        };
        this.setDescription = this.setDescription.bind(this);
        this.setOrigin = this.setOrigin.bind(this);
        this.setDestination = this.setDestination.bind(this);
        this.setCost = this.setCost.bind(this);
        this.setContainerAmount = this.setContainerAmount.bind(this);
        this.setName = this.setName.bind(this);
        this.setBoatId = this.setBoatId.bind(this);
        this.makeJob = this.makeJob.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <input
                        onChange={this.setDescription}
                        placeholder="description"
                    />
                    <input onChange={this.setOrigin} placeholder="Origin" />
                    <input
                        onChange={this.setDestination}
                        placeholder="destination"
                    />
                    <input onChange={this.setCost} placeholder="cost" />
                    <input
                        onChange={this.setContainerAmount}
                        placeholder="container amount"
                    />
                    <label>Boat Id</label>
                    <select onChange={this.setBoatId} placeholder="boat id">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <input onChange={this.setName} placeholder="name" />
                    <button onClick={this.makeJob}>Make Job</button>
                </div>
            </div>
        );
    }
    setDescription(event) {
        this.setState({ description: event.target.value });
    }
    setOrigin(event) {
        this.setState({ origin: event.target.value });
    }
    setDestination(event) {
        this.setState({ destination: event.target.value });
    }
    setContainerAmount(event) {
        this.setState({ container_needed: event.target.value });
    }
    setCost(event) {
        this.setState({ cost: event.target.value });
    }
    setBoatId(event) {
        this.setState({ boat_id: event.target.value });
    }
    setName(event) {
        this.setState({ name: event.target.value });
    }
    makeJob() {
        axios
            .post("/jobs", {
                data: {
                    description: this.state.description,
                    origin: this.state.origin,
                    destination: this.state.destination,
                    cost: this.state.cost,
                    containers_needed: this.state.container_needed,
                    boat_id: this.state.boat_id,
                    name: this.state.name,
                    user_id: this.state.user_id
                }
            })
            .then(function(response) {
                console.log(response.data);
            });
    }
}

export default Job;
