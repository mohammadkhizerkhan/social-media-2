import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import {
  Explore,
  Home,
  HomePosts,
  Landing,
  Login,
  Profile,
  Saved,
} from "./pages";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RequireAuth } from "./services/RequireAuth";
import { getAllPosts } from "./features/post/PostSlice";
import { getAllUsers } from "./features/user/UserSlice";

function App() {
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getAllPosts());
      dispatch(getAllUsers())
    }
  }, [token]);
  return (
    <div className="App">
      <ToastContainer
        className="toast"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route element={<Home />}>
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<HomePosts />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
