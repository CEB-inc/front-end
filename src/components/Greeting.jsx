export default function Greeting({ firstName }) {
	return (
		<>
			<p>Hello there{firstName ? `, ${firstName}` : ""}!</p>
			<p>Would you like to browse Movie, Game or Music content today? 🧑🏽‍💻</p>
		</>
	)
}