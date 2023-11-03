import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"



function App() {

  return (
    <>
    <NavBar />
    <div className="text-center p-5 fs-2">
    <ItemListContainer greeting={"Bienvenido a Tech-House. Casa de Electronica"}/>
    </div>
    </>
  )
}

export default App
