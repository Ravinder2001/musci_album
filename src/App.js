/** @format */

import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import Edit from "./components/Edit";
import Profile from "./components/Profile";
import Add from "./components/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/main' element={<Main></Main>}></Route>
					<Route path='/edit' element={<Edit></Edit>}></Route>
					<Route path='/profile' element={<Profile></Profile>}></Route>
					<Route path='/add' element={<Add></Add>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
