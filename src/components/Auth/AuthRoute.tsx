import { Navigate } from 'react-router-dom';
import { User } from '../../models/User';
import { useSelector } from 'react-redux';

type Props = {
    component: JSX.Element
}

function AuthRoute({ component }: Props) {

    const user: User = useSelector((state: { user: User }) => state.user);


    if (user && user.token) {
        return component;
    } else {
        return <Navigate to="/login"></Navigate>;
    }
}

export default AuthRoute;
