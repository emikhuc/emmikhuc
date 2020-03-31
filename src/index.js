import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import { Provider} from 'react-redux';
import configStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {firebase} from './firebase/firebase';
import {history} from './routers/AppRouter';
import {login, logout} from './actions/auth';

const store = configStore();


const jsx = (
<Provider store = {store}>
  <AppRouter/>
</Provider>
);

let hasRendered = false;
const renderApp = ()=>{
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}



firebase.auth().onAuthStateChanged((user)=>{
  
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(()=>{
    renderApp();
 });
    if(history.location.pathname ==="/"){
      history.push("/dashboard");
    }
    console.log(store.getState());
  }else{
    store.dispatch(logout());
    renderApp();
    history.push("/");
    console.log(store.getState());
  }
});

ReactDOM.render(<p>Loading</p>, document.getElementById('root'));
serviceWorker.unregister();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

