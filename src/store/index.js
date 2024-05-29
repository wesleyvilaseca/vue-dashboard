import {createStore} from 'vuex'
import course from "@/store/course";
import userSession from "@/store/user";
import navMenuState from "@/store/menu";



export default createStore({
    state: {
        listBrands: [],
        listProducts: [],
        listOptions: [],
        nameSite: "Post Academy",
        apiURL: "http://127.0.0.1:8000/api/v1/"
    },
    modules: {
        course,
        userSession,
        navMenuState
    }
})
