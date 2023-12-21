import { useEffect } from "react"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"

export const Products = ({children}) => {

    useEffect(() => {

        const myProducts = query( collection( db, "products" ) )
        getDocs(myProducts)
            .then( resp => {
                console.log(resp.docs[0].data())
            } )
            .catch( error => {
                console.log(error)
            } )

    }, [])

  return (
    <div>{children}</div>
  )
}
