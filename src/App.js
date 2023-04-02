import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import VideoPage from "./components/VideoPage";

const appRouter = createBrowserRouter([
  {path:"/",
  element:<Body/>,
  children:[
    {path:"/",
    element:<MainContainer/>},
    {path:"/video",
    element:<VideoPage/>}
  ]}
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
