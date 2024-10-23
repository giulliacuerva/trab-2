import Menu from "./Components/Menu"
import HomePage from "./pages/HomePage";
import AddFilm from "./pages/AddFilm";
import DeleteFilm from "./pages/DeleteFilm";
import UpdateFilm from "./pages/UpdateFilm";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/add" element={ <AddFilm/> }/>
        <Route path="/delete" element={ <DeleteFilm/> }/>
        <Route path="/update" element={ <UpdateFilm/> }/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
