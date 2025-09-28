import { useNavigate, useParams } from "react-router"
import { useEffect, useRef } from "react"
import { fetchProducts, createProduct, editProduct} from "../slicer/apiObjectSlice"
import {  useSelector, useDispatch } from "react-redux"


const EntryApi = ({isUpdate}) => {
    const {id} = useParams()
    const formRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const apiObject = useSelector((state) => state.apiObject.value)
    useEffect(() => {
        if (isUpdate) {
            const productItem = apiObject.find(item => item.id === id)
            formRef.current.title.value = productItem.title,
            formRef.current.category.value = productItem.category,
            formRef.current.desc.value = productItem.desc,
            formRef.current.price.value = productItem.price
        }
    }, [])
    
    return (
        <div>
            <h2>{isUpdate ? "Update" : "Entry"} Api</h2>
            <button onClick={() => navigate(-1)}>Back</button>
            <br />
            <br />
            <form ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                if (isUpdate) {
                    dispatch(editProduct({id, payload : {
                        title : e.target.title.value,
                        category : e.target.category.value,
                        price : e.target.price.value,
                        desc : e.target.desc.value
                    } }))
                } else {
                    dispatch(createProduct({
                        title : e.target.title.value,
                        category : e.target.category.value,
                        price : e.target.price.value,
                        desc : e.target.desc.value
                    }))
                }
                navigate("/api-object")
            }} action="">
                <label htmlFor="">Title</label>
                <br />
                <input name="title" type="text" />
                <br />
                <label htmlFor="">Category</label>
                <br />
                <select name="category" id="category">
                    <option value="Pemasaran">Pemasaran</option>
                    <option value="Desain">Desain</option>
                    <option value="Pengembangan Diri">Pengembangan Diri</option>
                </select>
                <br />
                <label htmlFor="">Desc</label>
                <br />
                <input name="desc" type="text" />
                <br />
                <label htmlFor="">Price</label>
                <br />
                <input name="price" type="text" />
                <br />
                <button type="submit">{isUpdate ? "Update" : "Submit"}</button>
            </form>
        </div>
    )
}
export default EntryApi