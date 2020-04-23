import React from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.modules.css';
import {fetchData, fetchDailyData} from './api'


class App extends React.Component{

    

    state={
        data:{},
        country: '',

    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

  handleCountryChange = async (country) => {

      //fetch data
      const fetchedData = await fetchData(country);
      console.log(fetchedData);
      
    //console.log(country);
    
      //set State
      this.setState({data: fetchedData, country: country})
  }
    

    render(){
        const {data, country} = this.state
        return(
           
            <div className={styles.container}>
                <Cards data={this.state.data}/>
                {/* pass the method as a prop to  CountryPicker */}
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}
export default App