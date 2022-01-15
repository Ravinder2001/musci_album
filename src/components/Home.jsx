/** @format */
import "./home.css";
import { useEffect, useState } from "react";
function Home() {
	const [data, setData] = useState([]);
	const [temp, setTemp] = useState(data);
	const [page, setPage] = useState(1);
	const [text, setText] = useState("");
	useEffect(() => {
		get();
	}, [page]);

	const get = async () => {
		let res = await fetch(`http://localhost:3004/album`);
		const data = await res.json();

		await setData(data);
		await setTemp(data);
	};

	function sortLow() {
		console.log("click");
		var arr = data
			.filter(function (a, b) {
				return a;
			})
			.sort(function (a, b) {
				return a.year < b.year ? -1 : 1;
			});

		setTemp(arr);
	}
	function sortHigh() {
		var arr = data
			.filter(function (a, b) {
				return a;
			})
			.sort(function (a, b) {
				return a.year > b.year ? -1 : 1;
			});

		setTemp(arr);
	}
	function select() {
		console.log(data);
		var select = document.getElementById("language");
		var option = select.options[select.selectedIndex].text;
		if (option == "All") {
			setTemp(data);
		} else {
			const arr = data.filter((e) => {
				return e.genre == option;
			});
			console.log(arr);
			setTemp(arr);
		}
	}
	function handle(e) {
		setText(e.target.value);
		serch();
	}
	console.log(text);
	async function serch() {
		let res = await fetch(`http://localhost:3004/album?title_like=${text}`);
		const data = await res.json();
		console.log(data);

		setTemp(data);
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
					sortLow();
				}}>
				Low to High
			</button>
			<button
				className='so'
				onClick={() => {
					sortHigh();
				}}>
				High to Low
			</button>
			<select
				name=''
				id='language'
				onChange={() => {
					select();
				}}>
				<option value=''>All</option>
				<option value=''>Soul music</option>
				<option value=''>Rock</option>
				<option value=''>Pop music</option>
				<option value=''>Disco</option>
				<option value=''>Classical</option>
			</select>

			<div id='container'>
				{temp.map((e) => (
					<div
						className='box'
						onClick={() => {
							localStorage.setItem("album", JSON.stringify(e));
							window.location.href = "/main";
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
			<button
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
			</button>
			<div style={{ height: "100px" }}></div>
		</div>
	);
}

export default Home;
