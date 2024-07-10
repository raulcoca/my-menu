import { ChangeEvent } from 'react'
import { MealType } from '../../models/MealType'

type Props = {
    mealTypes: MealType[];
    setSelectedMealType: (mealType: number) => void
}

function FilterMeal({ mealTypes, setSelectedMealType }: Props) {

    const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {


        setSelectedMealType(parseInt(ev.target.value))
    }

    return (
        <>

            <h4>Filtar</h4>
            <select onChange={handleChange}>
                <option value='0'>Selecciona un tipo de comida</option>
                {mealTypes.map((mealType) => (
                    <option key={mealType.id} value={mealType.id}>{mealType.name}</option>
                ))
                }
            </select>
        </>
    )
}

export default FilterMeal