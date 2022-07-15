import { Link } from 'react-router-dom'
import '../index.css'

function Nav() {
	return (
	<>	
		<nav id='navbar' className="navbar navbar-expand-sm d-flex align-items-center mb-2">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">Media Hub</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav me-auto">
						<Link className="nav-link" to="/category">Create Post +</Link>
					</div>
					<div className="navbar-nav">
						<Link className="nav-link active fw-semibold" to="">Login</Link>
						<Link className="nav-link active fw-semibold" to="">Sign Up</Link>
					</div>
				</div>
			</div>
		</nav>
	</>	
	)
}

export default Nav