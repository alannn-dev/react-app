/* function CareScale(props) {
  const scaleValue = props.scaleValue */

  // const {scaleValue, careType} = props
  function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {/* Le "KEY" attribué à chaque icône est l'élément actuel converti en chaîne de caractères.*/}
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
    
export default CareScale