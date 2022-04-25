import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const [array, setArray] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function getData() {
            try {
                let res = await fetch(`http://localhost:8080/employee/${id}`);
                let data = await res.json();
                setArray(data.tasks);
            }
            catch(err) {
                console.log(err);
            }
        }
        getData();
    }, [])

    return (
      <div className="user_details">
        <img className="user_image" src={employee.image}/>
        <h4 className="user_name">{employee.employee_name}</h4>
        <span className="user_salary">${employee.salary}</span>
        <span className="tasks">
          <li className="task"></li>
        </span>
        Status: <b className="status"></b>
        Title: <b className="title"></b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };