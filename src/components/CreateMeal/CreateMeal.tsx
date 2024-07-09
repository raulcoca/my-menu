import { ChangeEvent, useState } from 'react'
import { MealType } from '../../models/MealType'
import { createNewMeal } from '../../services/api'
import { Meal } from '../../models/Meal'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { ADD_MEAL } from '../../actions/actions'


type Props = {
    mealTypes: MealType[]
}

const INITIAL_STATE = {
    name: '',
    description: '',
    date: '',
    meal_type: { id: 0, name: '' },
    img: ''

}

export default function CreateMeal({ mealTypes }: Props) {
    const [newMeal, setNewMeal] = useState(INITIAL_STATE)
    const dispatch = useDispatch();

    const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = ev.target;
        setNewMeal({ ...newMeal, [id]: value })

    }

    const handleSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = ev.target;

        setNewMeal({
            ...newMeal, [id]: mealTypes.find((mealType) => mealType.id == parseInt(value))
        })

    }

    const handleSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const mealToAdd: Meal = {
            name: newMeal.name,
            description: newMeal.description,
            date: newMeal.date,
            meal_type: newMeal.meal_type,
            img: newMeal.img,
            createdAt: moment().format('YYYY-MM-DD')
        }
        createNewMeal(mealToAdd).then((data) => {

            setNewMeal(INITIAL_STATE)
            dispatch({ type: ADD_MEAL, payload: data })
        })
    }

    return (
        <>
            <div>Crear comida</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input onChange={handleInput} type="text" id='name' value={newMeal.name} /><br />
                <label htmlFor="description">Descripcion</label>
                <input onChange={handleInput} type="text" id='description' value={newMeal.description} /><br />
                <label htmlFor="date">Fecha</label>
                <input onChange={handleInput} type="date" id='date' value={newMeal.date} /><br />
                <label htmlFor="img">Imagen</label>
                <input onChange={handleInput} type="text" id='img' value={newMeal.img} /><br />
                <label htmlFor="meal_type"></label>
                <select onChange={handleSelect} id='meal_type' value={newMeal.meal_type.id}>
                    {mealTypes.map((mealType) => (
                        <option key={mealType.id} value={mealType.id}>{mealType.name}</option>
                    ))}
                </select><br />
                <button>Crear Comida</button>
            </form>
        </>
    )
}