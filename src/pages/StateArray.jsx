import { useSelector, useDispatch } from "react-redux"
import {addItem, deleteItem, setItems} from "../slicer/stateArraySlice"
import { useNavigate } from "react-router"


const Product = () => {

    const stateArray = useSelector(state => state.stateArray)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <h2>Product</h2>
            <button onClick={() => navigate("/state-array-entry")}>Add Product</button>
            
            <ul>
                {stateArray.map((item) => (
                    <li key={item.id}>{`${item.id} - ${item.title} 
                    - ${item.category}
                    - ${item.price}
                    - ${item.desc}`}
                    <button onClick={() => navigate(`/state-array-update/${item.id}`)}>Edit</button>
                    <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch(addItem({
                id : "4",
                title : "Mouse",
                category : "Digital & Teknologi",
                price : "Rp 299K",
                desc : "Details"
            }))}>Auto Add Product</button>
            <button onClick={() => dispatch(setItems([]))}>Delete All Product</button>
            {console.log("Data :", stateArray)}
            <br />
            <br />

            
        </div>
    )
}
export default Product