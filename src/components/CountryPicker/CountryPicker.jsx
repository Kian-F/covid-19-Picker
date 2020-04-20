import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../../api';
import {NativeSelect, FormControl} from '@material-ui/core'





const CountryPicker = () =>{
    
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries())
        }
        
        
        fetchAPI();
    }, [setFetchedCountries])
    console.log(fetchedCountries);
    
    return(

        <FormControl>
            <NativeSelect>
                <option value='global'>Global</option>
    {fetchedCountries.map((country,i)=><option key ={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker