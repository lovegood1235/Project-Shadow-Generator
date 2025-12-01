import { configureStore } from "@reduxjs/toolkit";
import shadows from "./features/shadows";
import boxpropertie from "./features/boxproperties";


export const store = configureStore({
    reducer: {
        shadows,
        boxpropertie
    }
})