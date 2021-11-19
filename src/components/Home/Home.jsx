import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import fiveDayForcast from '../../apivalues/5dayforcastshort.json'
import currentLocation from '../../apivalues/currentweathershort.json'
import './Home.css'
import InformationCard from './InformarionCard/InformationCrad'


const Home = () =>{

    return(
        <div>
            <SearchBar/>
            <div className="home-information-container">
                <InformationCard currentLocation={currentLocation} fiveDayForcast={fiveDayForcast}/>
            </div>
        </div>
    )

}
export default Home