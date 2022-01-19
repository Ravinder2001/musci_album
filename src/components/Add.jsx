/** @format */
import { useState } from "react";
import "./add.css";
function Add() {
	const [userData, setData] = useState({
		email: "",
		title: "",
		artist: "",
		password: "",
		cover: "",
		genre: "",
		year: "",
		profile: "",
	});
	const [song, setSong] = useState({
		song1: "",
		is1: "",
		dur1: "",
		song2: "",
		is2: "",
		dur2: "",
		song3: "",
		is3: "",
		dur3: "",
		song4: "",
		is4: "",
		dur4: "",
	});
	function handle(e) {
		const { name, value } = e.target;
		setData({ ...userData, [name]: value });
	}
	function handle2(e) {
		const { name, value } = e.target;
		setSong({ ...song, [name]: value });
	}
	function save(e) {
		e.preventDefault();

		console.log(userData);
		handleChange();
	}
	function save2(e) {
		e.preventDefault();

		console.log(song);
		handleChange2();
		window.location.href = `/`;
	}
	const handleChange = () => {
		fetch("https://airports-trains-album.herokuapp.com/album", {
			method: "POST",
			body: JSON.stringify({
				email: userData.email,
				title: userData.title,
				artist: userData.artist,
				password: userData.password,
				cover: userData.cover,
				genre: userData.genre,
				year: userData.year,
				img: userData.profile,
			}),
			headers: { "Content-type": "application/json" },
		});
	};
	const handleChange2 = () => {
		fetch("https://airports-trains-album.herokuapp.com/song", {
			method: "POST",
			body: JSON.stringify({
				artist: userData.artist,
				song1: song.song1,
				is1: song.is1,
				dur1: song.dur1,
				song2: song.song2,
				is2: song.is2,
				dur2: song.dur2,
				song3: song.song3,
				is3: song.is3,
				dur3: song.dur3,
				song4: song.song4,
				is4: song.is4,
				dur4: song.dur4,
			}),
			headers: { "Content-type": "application/json" },
		});
	};
	return (
		<div>
			<div id='mains'>
				<h1 style={{ textAlign: "center" }}>Profile</h1>
				<form onSubmit={save}>
					<div>
						<input
							type='text'
							name='email'
							placeholder='Email'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='title'
							placeholder='Album Title'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='artist'
							placeholder='Artist Name'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='password'
							name='password'
							placeholder='Password'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='cover'
							placeholder='Cover Img Link'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='genre'
							placeholder='Genre'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='year'
							placeholder='Year'
							onChange={handle}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='profile'
							placeholder='Profile Pic Link'
							onChange={handle}
							className='inn'
						/>
					</div>
					<button type='submit' style={{ marginLeft: "40%" }}>
						Submit
					</button>
				</form>
			</div>
			<div id='booo'>
				<h1 style={{ textAlign: "center" }}>Songs</h1>
				<form onSubmit={save2}>
					<div>
						<input
							type='text'
							name='song1'
							placeholder='Song 1'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='is1'
							placeholder='Link Song 1'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='dur1'
							placeholder='Duration 1'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='song2'
							placeholder='Song 2'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='is2'
							placeholder='Link Song 2'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='dur2'
							placeholder='Duration 2'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='song3'
							placeholder='Song 3'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='is3'
							placeholder='Link Song 3'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='dur3'
							placeholder='Duration 3'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='song4'
							placeholder='Song 4'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='is4'
							placeholder='Link Song 4'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<div>
						<input
							type='text'
							name='dur4'
							placeholder='Duration 4'
							onChange={handle2}
							className='inn'
						/>
					</div>
					<button type='submit' style={{ marginLeft: "40%" }}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
export default Add;
