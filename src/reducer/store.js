import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slicer/counterSlice"
import stateArray from "../slicer/stateArraySlice"
import stateObject from "../slicer/stateObjectSlice"
import apiArray from "../slicer/apiArraySlice"
import apiObject from "../slicer/apiObjectSlice"

export default configureStore (
    {
        reducer : {
            counter : counterReducer,
            stateArray : stateArray,
            stateObject : stateObject,
            apiArray : apiArray,
            apiObject : apiObject
        }
    }
)