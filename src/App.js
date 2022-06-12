import { Route, Routes } from "react-router-dom";
import { Explore, Home, HomePosts, Landing, Login, Profile, Saved } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<Home />}>
          <Route path="/home" element={<HomePosts />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
