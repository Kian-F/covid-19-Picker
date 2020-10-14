import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar , Doughnut} from 'react-chartjs-2';
import styles from './Chart.module.css'


const Chart =({ data: { confirmed, recovered, deaths }, country })  =>{

    // state = {dailyData: {}}
    console.log(confirmed);
    console.log(country);

const [dailyData, setDailyData] = useState({});

useEffect(() => {
    const fetchAPI = async () =>{

        // const dailyData = await fetchDailyData();
        const initialDailyData = await fetchDailyData();
        setDailyData(initialDailyData)
    }
    //console.log(dailyData);
    //call the function
    fetchAPI();
}, []);

const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );


const doughnutChart = (
    confirmed ? (< Doughnut 
    data={{
        labels:['Infected', 'Recovered', 'Deaths'],
        datasets:[{
            label:"People",
            backgroundColor:[
                "rgb(0, 0, 255, 0.5)",
                "rgb(9, 255, 0)",
               " rgb(0, 0, 0, 1)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
        }]

    }}
    options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
    ): null
)


    return(
        <div className={styles.container}>
                
                {country ? doughnutChart: lineChart} 
                <div >
                
            </div>
        </div>
       
         
    )
}

export default Chart