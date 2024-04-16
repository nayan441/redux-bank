
import './App.css'
import Balance from './components/Bank/Balance'
import Deposit from './components/Bank/Deposit'
import Withdrawl from './components/Bank/Withdrawl'
import store from './store'
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <Balance></Balance>
      <Deposit></Deposit>
      <Withdrawl></Withdrawl>
    </Provider>


  )
}

export default App
