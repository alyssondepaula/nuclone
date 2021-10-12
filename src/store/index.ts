import { createStore } from "redux"
import { reducers } from "./reducers"


const store = createStore(reducers)

export type AppDispatch = typeof store.dispatch
export default store