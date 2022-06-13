import { Route, Routes } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { RequireAuth } from "./services/RequireAuth";

function App() {
  
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
