import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../components/features/auth/authSlice";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-sm d-flex align-items-center mb-2"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Media Hub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto"> { user ? 
              (<Link id="createbutt" className="nav-link btn btn-success btn-sm" to="/category">
                Create Post +
              </Link>) : 
              (<Link id='disabledbutt' className="nav-link btn" to="/signup" disabled>
                Create Post +
              </Link>) }
            </div>
            <div className="navbar-nav me-4"> Welcome {user && user.name} </div>
            <div className="navbar-nav">
              {user ? (
                <button id='butt' className="btn btn-secondary" onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              ) : (
                <>
                  <Link className="nav-link active fw-semibold" to="/login">
                    <FaSignInAlt /> Login
                  </Link>

                  <Link className="nav-link active fw-semibold" to="/signup">
                    {" "}
                    <FaUser /> Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
