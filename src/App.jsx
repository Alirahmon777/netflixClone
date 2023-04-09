import { Navigate, Route, Routes } from "react-router-dom";
import {
  Films,
  Home,
  MyList,
  NotFound,
  Cartoon,
  Series,
  SingleFilm,
  SingleSeries,
  Trailer,
} from "./pages";
import SignUp from "./api/SignUp";
import Layout from "./Layout/Layout";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLogin } = useContext(AuthContext);
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/" element={<Navigate to={"/home"} replace />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="series" element={<Series />} />
            <Route path="series/:id" element={<SingleSeries />} />
            <Route path="films" element={<Films />} />
            <Route path="films-cartoons/:id" element={<SingleFilm />} />
            <Route path="films-cartoons/:id/trailer" element={<Trailer />} />
            <Route path="cartoon" element={<Cartoon />} />
            <Route path="my-list" element={<MyList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <>
          <Route path="*" element={<Navigate to={"/signup"} replace />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
}

export default App;
