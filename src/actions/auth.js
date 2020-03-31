import {firebase, googleAuthProvider} from '../firebase/firebase';

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

const startLogout = ()=>{
    return  ()=>{
        return firebase.auth().signOut();
    }
}

// cont login = (uid) =>{
//     return{
//         type: 'LOGIN',
//         uid
//     }
// }
const login = uid => ({type: 'LOGIN', uid});
const logout = () => ({type: 'LOGOUT'});
export {login, logout, startLogout , startLogin as default};