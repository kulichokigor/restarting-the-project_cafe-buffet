const InputSelectElement = (props) => {
    const {type, name, change, optimus=[]} = props

    const select = (
        <select style={{width:'130px'}} name="dish" id="dish">
            <option value="" >--selected--</option>
            {optimus.map((op, index)=>{
                return <option key={index} value={op.dishName} id={op.id} >{op.dishName}</option>
            })}
            {/* <option value="soup">Soup</option>
            <option value="mimoza">Mimoza</option>
            <option value="pizza">Pizza</option> */}
        </select>
    )

    const input = (
        <input name={name} type={type} onChange={event=>change(event)} />
    )

    return <>
            {!type ? select : input}
    </>
}
 
export default InputSelectElement;