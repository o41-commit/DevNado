import MainLayout from "./layout/mainLayot"
import Index from "./Index"
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout/>}>
          <Route index element={<Index />} />
        
      </Route>
      </>
    )
  )

  return< RouterProvider router={router} />
}

export default App