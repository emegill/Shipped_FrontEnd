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
                        <Route path="/boats" component={Boat} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Profile;
