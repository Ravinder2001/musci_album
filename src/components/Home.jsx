/** @format */
import "./home.css";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

function Home() {
	const [data, setData] = useState([]);

	const [page, setPage] = useState(1);
	const [text, setText] = useState("");
	const [sorts, setSort] = useState(1);
	const [opt, setOpt] = useState("");
	useEffect(() => {
		get();
	}, []);

	const get = async () => {
		let res = await fetch(`http://localhost:4000/home?name=&sort=1&page=1`);
		const data = await res.json();
		console.log("data", data.album);
		console.log(data);
		await setData(data.album);
		await setPage(data.pages);
	};

	async function sort(e) {
		var select = document.getElementById("language");
		var option = select.options[select.selectedIndex].text;
		setOpt(option);
		let res = await fetch(
			`http://localhost:4000/home?name=${option}&sort=${e}`,
		);
		const data = await res.json();
		await setData(data.album);
		await setPage(data.pages);
		// setTemp(arr);
	}

	function handle(e) {
		setText(e.target.value);
		serch(e.target.value);
	}
	console.log(text);
	async function serch(e) {
		let res = await fetch(`http://localhost:4000/home?name=&title=${e}&sort=1`);
		const data = await res.json();
		console.log(data);
		setPage(data.pages);
		setData(data.album);
	}
	return (
		<div>
			<h1 id='head'>Albums</h1>
			<input
				id='input'
				type='text'
				value={text}
				placeholder='Search By Name'
				onChange={handle}
			/>
			<button
				className='so'
				onClick={() => {
					sort(1);
				}}>
				Low to High
			</button>
			<button
				className='so'
				onClick={() => {
					sort(-1);
				}}>
				High to Low
			</button>
			<select
				name=''
				id='language'
				onChange={() => {
					sort(1);
				}}>
				<option value=''>All</option>
				<option value=''>Soul music</option>
				<option value=''>Rock</option>
				<option value=''>Pop music</option>
				<option value=''>Disco</option>
				<option value=''>Classical</option>
			</select>

			<div id='container'>
				{data.map((e) => (
					<div
						key={e._id}
						className='box'
						onClick={() => {
							localStorage.setItem("album", JSON.stringify(e));
							window.location.href = `/main`;
						}}>
						<img src={e.cover} alt='' className='img' />
						<div style={{ float: "left" }}>
							<img src={e.img} alt='' className='arti' />
						</div>
						<div className='title'>{e.title}</div>
						<div className='art'>{e.artist}</div>
						<div className='song'>4 Songs</div>
						<div className='year'>{e.year}</div>
						<div className='years'>{e.genre}</div>
					</div>
				))}
			</div>
			<div style={{ clear: "both" }}></div>
			<Pagination
				id='pagee'
				count={page}
				onClick={async function sort(e) {
					let res = await fetch(
						`http://localhost:4000/home?name=${opt}&sort=1&page=${e.target.innerText}`,
					);
					const data = await res.json();
					await setData(data.album);
					// setTemp(arr);
				}}
			/>

			{/* <button
				id='btn1'
				onClick={() => {
					if (page != 1) {
						setPage(page - 1);
					}
				}}>
				Prev
			</button>
			<button
				id='btn2'
				onClick={() => {
					if (page != 3) {
						setPage(page + 1);
					}
				}}>
				Next
			</button> */}
			<div style={{ height: "100px" }}></div>
		</div>
	);
}

export default Home;
