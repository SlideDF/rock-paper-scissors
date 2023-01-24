import { configureStore } from "@reduxjs/toolkit";
import headerReducer from '../features/Header/index'
import choiceReducer from '../features/Choice/index'
import resultReducer from '../features/Result/index'
import footerReducer from '../features/Footer/index'

export default configureStore({
    reducer: {
        header: headerReducer,
        choice: choiceReducer,
        result: resultReducer,
        footer: footerReducer,
    }
})