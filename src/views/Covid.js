import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);

  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-01-01T00:00:00Z&to=2021-12-31T00:00:00Z"
    );
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map((item) => {
        item.Date = moment(item.Date).format("DD-MM-YYYY");
        return item;
      });
    }
    setDataCovid(data);
    console.log(">>check res: ", data);
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Recovered}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })}
        </tbody>

        {/* <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td> */}
      </table>
    </div>
  );
};

export default Covid;
