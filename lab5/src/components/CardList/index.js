import React from "react";
import Card from "../Card/";


class CardList extends React.Component {

  constructor(props) {

    super(props);

  this.state = {
      temperature: 0,
      temperatureUnit: "",
      details: ""
    };

  }
  componentDidMount() {

     // Use window.fetch to retrieve data
     // THEN convert the JSON into a JavaScript object
     // THEN work on the result

     fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
     .then(res => res.json())
     .then((result) => {
       // Save the "periods" returned by the data
       let periods = result.properties.periods;


       // Update the data using the first (0) data
       // Retrieve the "temperature",
       //  "temperatureUnit", and "detailedForecast"
       //  properties of the object.
       this.setState({
         temperature: periods[1].temperature,
         temperatureUnit: periods[1].temperatureUnit,
         details: periods[1].detailedForecast,
         name: periods[1].name
       });

     })
     .catch((error) => {console.log(error)} );

   }

  render() {
    return(
      <div>

      {this.state.temperature}
        {this.state.temperatureUnit}

        

        {this.state.name}

        <p>
          {this.state.details}
        </p>

      </div>
    );
  }


}

export default CardList;
