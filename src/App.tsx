import "./App.css";
import api from "./api/api";
import Countries from "./components/Countries";
import QueryProvider from "./query/queryClient";

function App() {
  api.country.getCountriesInfo();
  return (
    <QueryProvider>
      <Countries />
    </QueryProvider>
  );
}

export default App;
