
export const Button = ({text = "Boton", style = "btn-primary", effect}) => {
  return (
    <button className={style} onClick={effect}> {text} </button>
  )
}
