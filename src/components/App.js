import { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
    const [cart, updateCart] = useState([]) // Initializing the state with an empty []
    const [isFooterShown, updateIsFooterShown] = useState ([false])
    return (
          <div>
            <Banner />
            <div className='lmj-layout-inner'>
                {/*Share states between components with props*/}
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            {/*<QuestionForm />*/}
            <button onClick={() => updateIsFooterShown(!isFooterShown)}>Hide</button>
            {/*{isFooterShown && <Footer cart={cart}/>}*/}
            <Footer />
          </div>
    )
}

export default App