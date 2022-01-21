import { combineReducers, createStore } from "redux";
import { UsersReducer } from "./UsersReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { WebsiteReducer } from "./WesbiteReducer";
import UsersSlice from "./UsersSlice";
import HotelsSlice from "./HotelsSlice";

// this is our database for all the Redcuers

/*
rootReducer:{
    UsersReducer:{
        loading: false
        users:[
            {
                id:
                email:
                firstName:
                lastName:
                avatar:
            },
            {
                id:
                email:
                firstName:
                lastName:
                avatar:
            }
        ]
    },

AnotherReducer : {
    Attributes of the AnotherReducer
}
}
*/

// rootReducer is our Database
const rootReducer = combineReducers({
  // this is our tables in the Database
  UsersReducer: UsersReducer,
  WebsiteReducer: WebsiteReducer,
  HotelsSlice: HotelsSlice,
  UsersSlice: UsersSlice,
  //table name : tableFunction
});

// This is required during the useSelector query
export type AppState = ReturnType<typeof rootReducer>;

// This is like a connection string to connect all the component with the Database
export const configureStore = () => {
  return createStore(rootReducer, {}, devToolsEnhancer({}));
};
// devToolsEnhancer is a middleware which connect the appliaction with the redux-devtool extension
// We provide the intial value of our Reducer to devToolsEnhancer which is intitally a empty object
