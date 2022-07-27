const Button=({text, onClick,className, img, arialabel,text1})=>{
    return (<>
                <button  aria-label={arialabel} className={className} onClick={onClick} type="button">
                {img ?<img src={img} alt=" "/>:null  }
                <span>{text}</span><span style={{display:"none"}}>{text1}</span>
                </button>
             </>);
             }
    export default Button;