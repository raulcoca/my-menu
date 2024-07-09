import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../models/User';
import { DO_LOGOUT } from '../../actions/actions';

function Header() {
    const navigate = useNavigate();
    const user = useSelector((state: { user: User }) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        // setUserData(null);
        localStorage.removeItem('user');
        navigate('/');


        dispatch({ type: DO_LOGOUT })
    };

    return (
        <header>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                {user?.token && (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;
