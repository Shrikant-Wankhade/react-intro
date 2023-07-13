import { useState } from "react";

const SearchParams = () =>{

    const [location, setLocation] = useState("Seatle , WA")
    function handleInput(e){
        setLocation(e.target.value)
    }
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    <input id="location" value={location} placeholder="location" onChange={handleInput}></input>
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default SearchParams;