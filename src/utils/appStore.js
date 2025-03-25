const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  //this is big reducer which contains small reducers
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
