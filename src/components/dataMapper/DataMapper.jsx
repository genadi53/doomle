import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DataMapper.module.scss";

function DataMapper() {
  // let isSubscribed = useRef(true);
  const { type } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://ptsdoomle20220422194729.azurewebsites.net/api/${type}`
      );
      const fetchData = await res.json();
      // console.log(fetchData);
      setData(fetchData);
      setLoading(false);
    };
    fetchData();

    // fetch(`https://ptsdoomle20220422194729.azurewebsites.net/api/${type}`)
    //   .then((res) => res.json())
    //   .then((fetchData) => setData(fetchData));

    return () => {
      // isSubscribed.current = false;
    };
  }, [type]);

  const dataMaper = (array) => {
    if (array.length === 0) return;

    const keys = Object.keys(array[0]);

    return (
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["table-head"]}>
            {keys.map((key) => (
              <th className={styles["title"]} key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {array.map((el, idx) => {
            const vals = Object.values(el);
            const res = vals.map((value, idx) => (
              <td className={styles["table-data"]} key={idx}>
                {value && value / value === 1
                  ? Math.round(value * 100) / 100
                  : value}
              </td>
            ));
            return (
              <tr className={styles["table-row"]} key={idx}>
                {res}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>{type.toUpperCase()}</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles["container"]}>{dataMaper(data)}</div>
      )}
    </div>
  );
}

export default DataMapper;
