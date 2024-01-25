import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import NavBar from "./components/NavBar";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
const HomePage = lazy(() => import("./pages/HomePage"));
const DonationPage = lazy(() => import("./pages/DonationPage"));
// const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <main className="w-full grid grid-row-minmax bg-blue-50 overflow-y-auto overflow-x-hidden">
          <NavBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/donations" element={<DonationPage />}></Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
