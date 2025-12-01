import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
            {
                inputNumber: 1,
                name:"horizontal offset",
                value:0,
                type:"range",
                minMax: [-250,250]
            },

             {
                inputNumber: 2,
                name:"vertical offset",
                value: 10,
                type:"range",
                minMax: [-250,250]
            },

             {
                inputNumber: 3,
                name:"blur radius",
                value:15,
                type:"range",
                minMax: [0,250]
            },

            {
                inputNumber: 4,
                name:"spread radius",
                value: -3,
                type:"range",
                minMax: [-250,250]
            },

             {
                inputNumber: 5,
                name:"color",
                value:"#4f4f4f",
                type:"color"
            },

        ]
    }

]

export const shadowslice = createSlice({
    name:"shadow",
    initialState,
    reducers:{
        removeShadow:(state, action) => {
            const shadorindexRemove = state.findIndex(shadow => shadow.id === action.payload)

            state.splice(shadorindexRemove, 1)
            
        },
        addShadow:(state, action) => {

            state.push(
                {
                    id: nanoid(8),
                    active:true,
                    inset: false,
                    inputs: [
                        {
                            inputNumber: 1,
                            name:"horizontal offset",
                            value: 0,
                            type:"range",
                            minMax: [-250,250]
                        },

                        {
                            inputNumber: 2,
                            name:"vertical offset",
                            value: 10,
                            type:"range",
                            minMax: [-250,250]
                        },

                        {
                            inputNumber: 3,
                            name:"blur radius",
                            value:15,
                            type:"range",
                            minMax: [0,250]
                        },
                        {
                            inputNumber: 4,
                            name:"spread radius",
                            value: -3,
                            type:"range",
                            minMax: [-250,250]
                        },

                        {
                            inputNumber: 5,
                            name:"color",
                            value:"#4f4f4f",
                            type:"color"
                        },

                    ]
                }
            )

        },
        updateShadowvalue:(state, action) => {

            const currentShadow = state.find(
                shadow => shadow.id === action.payload.shadowID
            )

            const currentInput = currentShadow.inputs.find(
                input => input.inputNumber === action.payload.inputNumber
            )

            currentInput.value = action.payload.value

        },
        updateCheckbox:(state, action) => {
            const currentShadow = state.find(
                shadow => shadow.id === action.payload.shadowID
            )

            currentShadow[action.payload.name] =  !currentShadow[action.payload.name] 
        }
    }
})

export const {updateShadowvalue , addShadow , updateCheckbox , removeShadow} = shadowslice.actions

export default shadowslice.reducer