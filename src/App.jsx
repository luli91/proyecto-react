//App seria como el padre de todos los componentes

import ComponenteA from "./components/ComponenteA"
import ComponenteB from "./components/ComponenteB"

const App = () => {
  return (
    <>
    <div>App</div>
    <ComponenteA />
    <ComponenteB />
    </>
  )
}

export default App
