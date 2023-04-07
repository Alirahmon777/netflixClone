import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Films,
  Home,
  MyList,
  NotFound,
  Cartoon,
  Series,
  SingleFilm,
  Trailer,
} from "./pages";
import SignUp from "./api/SignUp";
import Layout from "./Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to={"/home"} replace />} />

      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="films" element={<Films />} />
        <Route path="films-cartoons/:id" element={<SingleFilm />} />
        <Route path="films-cartoons/:id/trailer" element={<Trailer />} />
        <Route path="cartoon" element={<Cartoon />} />
        <Route path="my-list" element={<MyList />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="signup" element={<SignUp />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
