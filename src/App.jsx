import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import MainPage from './components/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: < MainPage/>
  }
])

export const cards = [
  {
    src: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    description: 'Hi, this are a description'
  },
]

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
