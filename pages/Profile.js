
import { useEffect, useState } from 'react';
import ProfileLogin from './Profile/ProfileLogin';
// import ProfilePage from './Profile/ProfilePage';
import cookie from 'react-cookies'
import axios from 'axios';

export default function Profile() {
    const [user, setUser] = useState();

    // useEffect(() =>{
    //     try {
    //         const apiCall = axios.put("http://localhost:3000/api/profileHandler",
    //         {jwt: cookie.load("jwt")}).then((res => res.json()).then(data => console.log(data)))
    //     } catch (error) {
    //         console.log("err")
    //     }
    // },[])
return (
    <div>
        <ProfileLogin />
    </div>
)
}
