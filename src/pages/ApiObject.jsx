import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProducts, createProduct, editProduct, removeProduct } from "../slicer/apiObjectSlice"
import { useNavigate } from "react-router"

const Api = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const apiObject = useSelector((state) => state.apiObject.value)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <h2>Api</h2>
            <button onClick={() => navigate("/api-object-entry") }>New Product</button>
            <ul>
                {apiObject.map((item) => (
                    <li key={item.id}>{`${item.title} - ${item.category} - ${item.desc} - ${item.price}`} 
                    <button onClick={() => navigate(`/api-object-update/${item.id}`)}>Update</button>
                    <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch(createProduct({
                title : "Product Title",
                category : "Product Category",
                price : "Product Price",
                desc : "Product Desc"
            }))}>Auto Add Product</button>
        </div>
    )
}
export default Api