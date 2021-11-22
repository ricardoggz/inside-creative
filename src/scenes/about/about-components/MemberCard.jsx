import React from "react";
import "../about-styles/membercard.css";

function MemberCard(props) {
  return (
    <div className="member-card">
      <figure>
        <img src={props.img} alt="loading" />
      </figure>
      <div>
        <ul>
            <li><b>{props.name}</b></li>
            <li>{props.rol}</li>
            <li>{props.job}</li>
            <li>{props.price}</li>
            <li>{props.button}</li>
        </ul>
      </div>
    </div>
  );
}

export { MemberCard };
