import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
    auth : authSlice,
});

const store = configureStore({
    reducer : reducers,
});

export { store };

