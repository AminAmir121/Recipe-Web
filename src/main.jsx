// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store   from './store/store.js'
import After from './components/After.jsx';
import Result from './components/Result.jsx';
import RecipeDetail from './components/RecipeDetail.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <After /> },
     { path: "/result", element: <Result /> },
  ]
},
{
  path: "/recipe/:id",
  element: <RecipeDetail />
}
])


createRoot(document.getElementById('root')).render(

    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>

)
