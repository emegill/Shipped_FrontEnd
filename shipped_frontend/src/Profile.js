import React, { Component } from "react";

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
        return <div>Hello</div>;
    }
}

export default Profile;
