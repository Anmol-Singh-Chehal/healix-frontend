import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        },
    }
});

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;