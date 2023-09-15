import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/Login';
import { register, login } from './actions/connect';
import Game from './components/Game/Game';
import { loadData } from './loaders/loadData';
import Play from './components/Play';
import Credits from './components/Credits';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/Clickermon' element={<App/>}>
				<Route path='register' element={<Login login={false} />}/>
				<Route path="register/true" action={register} />
				<Route path='login' element={<Login login/>}/>
				<Route path='login/true' action={login}/>
				<Route path='' element={<Game />} loader={loadData}/>
				<Route path='credits' element={<Credits/>}/>
			</Route>
			<Route path='*' element={<Play/>}/>
			<Route path='/true' action={login}/>
		</>
	)
);
root.render(
  <React.StrictMode>
	<RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
