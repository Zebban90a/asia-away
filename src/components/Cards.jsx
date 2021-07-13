import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/hanoi.jpg"
              text="Hanoi city of madness by BROB"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/phillipines.jpg"
              text="A must, the phillipnes"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/bali.jfif"
              text="Bali on the road again"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/laos.jfif"
              text="Laos 4000 islands (Sen lite tubing)"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/malay.jfif"
              text="Travel through Malaysia as well"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
