import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchData } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import Mainlayout from "./components/Mainlayout";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
