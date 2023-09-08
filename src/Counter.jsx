import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    function Add(){
       const newCount = count + 1
        setCount(newCount)
    }
    function HandleReduce() {
        const newConut = count -1
        setCount(newConut)
    }

    return (
        <div>
            <h2 style={{border : "2px solid red"}}>conuter:{count}</h2>

            <button onClick={Add}>Add</button>
            <button onClick={HandleReduce}>Reduce</button>

        </div>

        


    )
}