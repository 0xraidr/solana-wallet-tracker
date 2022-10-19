import axios from "axios";
import TxnApi from "./components/TxnApi";
import Header from "./components/Header";

function App() {
  return (
    <div className="App h-screen bg-gradient-to-b from-black via-black to-green-600">
      <Header />
      <TxnApi />
    </div>
  );
}

export default App;
