import "./App.css";
import Countries from "./components/Countries";
import QueryProvider from "./query/queryClient";

function App() {
  // layout에 넣으면 좋은건가?

  return (
    <QueryProvider>
      <Countries />
    </QueryProvider>
  );
}

export default App;
