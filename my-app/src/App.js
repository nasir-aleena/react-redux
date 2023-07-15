import './App.css';
import AddUser from './components/AddUser';
import DisplayUsers from './components/DisplayUsers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<DisplayUsers />}></Route>
    <Route path="/add" element={<AddUser />}></Route>
    <Route path="/edit/:id" element={<AddUser />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
