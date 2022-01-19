/** @format */
import { useState } from "react";
import "./profile.css";
import { useEffect } from "react";
function Profile() {
	const [song, setSong] = useState([]);
	var album = JSON.parse(localStorage.getItem("album"));
	
	const [title, setTitle] = useState(album.title);
	const [artist, setArtist] = useState(album.artist);
	const [pass, setPass] = useState(album.password);
	const [cover, setCover] = useState(album.cover);
	const [img, setImg] = useState(album.img);
	const [song1, setSong1] = useState("");
	const [song2, setSong2] = useState("");
	const [song3, setSong3] = useState("");
	const [song4, setSong4] = useState("");
	function titles(e) {
		setTitle(e.target.value);
	}
	function artists(e) {
		setArtist(e.target.value);
	}
	function passs(e) {
		setPass(e.target.value);
	}
	function covers(e) {
		setCover(e.target.value);
	}
	function imgs(e) {
		setImg(e.target.value);
	}
	const handleChange = () => {
		fetch(`https://airports-trains-album.herokuapp.com/album/${album._id}`, {
			method: "PATCH",
			body: JSON.stringify({
				title: title,
				artist: artist,
				password: pass,
				cover: cover,
				img: img,
			}),
			headers: { "Content-type": "application/json" },
		}).then();
	};
	useEffect(() => {
		get();
	}, []);
	const get = async () => {
		let res = await fetch(
			`https://airports-trains-album.herokuapp.com/song?title=${album.artist}`,
		);
		const data = await res.json();
		console.log(data);
		await setSong(data);
		await setSong1(data[0].song1);
		await setSong2(data[0].song2);
		await setSong3(data[0].song3);
		await setSong4(data[0].song4);
	};

	function so1(e) {
		setSong1(e.target.value);
	}
	function so2(e) {
		setSong2(e.target.value);
	}
	function so3(e) {
		setSong3(e.target.value);
	}
	function so4(e) {
		setSong4(e.target.value);
	}
	const handleChange2 = () => {
		fetch(`https://airports-trains-album.herokuapp.com/song/${song[0]._id}`, {
			method: "PATCH",
			body: JSON.stringify({
				song1: song1,
				song2: song2,
				song3: song3,
				song4: song4,
			}),
			headers: { "Content-type": "application/json" },
		}).then();
	};
	console.log(song1);
	return (
		<div>
			<button
				id='ssss'
				onClick={() => {
					window.location.href = "/main";
				}}>
				Go to Album Page
			</button>
			<div id='pro'>
				<h1 style={{ textAlign: "center" }}>Profile Details</h1>
				<div className='in'>
					{" "}
					Title :{" "}
					<input
						type='text'
						id='title'
						value={title}
						placeholder='Edit Title'
						onChange={titles}
					/>
				</div>
				<div className='in'>
					{" "}
					Artist :{" "}
					<input
						type='text'
						id='artist'
						value={artist}
						placeholder='Artist Name'
						onChange={artists}
					/>
				</div>
				<div className='in'>
					{" "}
					Password :{" "}
					<input
						type='text'
						id='pass'
						value={pass}
						placeholder='Password'
						onChange={passs}
					/>
				</div>
				<div className='in'>
					{" "}
					Cover Pic :{" "}
					<input
						type='text'
						id='cover'
						value={cover}
						placeholder='Cover Pic'
						onChange={covers}
					/>
				</div>
				<div className='in'>
					{" "}
					Profile Pic :{" "}
					<input
						type='text'
						id='pros'
						value={img}
						placeholder='Profile Pic'
						onChange={imgs}
					/>
				</div>
				<button
					className='sub'
					onClick={() => {
						handleChange();
						alert("Successfully made your Profile changes");
					}}>
					Submit
				</button>
			</div>
			<div id='bxx'>
				<h1 style={{ textAlign: "center" }}>Songs Details</h1>
				<div className='in'>
					Song 1 :{" "}
					<input
						type='text'
						className='same'
						value={song1}
						onChange={so1}
						name=''
						id=''
					/>
				</div>
				<div className='in'>
					Song 2 :{" "}
					<input
						type='text'
						className='same'
						value={song2}
						onChange={so2}
						name=''
						id=''
					/>
				</div>
				<div className='in'>
					Song 3 :{" "}
					<input
						type='text'
						className='same'
						value={song3}
						onChange={so3}
						name=''
						id=''
					/>
				</div>
				<div className='in'>
					Song 4 :{" "}
					<input
						type='text'
						className='same'
						value={song4}
						onChange={so4}
						name=''
						id=''
					/>
				</div>
				{/* <div>
					Song 1 : <input type='text' value={song2} name='' id='' />
				</div>
				<div>
					Song 1 : <input type='text' value={song2} name='' id='' />
				</div> */}
				<button
					className='sub'
					onClick={() => {
						handleChange2();
						alert("Successfully made your Songs changes");
					}}>
					Submit
				</button>
			</div>
		</div>
	);
}
export default Profile;
