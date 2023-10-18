import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [Data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading text-center mb-5">
          <span className="font-weight-bold">INDIA</span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((currElem, index) => {
                return (
                  <tr key={index}>
                    <th>{currElem.State}</th>
                    <td>{currElem.Confirmed}</td>
                    <td>{currElem.Recovered}</td>
                    <td>{currElem.Deaths}</td>
                    <td>{currElem.Active}</td>
                    <td>{currElem.Updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
