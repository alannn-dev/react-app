
// Formulaire controlé et non contrôlé
/* import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('test')
 */    
 /*  function checkValue(value) {
    if (!value.includes('test')) {
        setInputValue(value)
    }
  } */
/*     return (
      <div>
        <h1>Controlled forms test</h1>
        <p>Use the "test" word :</p>
        {isInputError && (
            <div>🔥 You are not allowed to use the word "test" here..</div>
        )}
        <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            // onChange={(e) => checkValue(e.target.value)}
        />
        
        <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
      </div>
    )
}

export default QuestionForm
 */


// Forms non controlé
/* function QuestionForm() {

return (
  <form onSubmit={handleSubmit}>
      <input type='text' name='my_input' defaultValue='Tapez votre texte' />
      <button type='submit'>Entrer</button>
  </form>
  )
  function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
  }
}

export default QuestionForm */