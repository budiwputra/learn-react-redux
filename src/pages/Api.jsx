import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProducts, createProduct, editProduct, removeProduct } from "../slicer/apiProductSlice"
import { useNavigate } from "react-router"

const Api = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productsApi = useSelector((state) => state.productsApi)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <h2>Api</h2>
            <button onClick={() => navigate("/entry-api") }>Create New Product</button>
            <ul>
                {productsApi.map((item) => (
                    <li key={item.id}>{`${item.title} - ${item.category} - ${item.price} - ${item.desc}`} 
                    <button onClick={() => navigate(`/update-api/${item.id}`)}>Update</button>
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