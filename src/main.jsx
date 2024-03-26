import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import ListedBooks from './component/ListedBooks/ListedBooks';
import Pages from './component/Pages/Pages';
import BookDetails from './component/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/listed',
        element:<ListedBooks></ListedBooks>
      },
      {
        path: '/pages',
        element:<Pages></Pages>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('Books.json')
      },
      {
        path: '/listedbooks',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('Books.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
