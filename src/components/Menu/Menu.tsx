import { useSelector } from 'react-redux';
import { Meal } from '../../models/Meal';
import { useEffect, useState } from 'react';
import { getMealTypes } from '../../services/api';
import './Menu.scss';
import moment from 'moment';
import FilterMeal from '../FilterMeal/FilterMeal';
import { MealType } from '../../models/MealType';
import { Link } from 'react-router-dom';
import CreateMeal from '../CreateMeal/CreateMeal';

type Props = {}

function Menu({ }: Props) {

    const meals: Meal[] = useSelector((state: { meals: Meal[] }) => state.meals);
    const [mealTypes, setMealTypes] = useState<MealType[]>([]);
    const [selectedMealType, setSelectedMealType] = useState(0)


    useEffect(() => {
        getMealTypes().then((mealTypes) => {
            setMealTypes(mealTypes);
        })
    }, [])

    const filteredMeals = (): Meal[] => {
        return meals.filter((meal) => {
            return !selectedMealType ? meal : meal.meal_type.id === selectedMealType;
        });
    }

    // 'dddd, DD [de] MMMM'

    return (
        <div>
            <CreateMeal mealTypes={mealTypes}></CreateMeal>

            <FilterMeal mealTypes={mealTypes} setSelectedMealType={setSelectedMealType}></FilterMeal>
            <div className='meal__container'>

                {filteredMeals().map(meal => (
                    <Link key={meal.id} to={`/detail/${meal.id}`}>
                        <div className="meal" >
                            <div className="meal__name">{meal.name}</div>
                            <div >
                                <img className="meal__img" src={meal.img}></img>
                            </div>
                            <div className="meal__type">{meal.meal_type.name}</div>
                            <div className="meal__date">{moment(meal.date).format('dddd, DD [de] MMMM')}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Menu