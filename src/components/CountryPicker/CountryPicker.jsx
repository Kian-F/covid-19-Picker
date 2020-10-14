import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState(['US']);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);
  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      {/* on change set the as the argument of the function */}
      {/* call the fucntion and pass the event as argument, the data is inside the e which is the chossen country */}
      <NativeSelect
        defaultValue={fetchCountries}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        {/* <option value="US">USA</option> */}
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
