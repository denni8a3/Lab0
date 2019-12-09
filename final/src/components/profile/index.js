import React from 'react';
import './index.css';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {profile: []};

  }

  componentDidMount() {

    window.fetch(" http://apiexample.website/profile", {
      "method": "GET",
      "headers": {
        "api": "dennis",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "{}",
        "number": "[]"
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({profile: data.profile}) )
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        <h2>Added</h2>

        <p>{this.state.profile.name}</p>
        <p>{this.state.profile.number}</p>

      </div>
    );
  }
}

export default Profile;
