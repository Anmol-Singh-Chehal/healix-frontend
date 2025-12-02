import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user.slice.js";
import userApi from "./api/user/userApi.js";

const store = configureStore({

    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(userApi.middleware);
    },
    
});

export default store;