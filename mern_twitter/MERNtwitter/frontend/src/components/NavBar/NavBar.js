import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './NavBar.css'
import {logout } from '../../store/session'

function NavBar () {
    const loggedIn = useSelector(state => !!state.session.user)
    const dispatch = useDispatch()

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout())
    }

    const getLinks = () => {
        if (loggedIn) {
            return (
                <div className="links-nav">
                    <Link to={'/tweets'}> Tweets!</Link>
                    <Link to={'/profile'}> My Profile</Link>
                    <Link to={'/tweets/new'}>Create Tweet</Link>I
                    <button onClick={logoutUser}>Logout!</button>
                </div>
            );
        } else {
            return (
                <div className="links-auth">
                    <Link to={"/signup"}>Signup</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            )
        }
        }
    }

    return(
        <>
        <h2>Chirpurrrr</h2>
        {getLinks()}
        </>
    )

    export default NavBar
    