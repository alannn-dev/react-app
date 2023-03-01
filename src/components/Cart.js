import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])
    
    useEffect(() => {
        console.log(`Total amount is ${total}€ 💸(useEffect test)`)
    }, [total])
    
    // useEffect demos for the cart component :

/*     useEffect(() => {
       console.log(`Alert for each render`)
    }, [total])
 
    useEffect(() => {
        console.log(`Alert for the 1st render with the 2nd argument : []`)
    }, [])
 
    useEffect(() => {
        console.log(`Alert for the 1st render and when cart is updated : [cart]`)
    }, [cart])

    // For useEffect alert when delete from the DOM : Footer.js
 */
    
    
    return isOpen ? (
        console.log('JSX Rendered'),
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
					<h3 className="total">Total : {total}€</h3>
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
				CART
			</button>
		</div>
	)
}

export default Cart