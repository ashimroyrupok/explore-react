import './App.css'
import Counter from './Counter'

import Friends from './Friends'
import Users from './users'


function HandleClick(a)  {
  alert( a+4)

}


function App() {


  return (
    <>

      <h1>Vite + React</h1>

      

      <Friends></Friends>

      <Users></Users>

      <Counter> </Counter>

      <button onClick={() => HandleClick(2)}>click me</button>

    </>
  )
}

export default App
