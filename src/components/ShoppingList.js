import { plantList } from '../datas/plantList'
// import CareScale from './CareScale'
import PlantItem from './PlantItem'
// import logo from '../assets/logo.png'
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
				{plantList.map(({ id, cover, name, water, light }) => (
          // Props values from datas folder :
					<PlantItem
						key={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
    </div>
	)
}

export default ShoppingList