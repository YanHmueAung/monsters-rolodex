import React from "react";
import "./card-list.styles.css";
import {Card} from "../card/card.components";

export const CardList = (props) => (
  <div className="card-list">
  {props.monster.map((monsters) => (
      <Card key={monsters.id} monster={monsters}/>
      ))};
  </div>
);
