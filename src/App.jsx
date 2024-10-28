import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SearchByIdPage from "./pages/SearchByIdPage";
import SearchByBarcodePage from "./pages/SearchByBarcodePage";
import SearchByManifestPage from "./pages/SearchByManifestPage";
import ShipmentDetailsPage from "./pages/ShipmentDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/searchById" element={<SearchByIdPage />} />
        <Route path="/searchByBarcode" element={<SearchByBarcodePage />} />
        <Route path="/searchByManifest" element={<SearchByManifestPage />} />
        <Route path="/:id" element={<ShipmentDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
