import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  // const [isFooterShown, updateIsFooterShown] = useState ([false])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  
    return (
          <div>
            <Banner />
            <div className='lmj-layout-inner'>
                {/*Share states between components with props*/}
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            {/*<QuestionForm />*/}
            {/*<button onClick={() => updateIsFooterShown(!isFooterShown)}>Hide</button>*/}
            {/*{isFooterShown && <Footer cart={cart}/>}*/}
            <Footer />
          </div>
    )
}

export default App