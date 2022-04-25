import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const {list} = useContext(EmployeeContext);
    const {id} = useParams();

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {
            list.map(ele => (
                <Link to={`/employees/${ele.id}`}>
                    <div className="employee_card" key={ele.id}>
                        <img className="employee_image"  src={ele.image}/>
                        <span className="employee_name">{ele.employee_name}</span>
                        <span className="employee_title">{ele.title}</span>
                    </div>
                </Link>                
            ))
        } 
      </div>
    );
  };