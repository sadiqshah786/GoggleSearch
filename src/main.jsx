import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ResultContextProvider } from './context/ResultContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ResultContextProvider>
  <Router>
     <App />
   </Router>
  </ResultContextProvider>
)
