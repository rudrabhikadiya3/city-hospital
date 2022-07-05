import React from 'react';
import { NavLink } from "react-router-dom";


function ListAppointment(props) {
    return (
        <div>
            <div className="section-title">
            <div className="row my-5 ">
            <div className="col-6 text-center">
            <NavLink
              to="/book_appointment"
              className="appointment-btn scrollto rounded-0 col-6">
              Book an appointment
            </NavLink>
            </div>
            <div className="col-6 text-center">
            <NavLink
              to="/list_appointment"
              className="appointment-btn scrollto rounded-0 col-6">
              List of appointment
            </NavLink>
            </div>
        </div>
            <h2>List of Appointments</h2>
          </div>
        </div>
    );
}

export default ListAppointment;