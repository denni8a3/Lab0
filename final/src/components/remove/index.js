import React, { Component } from 'react';
import './index.css';

class Remove extends Component {

  constructor(props) {
    super(props);

    this.state = {remove: {}};

  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts/remove", {
      "method": "POST",
      "headers": {
        "api": "dennis",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "Jeffg",
        "number": "777"
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({remove: data.remove}) )
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        <h2>Removed</h2>
        <p>{this.state.remove.name}</p>
        <p>{this.postion.remove.number}</p>
      </div>
    );
  }
}

export default Remove;
