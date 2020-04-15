import React from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.modules.css';
import {fetchData} from './api'


class App extends React.Component{

    

    state={
        data:{},

    }
    
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

   
    

    render(){
        return(
            <div className={styles.container}>
                <div>
                
                </div>
                <Cards data={this.state.data}/>
                <CountryPicker/>
                <Chart/>
                
            </div>
        )
    }
}
export default App