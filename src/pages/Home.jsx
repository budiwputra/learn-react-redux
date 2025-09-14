import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, multipleByTwo } from "../slicer/counterSlice"

const Home = () => {
    const count = useSelector( state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <br />
                <span>{count}</span>
                <br />
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <br />
                <button onClick={() => dispatch(multipleByTwo())}>Multiple x2</button>
            </div>
            <h1>Home</h1>
        </div>
    )
}
export default Home