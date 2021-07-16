import { navigate } from '@reach/router';
import React, {useState} from 'react'

const Search = (props) => {
    
    const [optionType, setOptionType] = useState("people")
    const [idType, setIdType] = useState(1)
    const defaultTypes = ["people", "planets"];

    const FormHandler = (e) =>{
        e.preventDefault()
        navigate("/" + optionType + "/" + idType)
    }

    return (
        <div>
            <form onSubmit={FormHandler}>
                <label htmlFor="optionType">Search For: </label>
                <select id="optionType" value={optionType} onChange={e => setOptionType(e.target.value)}>
                {
                    defaultTypes.map((item,choice) => (
                        <option key={choice}value={item}>{item}</option>
                    ))
                }
                    
                </select>
                <label htmlFor="idType" >ID: </label>
                <input id="idType" value={idType} onChange={e => setIdType(e.target.value)} type="number" min="0" max="100" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Search
