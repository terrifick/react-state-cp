import React, { Component } from "react";
import "./App.css";
import People from "./Components/People";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          id: 1,
          fullName: "Ada Ehi",
          bio: "Ada Ogochukwu Ehi (born 18 September 1987), simply known by her stage name Ada Ehi, is a Nigerian gospel singer, songwriter, recording and performing artist.[2] She started her musical career at the age of 10 as a backup singer for child star Tosin Jegede. Since she professionally started her music career under Loveworld Records in 2009, she has increasingly gained local and international popularity through her songs and music videos",
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ada_Ehi_Cameroon.jpg/800px-Ada_Ehi_Cameroon.jpg",
          profession: "Artist",
          shows: true,
        },
        {
          id: 2,
          fullName: "Adekunle Almoruf Kosoko",
          bio: "Adekunle Almoruf Kosoko (born 28 January 1987), known professionally as Adekunle Gold and AG Baby, is a Nigerian highlife singer, songwriter and graphic designer.[1] He gained widespread attention after releasing the 2015 hit single Sade, a highlife cover of One Direction's Story of My Life.[2] He signed a record deal with YBNL Nation and released his 2015 debut studio album Gold, which debuted at number 7 on the Billboard World Albums chart. Gold was preceded by the release of three singles: Sade, Orente and Pick Up. Adekunle Gold revealed to Nigerian Entertainment Today that prior to signing with YBNL, he designed the label's official logo and comple ted other designs for Lil Kesh, Viktoh and Olamide",
          imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Adekunle-gold-3.jpg",
          profession: "Artist",
          shows: true,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState({
      people: this.state.people.map((el) =>
        el.id === id ? { ...el, shows: !el.shows } : el
      ),
    });
  };

  render() {
    return (
      <div>
        <People
          people={this.state.people}
          handleChange={this.handleChange}
          hidePerson={this.hidePerson}
        />
      </div>
    );
  }
}
