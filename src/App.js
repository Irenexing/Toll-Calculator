import "./App.scss";
import data from "./interchanges.json";

function TollCalculator() {
  const locations = data.locations;
  console.log(locations);
  const arrayNumber = Object.keys(locations);
  const departureName = [];
  //iterate through array
  for (const i of arrayNumber) {
    departureName.push(locations[i].name);
  }
  console.log(Object.keys(locations));
  console.log(arrayNumber)
  console.log(departureName);

  const destinationId = [];
  for (const i of arrayNumber) {
    destinationId.push(locations[i].routes[i].toId);
  }
  console.log(locations[1].routes[0].toId)
  console.log(destinationId)

  return (
    <div className="toll">
      <header>TOLL CALCULATOR</header>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
        {departureName.map((location) => {
          return <option>{location}</option>;
        })}
      </select>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
        {departureName.map((location) => {
          return <option>{location}</option>;
        })}
      </select>
      <button>Calculate</button>
      <p></p>
    </div>
  );
}

export default TollCalculator;
