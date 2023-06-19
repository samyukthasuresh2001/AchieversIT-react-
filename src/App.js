import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Header from './Components/layout/Header';
import Banner from './Components/layout/Banner';
import Card1 from './Components/layout/card-1';
import Card2 from './Components/layout/card-2';
import Gridcolumns from './Components/layout/grid-columns';








function App() {
  return (
    <>
      <Header />
      <Banner />
      <h2>TRENDING COURSES</h2>
      <Card1 />
      <h2>RECENT ADDITIONS</h2>
      <Card2 />
      <h2>DISCOVER TOP CATEGORIES</h2>
      <Gridcolumns />
      







    </>
  );
}

export default App;
