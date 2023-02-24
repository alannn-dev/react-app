import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	return (
    <div>
			<ul>
				{categories.map((cat) => (
          // Key : aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés
					<li key={cat}>{cat}</li>
				))}
			</ul>
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
          <li key={plant.id} className='lmj-plant-item'>
            {plant.name} {plant.isSpecialOffer && <span className='lmj-sales'>Solde</span>}
          </li>
        ))}
      </ul>
    </div>
	)
}

export default ShoppingList