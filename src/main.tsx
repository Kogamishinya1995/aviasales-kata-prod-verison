import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { Provider } from "react-redux";
import store from "./slices/index";
import { StrictMode } from "react";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
