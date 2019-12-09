import React, { Component } from 'react';
import './index.css';

class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {added: {}};

  }

  componentDidMount() {

    fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "dennis",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "{rognark}",
        "number": "[78851-7859-42220]"
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        <h2>Added</h2>

        <p>{this.state.added.name}</p>
        <p>{this.state.added.number}</p>

      </div>
    );
  }
}
