
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import ReactDOM from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages';

import SigninPage from './pages/signin';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import facilitiesPage from './pages/facilities';

function App() {
  return (
    
    <Router>
    
<Switch>
   <Route path='/' component={Home} exact />
   <Route path='/signin' component={SigninPage} exact />
   <Route path='/facilities' component={facilitiesPage} exact/>
</Switch>


  </Router>
  
  );
}

export default App;
/* <Router>
<Switch>
   <Route path='/' component={Home} exact />
   <Route path='/signin' component={SigninPage} exact />
</Switch>

</Router> */

// &::-webkit-scrollbar {
//   width: 2em;
//   border:4px solid red;
  

// &::-webkit-scrollbar-track {
//   background: hsl(120 75% 50% / 1);

// }

// &::-webkit-scrollbar-thumb {
//   background: hsl(120 100% 20% / 1);
 
// }

// export const ScrollContainer = styled.div`
// width: 100%;
// height: 500px;
// overflow-y: auto;
// position: relative;
// &::-webkit-scrollbar {
//     width: 20px;
//     border: 1px solid red;
// }
// `;

// export const ScrollContainer=styled.div`
//  /* width: 100%; */
//     height: 90vh;
//     overflow-y: auto;

// &::-webkit-scrollbar {
//   width: 2em;
//   border:4px solid red;
// }

// &::-webkit-scrollbar-track {
//   background: hsl(120 75% 50% / 1);

// }

// &::-webkit-scrollbar-thumb {
//   background:red;
//   border:4px solid red;
// }

// `