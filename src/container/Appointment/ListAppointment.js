import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

function ListAppointment(props) {
  const [data, setData] = useState([]);

  const getData = () => {
    const localdata = JSON.parse(localStorage.getItem("book_apt"));
    // console.log(localdata);

    if (localdata !== null) {
      setData(localdata)
    }
  };

  const handleDelet = (id) =>{

    let localdata = JSON.parse(localStorage.getItem('book_apt'));

    let dData = localdata.filter((d) => d.id !== id);


    localStorage.setItem('book_apt', JSON.stringify(dData))
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  const history = useHistory();
  const goEdit = () =>{
    history.push('/book_appointment')

  }

  return (
    <div className="container py-5">
      <div className="section-title">
        <div className="row my-5 ">
          <div className="col-6 text-center">
            <NavLink
              to="/book_appointment"
              className="appointment-btn scrollto rounded-0 col-6"
            >
              Book an appointment
            </NavLink>
          </div>
          <div className="col-6 text-center">
            <NavLink
              to="/list_appointment"
              className="appointment-btn scrollto rounded-0 col-6"
            >
              List of appointment
            </NavLink>
          </div>
        </div>
        <h2>List of Appointmentss</h2>
      </div>
      <div className="row">
        {
        data.map((d,i) => {
            return (
              <>
                <Card className="col-4 me-4" key={d.id}>
                  <CardBody>
                    <CardTitle tag="h5">{d.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{d.phone}</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">{d.email}</CardSubtitle>
                    <CardSubtitle className="fs-6">{d.date}</CardSubtitle>
                    <CardSubtitle className="fs-6 mb-3">{d.department}</CardSubtitle>
                    <CardText className="fs-6">{d.message}</CardText>
                    <Button className="me-2 bg-primary" onClick={() => goEdit()}>Edit</Button>
                    <Button className="btn bg-danger" onClick={() => handleDelet(d.id)}>Delet</Button>
                  </CardBody>
                </Card>
              </>
            )
          })
        }
        </div>
    </div>
  );
}

export default ListAppointment;
