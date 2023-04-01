import React from 'react'

const ActiveNewUser = (props) => {
  return (
    // currently active and new users 
    <div className="active">
      <div className="active-users" style={{background: `conic-gradient(${props.color} ${props.percentage},lightgray 25%)`}}>
        <div style={{ color: "#383874", fontWeight: "400" }}>
          {props.percentage}
        </div>
      </div>
      <p style={{ paddingLeft: "1rem", color: "#383874", fontWeight: "400" }}>
        <span>{props.title}</span>
        <br />
        <span>{props.user}</span>
      </p>
    </div>
  );
}

export default ActiveNewUser
