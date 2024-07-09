import { useNavigate, useParams } from 'react-router-dom';
import { Meal } from '../../models/Meal';
import { useSelector } from 'react-redux';

type Props = {}

export const MealDetail = ({ }: Props) => {
    const { id } = useParams();
    const meals: Meal[] = useSelector((state: { meals: Meal[] }) => state.meals);
    const navigate = useNavigate();

    const meal = meals.find((meal) => meal.id == parseInt(id!));
    if (!meal) {
        navigate('/*');
    }
    console.log(meal);

    return (
        <>
            {meal &&
                <div>
                    <h1>Detalles</h1>
                    <h3>{meal.name}</h3>
                    <div>
                        <img src={meal.img}></img>
                    </div>
                    <h3>{meal.meal_type.name}</h3>
                    <div>{meal.description}</div>
                </div>
            }
        </>
    )
}
