import './App.css';
import List from './Components/List/list';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login/login';
import NewEntry from './Components/Add Entry/newEntry';
import UpdateEntry from './Components/UpdateEntry/updateEntry';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/" element={<List />} />
        <Route exact path="/newentry" element={<NewEntry />} />
        <Route exact path="/updateentry/:id" element={<UpdateEntry />} />
      </Routes>
    </Router>
  );
}

export default App;
