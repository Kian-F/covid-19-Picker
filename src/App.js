import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.modules.css';
import {fetchData} from './api';


class App extends React.Component{

    

    state={
        data:{},
        country: '',

    }
    
    async componentDidMount(){
        const data = await fetchData();
        this.setState({data})
    }

  handleCountryChange = async (country) => {

      //fetch data
      const data = await fetchData(country);
      console.log(data);
      
    //console.log(country);
    
      //set State
      this.setState({data, country: country})
  }
    

    render(){
        const {data, country} = this.state
        return(
           
            <div className={styles.container}>
                <Cards data={data}/>
                {/* pass the method as a prop to  CountryPicker */}
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}
export default App