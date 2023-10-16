import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { userSlice } from "../features/auth/userSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        'user': userSlice.reducer
    },
    middleware:  ( getDefaultMiddleware )=> getDefaultMiddleware().concat(apiSlice.middleware) ,
    devTools: true 

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch