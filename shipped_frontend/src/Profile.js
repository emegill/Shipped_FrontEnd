import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./profile.css";
import Boat from "./Boat";
import Job from "./Job";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Boats: [],
            Jobs: [],
            user_id: this.props.userid
        };
        this.displayJob = this.displayJob.bind(this);
    }
    render() {
        return (
            <div className="profile-div">
                <BrowserRouter>
                    <div>
                        <h2>Welcome to your profile page</h2>
                        <label>
                            Go to boats:<Link to="/boats">Boat page</Link>
                        </label>
                        <label>
                            Go to Jobs:<Link to="/jobs">Jobs page</Link>
                        </label>

                        <Route path="/boats" component={Boat} />
                        <Route path="/jobs" component={this.displayJob} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
    displayJob() {
        return <Job userid={this.props.userid} />;
    }
}

export default Profile;
