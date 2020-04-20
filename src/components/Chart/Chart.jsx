import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'


const Chart =() =>{

    // state = {dailyData: {}}

const [dailyData, setDailyData] = useState([]);

useEffect(() => {
    const fetchAPI = async () =>{

        // const dailyData = await fetchDailyData();
        setDailyData(await fetchDailyData())
    }
    //console.log(dailyData);
    //call the function
    fetchAPI();
});

const lineChart = (
    //if dailyData length is not 0, else return null
 dailyData.length != 0 ?( <Line
 //we need to make the data dynamic but it is also an object
data={{

    //loop trough the dailyData, this is a map and return all the dates
    labels: dailyData.map(({date}) => date),
    //an array of objects
    datasets: [{
        data: dailyData.map(({confirmed}) => confirmed),
        label: 'Infected',
        borderColor: '#3333ff',
        fill:true, //fill the space below the chart
    },{
        data: dailyData.map(({deaths}) => deaths),
        label: 'Deaths',
        borderColor: 'black',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,

    }],
}}
/>) : null
);

    return(
        <div className={styles.container}>
                {lineChart}
        </div>
    )
}

export default Chart