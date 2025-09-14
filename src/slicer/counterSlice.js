import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter name",
    initialState : {
        value : 0
    },
    reducers : {
        increment : state => { state.value +=1 },
        decrement : state =>  { state.value -= 1},
        multipleByTwo : state => {state.value = state.value * 2 },
        incrementByAmount : (state, action) => {state.value += action.payload}
    }
})

export const {increment, decrement, multipleByTwo} = counterSlice.actions
export default counterSlice.reducer