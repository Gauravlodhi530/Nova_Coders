import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/DataProvider";

// import { store } from "./store/Store";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
//  <Provider store={store}>
//   //     <App />
//   //   </Provider>
