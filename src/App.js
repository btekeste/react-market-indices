import React from 'react';
import { Header } from './components/Header';
import { Holdings } from './components/Holdings';
import { AssetList } from './components/AssetList';
import { AddNewAsset } from './components/AddNewAsset';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
      <div>
          <GlobalProvider>
          <div className="md:p-4 p-2 md:m-20 bg-white md:rounded-xl md:shadow-2xl">
            <Header />                
            <div className="main">
              <Holdings />
              <AssetList />
              <AddNewAsset />
            </div>
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
