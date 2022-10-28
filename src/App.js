import "./App.scss";
import data from './interchanges.json';

function TollCalculator() {
  const locations = data.locations
  console.log  (locations)
 const name = [];
 //iterate through array
 for (const i of Object.keys(locations)) {name.push (locations[i].name)}
 console.log (Object.keys(locations))
 console.log (name)
  
  return (
    <div className="toll">
      <header>TOLL CALCULATOR</header>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
      {name.map ((location) => {return <option>{location}</option>})}
      </select>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
      {name.map ((location) => {return <option>{location}</option>})}
      </select>
     <button>Calculate</button>
     <p></p>
    </div>
  );
}

export default TollCalculator;
