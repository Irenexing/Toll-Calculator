import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import data from "./data/interchanges.json";
import { ChakraProvider, Center, Select, ModalFocusScope } from "@chakra-ui/react";

const calculateDistance = (routes, locationA, locationB) =>{
  const routesArray = [];
  let included = false;
  let lower;
  let higher;
  let totalDistance = 0;

  if (locationA.id < locationB.id) {
    lower = locationA;
    higher = locationB;
  } else {
    lower = locationB;
    higher = locationA;
  }

  for (const route of routes) {
    if (lower.id === route.id) {
      included = true;
    }

    if (higher.id === route.id) {
      routesArray.push(route);
      included = false;
    }

    if (included) {
      routesArray.push(route);
    }
  }

  for (const route of routesArray) {
    totalDistance += route.routes[0].distance;
  }

  totalDistance -= routesArray[routesArray.length - 1].routes[0].distance;

  return totalDistance.toFixed(3);
}

function TollCalculator() {
  const [location, setLocation] = useState({});
  const [optionA, setOptionA] = useState("Point A");
  const [optionB, setOptionB] = useState("Point B");
  const [locationA, setLocationA] = useState("");
  const [locationB, setLocationB] = useState("");

  useEffect(() => {
    async function fetchData(setLocation) {
      let result = await axios.get(`http://localhost:8080/`);
      setLocation(result.data);
    }
    fetchData(setLocation);
  }, []);

  const locations = location.locations || {};

  const arrayNumber = Object.keys(locations);

  if (_.isEmpty(locations)) {
    return <main className="loading">Loading...</main>;
  }

  const routes = [];
  // iterate through array
  for (const i of arrayNumber) {
    routes.push(locations[i]);
    // add id to the routes array for easier access
    routes[routes.length - 1].id = i;
  }

  const handleOptionA = (e) => {
    setOptionA(e.target.value);
  };

  const handleOptionB = (e) => {
    setOptionB(e.target.value);
  };

  function totalTollCharges(routes, start, end) {
    return calculateDistance(routes, start, end) * 0.25;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const pointA = routes.find((route) => {
      return route.name === optionA;
    });

    const pointB = routes.find((route) => {
      return route.name === optionB;
    });

    setLocationA(pointA);
    setLocationB(pointB);
  };

  return (
    <ChakraProvider>
      <Center bg="lightblue" h="100vh" color="black">
        <form onSubmit={handleSubmit}>
          <Select
            placeholder="Point A"
            value={optionA}
            onChange={handleOptionA}
          >
            {routes &&
              routes.map((route) => {
                return <option className="menu__option">{route.name}</option>;
              })}
          </Select>
          <Select
            placeholder="Point B"
            value={optionB}
            onChange={handleOptionB}
          >
            {routes &&
              routes.map((route) => {
                return <option className="menu__option">{route.name}</option>;
              })}
          </Select>

          <button
            className="button"
            type="submit"
            disabled={optionA === "Point A" || optionB === "Point B"}
          >
            Submit
          </button>
          {!locationA == "" && !locationB == "" && (
            <>
              <p>
                Distance:{" "}
                {calculateDistance(routes, locationA, locationB)}
              </p>
              <p>
                Total Charges:{" "}
                {totalTollCharges(routes, locationA, locationB).toFixed(2)}
              </p>
            </>
          )}
        </form>
      </Center>
    </ChakraProvider>
  );
}

export default TollCalculator;
module.exports = calculateDistance; 
