import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "../../components/LoginForm/LoginForm.css";


export const BarChart = (props) => {
  const { data } = props;
  const [error, setError] = useState("");

  if(data === undefined) {
    setError('Algo ha fallado, no se reciben datos.')
  }

  const hr = data.HR;
  console.log(hr);

  const values = [];
  const date = [];

  for (let i = 0; i < hr.length; i++) {
    values.push(i.Value);
  }

  for (let i = 0; i < hr.length; i++) {
    date.push(i.Date);
  }
  console.log(values, date);

  return error ? (
    <div className="error-container">
      <p>{error}</p>
    </div>
  ) : (
    <div>
      <Bar
        data={{
          labels: date,
          datasets: [
            {
              label: "Values",
              data: values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={300}
      />
    </div>
  );
};
