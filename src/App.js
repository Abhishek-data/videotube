import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {path:"/",
  element:<Body/>}
])

function App() {
  
  return (
    <>
      <Header />
      <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
