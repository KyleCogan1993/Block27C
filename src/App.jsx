import './App.css'
import { Provider } from 'react-redux'
import store from './app/store'
import Players from './features/players/Players'

function App() {

  return (
    <Provider store={store}>
      <Players />
    </Provider>
  )
}

export default App
