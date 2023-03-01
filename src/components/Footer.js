import { useState, useEffect } from 'react'
import '../styles/Footer.css'
import Banner from './Banner'


function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("There is no @, this is not a valid address 😥")
		}
	}

	/* useEffect(() => {
		console.log(`Alert when delete from the DOM`)
	})
 */
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
        <Banner />
			</div>
			<div className='lmj-footer-elem'>Newsletter:</div>
			<input className="email-input"
				placeholder='Your email without @'
				onChange={handleInput}
				value={inputValue}
				// onBlur={handleBlur}
			/>
      <button className="footer-btn" onClick={handleBlur}>
        SEND
      </button>
      </footer>
	)
}

export default Footer