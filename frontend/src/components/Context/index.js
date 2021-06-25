import { createContext, Component } from "react";
import Web3 from "web3";
// import axios from "axios";

const web3Context = createContext();

class Web3Provider extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      loading: true,
      web3: null,
      user: process.env.REACT_APP_defaultAccount,
      ethereum: null,
      etbTokenAddress: "",
      etbToken: null,
      balance: 0,
    };
  }

  async componentDidMount() {
    await this.connectDapp();
  }

  connectDapp = async () => {
    try {
      await this.loadWeb3();
      await this.loadBlockchainData();
    } catch (error) {
      return error;
    }
  };

  loadWeb3 = async () => {
    try {
      const ethereum = window.ethereum;
      await ethereum.enable();

      // Get Network / chainId
      const _chainId = await ethereum.request({ method: "eth_chainId" });
      const _accounts = await ethereum.request({ method: "eth_accounts" });
      const web3 = new Web3(ethereum);
      const _netWorkType = await web3.eth.net.getNetworkType();

      if (parseInt(_chainId, 16) !== 1 && parseInt(_chainId, 16) !== 4) {
        this.setState({ loading: true });
        return alert(`EatTheBlock: Invalid network detected. Please switch from ${_netWorkType} to Mainnet / Rinkeby`);
      }


      const user = web3.utils.toChecksumAddress(_accounts[0]);
      this.setState({
        loading: false,
        web3,
        user,
        ethereum,
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

  // load blockchain data
  loadBlockchainData = async ({ loading, web3, user, amusedToken, amusedVault } = this.state) => {
    try {
      
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  };

  reRender = async () => await this.loadBlockchainData();

  updateAccount = async (_newAddress) => {
    try {
      this.setState({ user: _newAddress });
      await this.reRender();
    } catch (error) {
      return error;
    }
  };

  fromWei = (_amount, { web3 } = this.state) => web3.utils.fromWei(_amount.toString(), "ether");

  toWei = (_amount, { web3 } = this.state) => web3.utils.toWei(_amount.toString(), "ether");

  toChecksumAddress = (_account, { web3 } = this.state) => web3.utils.toChecksumAddress(_account);

  render() {
    return (
      <web3Context.Provider
        value={{
          ...this.state,
          fromWei: this.fromWei,
          toWei: this.toWei,
          connectDapp: this.connectDapp,
          updateAccount: this.updateAccount,
        }}
      >
        {this.props.children}
      </web3Context.Provider>
    );
  }
}

export { web3Context, Web3Provider };
