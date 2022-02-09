
import { useEffect, useState } from 'react';
import ProfileLogin from './Profile/ProfileLogin';
import ProfilePage from './Profile/ProfilePage';
import cookie from 'react-cookies'
import axios from 'axios';
import cogoToast from 'cogo-toast';

export default function Profile() {
    const [user, setUser] = useState();
    const [state, setState] = useState(<ProfileLogin />)
    useEffect(() =>{
        (async() => {
            try {
                let jwt = await cookie.load("jwt");
                if(jwt == undefined){
                    blblbl() //for terminate try block
                }
                const apiCall = axios.put("http://localhost:3000/api/profileHandler",{jwt: jwt});
                
                apiCall.then((data) => {
                    setUser(data.data.user);
                    setState(<ProfilePage />)
                })
            } catch (error) {
                setState(<ProfileLogin />)
            }
        })()
        
    },[]);


return (
    <div>
        {state}
    </div>
)
}
