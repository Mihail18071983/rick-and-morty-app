import { configureStore } from "@reduxjs/toolkit";
import {useDispatch} from "react-redux"

import checkboxReducer from "./checkbox.slice";

export const store = configureStore({
  reducer: {
    chexbox:checkboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:()=>AppDispatch=useDispatch

