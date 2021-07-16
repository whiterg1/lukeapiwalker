import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Display = (props) => {

    const [apiData, setApiData] = useState({})
    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/" + props.type + "/" + props.id)
        .then(res => {
            setApiData(res.data);
        }).catch(err =>{
            console.log(err);
            navigate("/error");
        })
      },[props])



    return (
        <div>
            {apiData.gender ? 
            <div>
                <p>Name: {apiData.name}</p>
                <p>Height: {apiData.height}</p>
                <p>Mass: {apiData.mass}</p>
                <p>Gender: {apiData.gender}</p>
            </div> 
            :
            <div>
                <p>Name: {apiData.name}</p>
                <p>Climate: {apiData.climate}</p>
                <p>Gravity: {apiData.gravity}</p>
                <p>Terrain: {apiData.terrain}</p>
            </div>
            }
        </div>
    )
}

export default Display
