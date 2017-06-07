import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Boat from "./Boat";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: this.props.userList,
            Boats: [],
            Jobs: []
        };
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Link to="/boats">Go to Boats</Link>
                        <Link to="/boats">Go to Jobs</Link>

                        <Route path="/boats" component={Boat} />
                        <Route path="/jobs" component={Job} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Profile;
