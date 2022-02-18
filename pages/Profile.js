
import { useEffect, useState } from 'react';
import ProfileLogin from './Profile/ProfileLogin';
import ProfilePage from './Profile/ProfilePage';
import cookie from 'react-cookies'
import Loading from './Profile/Loading';

export default function Profile() {
    const [state, setState] = useState(<Loading />);
    
    useEffect(() =>{
        (async() => {
            try {
                let jwt = await cookie.load("jwt");
                if(jwt == undefined){
                    blblbl() //for terminate try block
                }
                setState(<ProfilePage />)
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
