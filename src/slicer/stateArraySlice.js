import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice(
    {
        name : "products",
        initialState : [{
            id : "1",
            title : "Edu Course 1",
            category : "Desain Grafis",
            price : "Rp 100K",
            desc : "Details 2"
        },
        {
            id : "2",
            title : "Edu Course 2",
            category : "Pemasaran",
            price : "Rp 200K",
            desc : "Details 2"
        },
        {
            id : "3",
            title : "Edu Course 3",
            category : "Digital & Teknologi",
            price : "Rp 300K",
            desc : "Details 3"
        }],
        reducers : {
            addItem: (state, action) => {
                state.push(action.payload)      
            },

            editItem : (state, action) => {
                const {id, data} = action.payload
                const index = state.findIndex((item) => item.id === id)
                if (index !== -1) {
                    state[index] = {...state[index], ...data}
                }

            },

            deleteItem : (state, action) => {
                return state.filter((item) => item.id !== action.payload)

            },

            setItems : (state, action) => {
                return action.payload
            }
        }
    }
)

export const {addItem, editItem, deleteItem, setItems} = productSlice.actions
export default productSlice.reducer