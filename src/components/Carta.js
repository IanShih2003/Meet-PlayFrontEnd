import React from "react";
import "../App.css";

function Card(props) {
  const star = {
    marginLeft: 10,
    marginBottom: 35,
  };
  /* const {desc} = props.description */

  return (
    <form className="cardstyle" action="">
      <img
        style={{ marginLeft: 5, marginTop: 5 }}
        src={require("../user.png")}
        alt=""
      />
      <img style={star} src={require("../components/fullstar.png")} alt="" />
      <img style={star} src={require("../components/fullstar.png")} alt="" />
      <img style={star} src={require("../components/halfstar.png")} alt="" />
      <img style={star} src={require("../components/emptystar.png")} alt="" />
      <p
        style={{ color: "gray", marginLeft: 120, fontSize: 27, marginTop: -40 }}
      >
        {props.user}
      </p>
      {/* <p style={{color: 'lightgray', marginLeft: 200, fontSize: 25, marginTop: -35,}}>21</p> */}
      <hr className="HR" style={{ marginTop: 10 }} />
      <p style={{ color: "lightgray", marginLeft: 2 }}>
        Hola! Soy nuevo en esta plataforma y me encantaria jugar contigo
      </p>
      <hr className="hrcard" style={{ marginTop: 100 }} />
      <p style={{ color: "lightgray", marginLeft: 2 }}>
        Idiomas{props.language}
      </p>
      <hr className="hrcard" style={{ marginTop: 120 }} />
      <p style={{ color: "lightgray", marginLeft: 2 }}>Juegos {props.games.map((item) => 
        <p>
          {item.game}
        </p>
      )}</p>
      <hr className="hrcard" style={{ marginTop: 120 }} />
      <p style={{ color: "lightgray", marginLeft: 2 }}>Cuentas</p>
    </form>

    /*<form className="formreg1" action=""></form>

        <form className="formreg2" action=""></form>*/

    /*<div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>*/
  );
}

export default Card;
