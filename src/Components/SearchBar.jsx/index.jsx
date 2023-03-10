import React, { useState } from "react";

export const SearchBar = ({getCityName}) => {
    const [cityName, setCityName] = useState('')

    const handleCityNameChange = (event) => {
        setCityName(event.target.value)
    }

    // const handleSearchClick = () => {
    //     onSearch(cityName)
    // }

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log({cityName})
        if(cityName === "" || !cityName) return;
        getCityName(cityName)
    }

    return (
        <div className="FormContainer">
            <form onSubmit={onSubmit}>
                <input type="text" value={cityName} placeholder="City" onChange={handleCityNameChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}