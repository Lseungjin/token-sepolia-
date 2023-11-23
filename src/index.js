import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ethers } from 'ethers';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

const url = "https://sepolia.infura.io/v3/9c04eeb132eb4b1ba20c8641f4128762";
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

customHttpProvider.getBlockNumber().then((result) => {
  console.log("Current block number: " + result);
});

const projectId = '9c04eeb132eb4b1ba20c8641f4128762';
const data = {
  jsonrpc: "2.0",
  method: "eth_blockNumber",
  params: [],
  id: 1,
};

axios.post(`https://sepolia.infura.io/v3/${projectId}`, data)
  .then((response) => {
    console.log(`statusCode: ${response.status}`);
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

serviceWorker.unregister();
