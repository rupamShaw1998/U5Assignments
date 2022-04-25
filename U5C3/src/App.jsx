import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/"} element={<Login></Login>}></Route>
        <Route path={"/"} element={<Logout></Logout>}></Route>
        <Route path={"/"} element={<EmployeeDetails></EmployeeDetails>}></Route>
        <Route path={"/"} element={<Admin></Admin>}></Route>
        <Route path={"/"} element={<EmployeeList></EmployeeList>}></Route>
      </Routes>
    </div>
  );
}

export default App;