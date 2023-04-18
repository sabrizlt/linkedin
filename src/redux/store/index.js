import { configureStore } from "@reduxjs/toolkit";
import { getProfile } from "../actions";


const store = configureStore({
    reducer: getProfile,
})

export default store