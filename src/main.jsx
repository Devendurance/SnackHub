import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import reducer from './context/reducer.jsx';
import { StateProvider } from './context/StateProvider.jsx';
import { initialState } from './context/initialState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />

    </StateProvider>
    </BrowserRouter>,
)
