import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { TableData } from "../components/Chart/Chart";
import { BarChart } from "../components/Table/Table";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../components/LoginForm/LoginForm.css";


export const Data = () => {
  const [idToken, setIdToken] = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  console.log(idToken);

  useEffect(() => {
    async function getData() {
      console.log("ejecicion");
      const dataResponse = await fetch(
        `https://test-api-d93b7-default-rtdb.firebaseio.com/data.json?auth=${idToken}`
      );
      if (dataResponse.ok) {
        const allData = await dataResponse.json();
        setData(allData);
      } else {
        const errorResponse = await dataResponse.json();
        setError(errorResponse.error)
      }
    }
    getData();
  }, [idToken]);

  return !idToken ? (
    <Redirect to="/Login"></Redirect>
  ) : error ? (
    <div className="data-container">
      <h2>Tabla de datos</h2>
      <TableData data={data} />
      <h2 className="chart-title">Gráfica</h2>
      <BarChart data={data} />
      <Button
        variant="primary"
        onClick={() => {
          setIdToken(null);
        }}
      >
        Primary
      </Button>{" "}
      <div className="error-container">
        <p>{error.message}</p>
      </div>
    </div>
  ) : (
    <div className="data-container">
      <h2>Tabla de datos</h2>
      <TableData data={data} />
      <h2 className="chart-title">Gráfica</h2>
      <BarChart data={data} />
      <Button
        variant="primary"
        onClick={() => {
          setIdToken("");
        }}
      >
        Primary
      </Button>{" "}
    </div>
  );
};
