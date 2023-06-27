import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer } from "./rootReducer";
import { PROGRAM_ENTITY } from "@entities/programs";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PROGRAM_ENTITY.restApiClient().middleware),
});

// Enable cache listener behavior for the store.
setupListeners(store.dispatch);
