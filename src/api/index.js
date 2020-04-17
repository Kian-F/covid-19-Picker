import axios from 'axios';

const url ='https://covid19.mathdro.id/api';
const dailyUrl = 'https://covid19.mathdro.id/api/daily'

export const fetchData = async () => {
try{
    const {data:{confirmed,recovered,deaths,lastUpdate }} = await axios.get(url);

    // const modifiedData={ 
    //     confirmed: confirmed,
    //     recovered: recovered,
    //     deaths: deaths,
    //     lastUpdate: lastUpdate
    // }
    // const modifiedData={ confirmed, recovered, deaths, lastUpdate }

    return { confirmed, recovered, deaths, lastUpdate };

}catch(error){

}
}

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(`${url}/daily`)
         console.log(data)

    }catch(error){

    }
}