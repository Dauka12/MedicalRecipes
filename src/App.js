import './scss/app.scss';
import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';






export const SearchContext = React.createContext("");


function App() {
  const [searchValue, setSearchValue] = React.useState('');
 
  
 
  return (

    <SearchContext.Provider value={{searchValue, setSearchValue}}>
    <div className="wrapper">
     
      <Header/>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      </div>
      </SearchContext.Provider>
  );
}



export default App;
