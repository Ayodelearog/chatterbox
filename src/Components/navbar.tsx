import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import "./navbar.css"
import { signOut } from "firebase/auth"

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <div className="Navbar">
                <div className="links">
                    <Link to="/">Home</Link>
                    {user ? <Link to="/createpost">Create Post</Link> : <Link to="/login">Login</Link>}
                    
                </div>

                <div className="user">
                    {user &&
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} alt="" />
                        <button type="button" onClick={signUserOut}>Log Out</button>
                    </>
                    }
                    
                </div>
            </div>
        </div>
    )
}