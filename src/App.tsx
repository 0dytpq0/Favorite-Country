import "./App.css";
import api from "./api/api";
import Countries from "./components/Countries";

function App() {
  api.country.getCountriesInfo();
  return (
    <div>
      <Countries />
    </div>
  );
}

export default App;
