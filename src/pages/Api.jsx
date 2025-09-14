import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchProducts, createProduct, removeProduct } from "../slicer/apiProductSlice"

const Api = () => {
    const dispatch = useDispatch()
    const productsApi = useSelector((state) => state.productsApi)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            <h2>Api</h2>
            <ul>
                {productsApi.map((item) => (
                    <li key={item.id}>{`${item.title} - ${item.category} - ${item.price} - ${item.desc}`} 
                    <button>Update</button>
                    <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
            {console.log("Data :", productsApi)}
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