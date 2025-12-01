import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    
    {
        inputNumber: 1,
        name:"border radius",
        value: 25,
        type:"range",
        minMax: [0,250]
        
    },

        {
        inputNumber: 2,
        name:"heigth",
        value: 250,
        type:"range",
        minMax: [0,500]

    },

        {
        inputNumber: 3,
        name:"width",
        value: 250,
        type:"range",
        minMax: [0,500]
        

    },

        {
        inputNumber: 4,
        name:"backgroung",
        value:"#fff",
        type:"color"
        

    }

]


export const boxpropertie = createSlice({
    name:"boxpropertie",
    initialState,
    reducers:{
        updateBoxvalue:(state, action) => {
            state.find(el => el.inputNumber === action.payload.inputNumber).value = action.payload.value
        }
        
    }
})

export const {updateBoxvalue} = boxpropertie.actions

export default boxpropertie.reducer