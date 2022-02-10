
import { useEffect, useState } from 'react';
import ProfileLogin from './Profile/ProfileLogin';
import ProfilePage from './Profile/ProfilePage';
import cookie from 'react-cookies'
import axios from 'axios';
import cogoToast from 'cogo-toast';

export default function Profile() {
    const [user, setUser] = useState();
    const [state, setState] = useState()
    useEffect(() =>{
        (async() => {
                let jwt = await cookie.load("jwt");
                if(jwt == undefined){
                    blblbl() //for terminate try block
                }
                const apiCall = await axios.put("https://pylamp-domain-realm.vercel.app/api/profileHandler",{jwt: jwt});

                setUser(apiCall.data.user);
                setState(<ProfilePage />)

        })()
        
    },[]);


return (
    <div>
        {state}
    </div>
)
}
