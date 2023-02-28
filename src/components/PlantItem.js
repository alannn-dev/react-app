import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, price }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			<span className="name-and-price">{name} {price}€</span>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
// EVENTS : camelCase
/* function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
} */

function handleClick(e) {
  console.log('✨ Ceci est mon event :', e)
}

export default PlantItem
