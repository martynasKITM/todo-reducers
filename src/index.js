import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app/App';
import {AppProvider} from "./context/TasksContext";

ReactDOM.render(
  <React.StrictMode>
      <AppProvider>
          <App />
      </AppProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


