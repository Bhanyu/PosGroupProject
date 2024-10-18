import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout'
import Home from '../src/pages/Home/Home';
import SingleSector from './pages/Home/SingleSector';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sectors/:sectorsId" element={<SingleSector />} />
       
          
        </Route>
      </Routes>
    </>
  );
}

export default App;

