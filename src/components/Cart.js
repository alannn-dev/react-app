import { useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul className="cart-list-products">
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} >
								<span>{name} {price}€ x {amount}</span>
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])}>Clear the cart</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open the cart
			</button>
		</div>
	)
}

export default Cart