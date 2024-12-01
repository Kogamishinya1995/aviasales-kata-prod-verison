import { configureStore } from "@reduxjs/toolkit";
import {
  FilterState,
  TicketsState,
  TransfersState,
} from "../types";
import filterReducer from "./filterSlice";
import ticketReducer from "./ticketsSlice";
import transfersReducer from "./transfersSlice";

export type RootState = {
  transfers: TransfersState;
  filter: FilterState;
  tickets: TicketsState;
};

const store = configureStore({
  reducer: {
    transfers: transfersReducer,
    filter: filterReducer,
    tickets: ticketReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
