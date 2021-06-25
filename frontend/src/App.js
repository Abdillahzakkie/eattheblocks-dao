import { useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import { web3Context } from './components/Context';
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Home from './pages/Home';
import Footer from "./components/Footer";

const ethereum = window.ethereum;
let updateAccount;

const App = () => {
  const { updateAccount: _updateAccount } = useContext(web3Context);
  updateAccount = _updateAccount;

  return (
    <div className="grid App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
      <ScrollTop />
    </div>
  );
}
ethereum.on("accountsChanged", async (_accounts) => updateAccount(_accounts[0]));
ethereum.on("chainChanged", () => window.location.reload());

// document.addEventListener("scroll", handleEffect);
export default App;
