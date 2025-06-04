import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
    const {name} = useContext(UserContext)

    return (
        <div>
            <h1>Name: {name}</h1>
        </div>
    )
}

export default UserProfile;