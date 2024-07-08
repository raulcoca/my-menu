import { useSelector } from 'react-redux';
import { Meal } from '../../models/Meal';

type Props = {}

function Menu({ }: Props) {

    const meals: Meal[] = useSelector((state: { meals: Meal[] }) => state.meals);
    console.log(meals)

    return (
        <div>Menu</div>
    )
}

export default Menu