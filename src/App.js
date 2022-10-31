import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function TollCalculator() {
  const [location, setLocation] = useState({});
  const [optionA, setOptionA] = useState("Point A");
  const [optionB, setOptionB] = useState("Point B");
  const [locationA, setLocationA] = useState("");
  const [locationB, setLocationB] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (location === null) {
    return <main className="loading">Loading...</main>;
  }

  const locations = location.locations;
  const arrayNumber = Object.keys(locations);
  const route = [];
  //iterate through array
  for (const i of arrayNumber) {
    route.push(locations[i]);
  }

  route.forEach((route, i) => {
    route.id = i+1;
  })

  const handleOptionA =(e) => {
    setOptionA(e.target.value)
  }
  const handleOptionB =(e) => {
    setOptionB(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
  };

  const pointA =route.find((route) => {
    return route.name === optionA;
  })

  const pointB =route.find((route) => {
    return route.name === optionB;
  })
  console.log (pointA, pointB)

  return (
    <div className="toll">
      <header>TOLL CALCULATOR</header>
      <form onSubmit={handleSubmit}>
        <select>
          <option>Open this select menu</option>
          {route.map((pointA) => {
            return <option value={arrayNumber} onClick ={handleOptionA}>{pointA}</option>;
          })}
        </select>
        <select>
          <option>Open this select menu</option>
          {route.map((pointB) => {
            return <option value={arrayNumber} onClick = {handleOptionB}>{pointB}</option>;
          })}
        </select>
        <button>Calculate</button>
      </form>
      <p></p>
    </div>
  );
}

export default TollCalculator;
