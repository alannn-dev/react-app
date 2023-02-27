import { useState } from 'react'
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

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
        <Banner />
      {/* <div className="footer-logo">
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle<span className='trade-mark'>™</span></h1>
      </div> */}
     {/*  <p> FOR PLANTS LOVERS 🌱</p> */}
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