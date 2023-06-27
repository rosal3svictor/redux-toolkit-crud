import { launchConfigState, launchConfigStateReducer } from "@shared-frontend";
import { PROGRAM_ENTITY } from "@entities/programs";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [launchConfigState.name]: launchConfigStateReducer,
  [PROGRAM_ENTITY.restApiClient().reducerPath]:
    PROGRAM_ENTITY.restApiClient().reducer,
});
