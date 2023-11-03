import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"



function App() {

  return (
    <>
    <NavBar />
    <div>
    <ItemListContainer greeting={"Bienvenidos a Tech-House. Casa de Electronica"}/>
    </div>
    </>
  )
}

export default App
