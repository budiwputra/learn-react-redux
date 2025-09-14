import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slicer/counterSlice"
import productReducer from "../slicer/productSlice"
import productReducerApi from "../slicer/apiProductSlice"

export default configureStore (
    {
        reducer : {
            counter : counterReducer,
            products : productReducer,
            productsApi : productReducerApi

        }
    }
)