import { Link } from 'react-router-dom'

function Nav() {
	return (
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">CEB Media Hub</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<Link class="nav-link active" aria-current="page" to="/">Home</Link>
					<Link class="nav-link" to="/category">CategorySelection</Link>
					<Link class="nav-link" to="/entry/new">NewEntry</Link>
				</div>
			</div>
		</div>
	</nav>
	)
}

export default Nav