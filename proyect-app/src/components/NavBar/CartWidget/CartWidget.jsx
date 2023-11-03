import style from "./CartWidget.module.css"

export const CartWidget = () => {
    return (
        <>
        <div className="container d-flex">
            <i className={`fa fa-shopping-cart ${style.cartWidget}`}></i>
            <p className={style.cartNumber}>1</p>
        </div>
        </>
    )
}