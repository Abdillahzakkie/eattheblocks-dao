import { useContext } from 'react';
import './App.css';
import { web3Context } from './components/Context';
import Navbar from "./components/Navbar";

const ethereum = window.ethereum;
let updateAccount;

const App = () => {
  const { updateAccount: _updateAccount } = useContext(web3Context);
  updateAccount = _updateAccount;

  return (
    <div className="grid App">
      <Navbar />
    </div>
  );
}
ethereum.on("accountsChanged", async (_accounts) => updateAccount(_accounts[0]));
ethereum.on("chainChanged", () => window.location.reload());

// document.addEventListener("scroll", handleEffect);
export default App;
