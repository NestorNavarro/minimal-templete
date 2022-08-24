import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token    : "",
	loggedIn : false,
	user     : {
		_id   : "1",
		name  : "Nestor",
		email : "nestor@gmail.com",
		role  : "administrator",
	},
};

export const authSlice = createSlice({
	name     : "auth",
	initialState,
	reducers : {
		setUserData : (state, action) => {
			state.token    = action.payload.token;
			state.user     = action.payload.user;
			state.loggedIn = true;
		},
		clearUserData : state => initialState,
	},
});


// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = authSlice.actions;
