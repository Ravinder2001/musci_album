/** @format */
import "./edit.css";
function Edit() {
	function check() {
		var album = JSON.parse(localStorage.getItem("album"));
		var email = document.getElementById("emails").value;
		var pass = document.getElementById("passs").value;
		if (album.email == email && album.password == pass) {
			alert("Login Success");
			window.location.href = "/profile";
		} else {
			alert("You have enter wrong crediantials");
		}
	}
	return (
		<div>
			<div id='co1'>
				<h1 style={{ textAlign: "center" }}>Sign In</h1>
				<input type='text' id='emails' placeholder='Emaill' />
				<input type='text' id='passs' placeholder='Password' />
				<button id='sty' onClick={check}>
					Submit
				</button>
			</div>
		</div>
	);
}
export default Edit;
