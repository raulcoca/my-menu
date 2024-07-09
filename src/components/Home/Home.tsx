import { useSelector } from 'react-redux';
import { User } from '../../models/User';

type Props = {}

function Home({ }: Props) {

    const user = useSelector((state: { user: User }) => state.user);

    return <>
        <h1>Mis recetas</h1>
        {
            user ? <h2>Hola {user.firstName}</h2> : <h2>Haz login para ver todo el contenido</h2>
        }
    </>

}

export default Home