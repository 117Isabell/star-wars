import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import { routes } from './routes/routes'
import './styles/main.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
