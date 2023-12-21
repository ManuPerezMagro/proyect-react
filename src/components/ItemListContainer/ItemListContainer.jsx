import { collection, getDoc, getDocs, query, where, doc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { db } from "../../config/firebaseConfig"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { seedProducts } from "../../utils/seedProducts"
import { GifLoading } from "../GifLoading/GifLoading"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
  const { totalQuantity } = useContext(CartContext)
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [setProduct] = useState(null)
 
  const getProductsDB = async (category) => {
    const myProducts = category
    ? query(collection(db, "products"), where("category", "==", category))
    : query(collection(db, "products"))
    const resp = await getDocs(myProducts);

    const productList = resp.docs.map((doc) => ({id: doc.id, ...doc.data() }))
    setProducts(productList)
    setIsLoading(false)
  }

  const getProductsById = async (id) => {
    const productRef = doc(db, "products", id)
    const resp = await getDoc(productRef)
    if (resp.exists()) {
      const prod = {
        id : resp.id,
        ...resp.data()
      }
      setProduct(prod)
    }
  }

  useEffect(() => { 
    
    setIsLoading(true)
    getProductsDB(category)
    getProductsById(" ")
   }, [category])

  return <>{isLoading ? <h1 className="text-center p-5"><GifLoading/></h1> : <ItemList products={products} />}</>
};