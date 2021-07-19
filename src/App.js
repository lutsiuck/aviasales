import './App.css';
import Header from "./components/Header/Header";
import HomeContainer from "./pages/Home/HomeContainer";

function App() {
  return (
    <div className="wrap">
        <Header/>
        <HomeContainer/>
    </div>
  );
}

export default App;
