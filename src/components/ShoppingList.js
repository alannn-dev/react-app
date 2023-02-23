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
   		<ul>
				{plantList.map((plant) => (
				// <li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>
        <li key={plant.id}>{plant.name} {plant.isBestSale && <span>🔥</span>}</li>

        // <li key={plant.id}>{plant.name} {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}</li>
        // <li key={plant.id}>{plant.name} {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}</li>
				))}
			</ul>		
    </div>
	)
}

export default ShoppingList