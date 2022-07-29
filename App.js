import * as React from 'react';
import './style.css';

import { useEffect, useState } from 'react';

/**
 * API - GET ALL COUNTRIES: https://restcountries.com/v3.1/all
 * GET COUNTRIES BY NAME: https://restcountries.com/v3.1/name/{name}
 */
export default function App() {
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const allData = 'https://restcountries.com/v3.1/all';
    const searchData = `https://restcountries.com/v3.1/name/${search}`;
    let apiData;
    console.log(Array.isArray(searchData));

    search ? (apiData = searchData) : (apiData = allData);
    //  //  //
    const url = apiData;
    const res = await fetch(url);
    const data = await res.json();
    const timer = setTimeout(() => {
      setCountryData(data);
    }, 1000);
    return () => setTimeout(timer);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {countryData.map((data, index) => (
        <div key={index}> {data.name.common} </div>
      ))}
    </div>
  );
}
