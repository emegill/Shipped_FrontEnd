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
    <div>
      <Boat boatsList={this.state.Boats} />
      <Jobs jobsList={this.state.Jobs} />
    </div>;
  }
  componentWillMount() {
    // axios for boat and jobs
  }
}

export default Profile;
