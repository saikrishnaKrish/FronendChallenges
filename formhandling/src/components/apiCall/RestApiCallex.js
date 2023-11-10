import { useState, useEffect } from "react";
const RestApiExample = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  const filterData = (param1) => {
    let prams = param1.entries.filter((ele) => ele.HTTPS == false);
    console.log(prams);
    setData(prams);
  };

  useEffect(() => {
    fetch("https://api.publicapis.org/entries").then((res) =>
      res.json().then((res) => {
        filterData(res);
        setCount(res.count);
      })
    );

    console.log("jo");
  }, []);

  return (
    <>
      <h3>Fetch Api Example</h3>
      <p>No of entries :{count && count} </p>
      {data && "jejeje"}
      {data.length &&
        data.map((ele) => {
          // <li>{ele.API}</li>
          "hi";
          {
            JSON.stringify(ele);
          }
        })}
      {/* {JSON.stringify(data)} */}
    </>
  );
};

export default RestApiExample;
