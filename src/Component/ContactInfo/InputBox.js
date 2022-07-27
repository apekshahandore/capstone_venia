const InputBox=({type,label,value,aria, onChange})=>{
    return(   <label htmlFor="input_name">{label}<br />
                <input type={type} value={value} aria-describedby={aria} onChange={onChange} required/>
            </label>)
}
export default InputBox;