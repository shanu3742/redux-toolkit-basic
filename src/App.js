import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './page/counter/counter';
import PayLoadCounter from './page/payLoadCounter/payLoadCounter';
import ProductList from './page/productList/ProductList';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Counter />} />
    <Route  path='counter' element={<Counter />}  />
    <Route  path='payloadcounter' element={<PayLoadCounter />}  />
    <Route  path='apifetch' element={<ProductList />}  />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
