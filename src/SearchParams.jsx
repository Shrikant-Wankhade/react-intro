import { useState } from "react";
const ANIMALS = ["bird","cat","dog","rabbit","reptile"];
const BREEDS = ["bird","cat","dog","rabbit","reptile"];



const SearchParams = () =>{

    const [location, setLocation] = useState("Seatle , WA")
    const [animal, setAnimal] = useState()
    const [breed, setBreed] = useState()
    
    function handleInput(e){
        setLocation(e.target.value)
    }

    function handleAnimal(e){
        setAnimal(e.target.value)
    }
    function handleBreed(e){
        setBreed(e.target.value)
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="location" 
                        onChange={handleInput}></input>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal" 
                        value={animal} 
                        onChange={handleAnimal}
                    >
                        <option />
                        {ANIMALS.map(animal=>{
                           return <option key={animal}>{animal}</option> 
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                        id="breed" 
                        value={breed} 
                        onChange={handleBreed}
                    >
                        <option />
                        {BREEDS.map(breed=>{
                           return <option key={breed}>{breed}</option> 
                        })}
                    </select>
                </label>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default SearchParams;