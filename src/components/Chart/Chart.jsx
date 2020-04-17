import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


const Chart =() =>{

    // state = {dailyData: {}}

const [dailyData, setDailyData] = useState({});

useEffect(() => {
    const fetchAPI = async () =>{
        setDailyData(await fetchDailyData())
    }
    console.log(dailyData);
    
    fetchAPI();
});

const lineChart = (
    //if dailyData is availble
 dailyData[0] ?( <Line
 //we need to make the data dynamic but it is also an object
data={{
    labels: '',
    //
    datasets: [{},{}],
}}
/>) : null
);

    return(
        <h1>Charts</h1>
    )
}

export default Chart