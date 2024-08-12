const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //this is big reducer which contains small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
