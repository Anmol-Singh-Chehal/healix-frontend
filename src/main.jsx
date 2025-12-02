import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './components/theme/ThemeProvider.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {index:true, element:<HomePage/>}, 
      {path:"contact", element:<ContactPage/>},
      {path:"how-it-works", element:<HowItWorksPage/>},
      {path:"sign-in", element:<SignInPage/>},
      {path:"sign-up", element:<SignUpPage/>},
      {path:"quiz", element:<QuizPage/>}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>,
)
