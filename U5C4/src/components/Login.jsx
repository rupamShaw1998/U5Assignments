import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logIn } from "../Redux/actions";
import { store } from "../Redux/store";
import { Orders } from "./Orders";

export const Login = () => {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const isAuth = useSelector(store => store.logIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    async function getData() {
        try {
            let res = await fetch("http://localhost:8080/users");
            let data = await res.json();

            for(let i=0; i<data.length; i++)
            {
                if(data[i].username==uname && data[i].pass==pass && uname=="admin" && pass=="1234")
                {
                    dispatch(logIn);
                    navigate("/orders");
                }    
                else if(data[i].username==uname && data[i].pass==pass)
                {
                    dispatch(logIn);
                    navigate("/neworders");
                }                   
            }
            console.log(isAuth);
        }
        catch(err) {
            console.log("error:", err);
        }
    }
    const handleChange = (e) => {
        if(e.target.name=="username")
            setUname(e.target.value);
        else
            setPass(e.target.value);
    }

    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={getData}>Login</button>
      </div>
    );
  };