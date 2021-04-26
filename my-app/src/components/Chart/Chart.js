import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "../../components/LoginForm/LoginForm.css"

export const TableData = (props) => {
  const { data } = props;
  const [error, setError] = useState("");

  if (data === undefined) {
    setError("Algo ha fallado, no se reciben datos.");
  }

  const hr = data.HR;
  const hg = data.HG;
  const hm = data.HM;

  return error ? (
    <div className="error-container">
      <p>{error}</p>
    </div>
  ) : (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="2">HR</th>
          <th colspan="2">HG</th>
          <th colspan="2">TM</th>
        </tr>
        <tr>
          <td>Dates</td>
          <td>Values</td>
          <td>Dates</td>
          <td>Values</td>
          <td>Dates</td>
          <td>Values</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{hr.map((dates) => dates.Date)}</td>
          <td>{hr.map((value) => value.Value)}</td>
          <td>{hg.map((dates) => dates.Date)}</td>
          <td>{hg.map((value) => value.Value)}</td>
          <td>{hm.map((dates) => dates.Date)}</td>
          <td>{hm.map((value) => value.Value)}</td>
        </tr>
      </tbody>
    </Table>
  );
};
