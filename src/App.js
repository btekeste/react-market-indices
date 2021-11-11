import React from 'react';
import { Header } from './components/Header';
import { Holdings } from './components/Holdings';
import { AssetList } from './components/AssetList';
import { AddNewAsset } from './components/AddNewAsset';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="main">
        <Holdings />
        <AssetList />
        <AddNewAsset />
      </div>
    </GlobalProvider>
  );
}

export default App;
