import "./App.scss";
import data from './interchanges.json';

function TollCalculator() {
  return (
    <div className="toll">
      <header>TOLL CALCULATOR</header>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
      </select>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
      </select>
     <button>Calculate</button>
     <p></p>
    </div>
  );
}

export default TollCalculator;
