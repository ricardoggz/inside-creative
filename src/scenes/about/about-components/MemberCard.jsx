import React from "react";
import "../about-styles/membercard.css";

function MemberCard(props) {
  return (
    <div className="member-card">
      <figure>
        <img src={props.img} />
      </figure>
      <div>
        <ul>
            <li>{props.name}</li>
            <li>-{props.rol}</li>
            <li>-{props.job}</li>
        </ul>
      </div>
    </div>
  );
}

export { MemberCard };
