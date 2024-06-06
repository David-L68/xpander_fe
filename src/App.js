import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import InputPage from "./pages/InputPage";
import "./App.css";
import RootLayout from "./root/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={< HomePage/>} />
      <Route path="/input" element={< InputPage/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
