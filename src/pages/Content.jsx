import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multipleByTwo } from "../slicer/counterSlice"
const Content = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <br />
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <br />
                <button onClick={() => dispatch(multipleByTwo())}>x2</button>                
            </div>
        </div>
    )
}
export default Content