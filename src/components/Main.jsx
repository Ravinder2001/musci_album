/** @format */
import "./main.css";
import { useEffect, useState } from "react";
function Main() {
	const [data, setData] = useState([]);
	const [songs, setSong] = useState([]);
	var album = JSON.parse(localStorage.getItem("album"));
	console.log(album.artist);
	useEffect(() => {
		// get();
		alb();
	}, []);
	// const get = async () => {
	// 	let res = await fetch(
	// 		`http://localhost:4000/home?name=&title=${album.title}&sort=1`,
	// 	);
	// 	const data = await res.json();
	// 	console.log(data.album);

	// 	setSong(data.album);
	// };
	// console.log(songs);
	const alb = async () => {
		let res = await fetch(`http://localhost:4000/song?title=${album.artist}`);
		const data = await res.json();
		console.log(data[0]);
		await setData(data[0]);
	};

	// function filt(el) {
	// 	const arr = el.filter((e) => {
	// 		return e.artist == album.artist;
	// 	});

	// 	setSong(arr);
	// }

	function show() {
		alert("You Have to login first");
		window.location.href = "/edit";
	}
	return (
		<div>
			<div id='con'>
				<div style={{ float: "left" }}>
					<img src={album.cover} alt='' id='covers' />
				</div>
				<div style={{ float: "left", width: "650px" }}>
					<img src={album.img} id='author' />
				</div>
				<button id='btn' onClick={show}>
					Edit
				</button>
				<button
					id='btn'
					onClick={() => {
						window.location.href = "/";
					}}>
					Home
				</button>
				<div id='names'>{album.artist}</div>
				<div style={{ clear: "both" }}></div>
				<h1 style={{ textAlign: "center", fontWeight: "30px" }}>List</h1>
				<div>
					<div>
						<div style={{ float: "left", marginLeft: "100px" }}>
							<img src={data.is1} alt='' width='70px' />
							<div className='sss'>{data.song1}</div>
						</div>
						<div style={{ float: "left", marginLeft: "100px" }}>
							{" "}
							<img src={data.is2} alt='' width='70px' />{" "}
							<div className='sss'>{data.song2}</div>
						</div>
						<div style={{ float: "left", marginLeft: "100px" }}>
							{" "}
							<img src={data.is3} alt='' width='70px' />{" "}
							<div className='sss'>{data.song3}</div>
						</div>
						<div style={{ float: "left", marginLeft: "100px" }}>
							{" "}
							<img src={data.is4} alt='' width='70px' />{" "}
							<div className='sss'>{data.song4}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Main;
{
	/* {data.map((e) => (
				<div>
					<div>{e.artist}</div>
					<div>{e.song1}</div>
					<div>{e.song2}</div>
				</div>
			))} */
}
