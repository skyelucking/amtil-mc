import "../../App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowTickets = () => {
  
  Axios.get("/tickets").then((response) => {
    setTicketsList(response.data);
  });

  const [ticketsList, setTicketsList] = useState([]);

  return (
    <div>
      <Container>
      <h3 className="PageHead" style={{marginTop: "10px"}}>Ticket Log</h3>
      <Link to="/ticketcreate"><button className="SmallLinkBtn">Submit a Ticket</button></Link>
        <Table striped bordered hover size="sm">
          <thead style={{ backgroundColor: "#dbf4fd" }}>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Category</th>
              <th>Description</th>
              <th>View</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {ticketsList.map((data, index) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.ticket_title}</td>
                <td>{data.ticket_status}</td>
                <td>{data.ticket_category}</td>
                <td>{data.ticket_desc}</td>
                <td>
                  <button
                      onClick={() => {
                       console.log("View Clicked")
                      
                    }}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowTickets;
