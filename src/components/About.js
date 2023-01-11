import React from "react";
import "../assets/css/stylesheet.scss";
import Table from "react-bootstrap/Table";
import Data from "../DB";

console.log(Data);

function About() {
  return (
    <>
      <div className="container">
        <h1>About Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>{item.Phone}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default About;
