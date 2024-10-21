// import logo from './logo.svg';
// import './App.css';
// // import { Routes, Route } from 'react-router-dom';
// import { HashRouter as Router,Route, Routes } from "react-router-dom";
// import Layout from '../src/components/Layout/Layout'
// import Home from '../src/pages/Home/Home';
// import SingleSector from './pages/Home/SingleSector';
// import About from './pages/About/About';
// import Partners from './pages/Partners/Partners';
// import Sektors from './pages/Sectors/Sektors';
// import Equipments from './pages/Equipments/Equipments';
// import Software from './pages/Software/Software';
// import Connect from './pages/Connect/Connect';
// import Bags from './pages/Bag/Bags';
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="sectors/:sectorsId" element={<SingleSector />} />
//           <Route path="about" element={<About/>} />
//           <Route path="partners" element={<Partners/>} />
//           <Route path="sectors" element={<Sektors/>} />
//           <Route path="equipments" element={<Equipments/>} />
//           <Route path="software" element={<Software/>} />
//           <Route path="connection" element={<Connect/>} />
//           <Route path="bags" element={<Bags/>} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;


import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import SingleSector from './pages/Home/SingleSector';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Sektors from './pages/Sectors/Sektors';
import Equipments from './pages/Equipments/Equipments';
import Software from './pages/Software/Software';
import Connect from './pages/Connect/Connect';
import Bags from './pages/Bag/Bags';

function App() {
  return (
    <Router> {/* Wrapping the routes inside HashRouter */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sectors/:sectorsId" element={<SingleSector />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="sectors" element={<Sektors />} />
          <Route path="equipments" element={<Equipments />} />
          <Route path="software" element={<Software />} />
          <Route path="connection" element={<Connect />} />
          <Route path="bags" element={<Bags />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


