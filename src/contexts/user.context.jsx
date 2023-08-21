import { createContext, useState , useEffect} from 'react';
import { AuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.utils';

//as the actual value you want to access
export const UserContext = createContext({

    currentUser : null,
    setCurrentUser: () => null,

});



export const UserProvider= ({children}) => {

    const [currentUser, setCurrentUser] = useState (UserContext);
    const value = {currentUser, setCurrentUser};

    signOutUser();

    useEffect (()=>{
        const unsubscribe = AuthStateChangedListener ((user) => {
            console.log(user)
        });
        return unsubscribe;
    },[]);
    

    return (
        <UserContext.Provider value= {value}> {children} </UserContext.Provider> 
        // ".Provider" is the component that will wraps around any components that needs access to the values inside
 
    )
}



