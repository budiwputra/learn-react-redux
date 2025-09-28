import {useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import {addItem, deleteItem, editItem, setItems} from "../slicer/stateArraySlice"
import { useNavigate, useParams } from "react-router"

const ProductEntry = ({isUpdate}) => {
    const {id} = useParams()
    const formRef = useRef(null)
    const stateArray = useSelector(state => state.stateArray)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        if (isUpdate) {
            const productItem = stateArray.find(item => item.id === id)
    
            formRef.current.title.value = productItem.title,
            formRef.current.category.value = productItem.category,
            formRef.current.price.value = productItem.price,
            formRef.current.desc.value = productItem.desc
        }

    }, [])
    
    return (
        <div>
            <h2>Form {isUpdate ? "Update" : "Add"}</h2>
            <button onClick={() => navigate(-1)}>Back</button>
            <form ref={formRef} action=""
            onSubmit={(e) => {
                e.preventDefault()
                if (isUpdate) {
                    dispatch(editItem({id, data : {
                        title : e.target.title.value,
                        category : e.target.category.value,
                        price : e.target.price.value,
                        desc : e.target.desc.value
                    }}))
                } else {
                    dispatch(addItem({
                        title : e.target.title.value,
                        category : e.target.category.value,
                        price : e.target.price.value,
                        desc : e.target.desc.value
                    }))                 
                }
                navigate("/state-array")
            }}>
                <label htmlFor="">Title</label>
                <br />
                <input name="title" type="text" />
                <br />
                <label htmlFor="">Category</label>
                <br />
                <select name="category" id="">
                    <option value="Digital & Teknologi">Digital & Teknologi</option>
                    <option value="Desain Grafis">Desain Grafis</option>
                    <option value="Pemasaran">Pemasaran</option>
                </select>
                <br />
                <label htmlFor="">Price</label>
                <br />
                <input name="price" type="text" />
                <br />
                <label htmlFor="">Desc</label>
                <br />
                <input name="desc" type="text" />
                <br /> 
                <button type="submit">{isUpdate ? "Update" : "Submit"}</button>
            </form>
        </div>
    )
}
export default ProductEntry