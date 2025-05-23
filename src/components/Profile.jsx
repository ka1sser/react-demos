import { useState } from "react";

const Profile = () => {

    const [profile, setProfile] = useState([])
    const [nameInput, setNameinput] = useState("")
    const [ageInput, setAgeinput] = useState("")

    const handleNameChange = (e) => {
        setNameinput(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAgeinput(e.target.value);
    }

    const handleClick = () => {
        setProfile([...profile, { name: nameInput, age: ageInput }])
        setNameinput("")
        setAgeinput("")
    }

    return(
        <div>
            <h1>PROFILE</h1>
            <p>Name:</p>
            <input 
                type="text" 
                value={nameInput}
                onChange={handleNameChange}
                className="bg-gray-400 border-2 border-black rounded-[5px] p-2"
                placeholder="Enter your name"
            />
            <p>Age:</p>
            <input 
                type="text" 
                value={ageInput}
                onChange={handleAgeChange}
                className="bg-gray-400 border-2 border-black rounded-[5px] p-2"
                placeholder="Enter your age"
            />
            <button 
                className="bg-amber-300 ml-2 p-1.5" 
                onClick={handleClick}>
                    Add Profile
            </button>
            <div>
                {profile.map(prof => (
                    <li key={Math.random()}>Name: {prof.name}, Age: {prof.age}</li>
                ))}
            </div>
        </div>
    );
}

export default Profile;