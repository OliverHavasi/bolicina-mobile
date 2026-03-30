import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import ProseccoDetailPage from "./pages/ProseccoDetailPage";
import RankingsPage from "./pages/RankingsPage";
import RegionsPage from "./pages/RegionsPage";
import RegionDetailPage from "./pages/RegionDetailPage";
import ProducersPage from "./pages/ProducersPage";
import ProducerDetailPage from "./pages/ProducerDetailPage";
import ProfilePage from "./pages/ProfilePage";
import MagazinePage from "./pages/MagazinePage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen pb-[72px] lg:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/prosecco/:id" element={<ProseccoDetailPage />} />
            <Route path="/rebriciky" element={<RankingsPage />} />
            <Route path="/regiony" element={<RegionsPage />} />
            <Route path="/regiony/:slug" element={<RegionDetailPage />} />
            <Route path="/producenti" element={<ProducersPage />} />
            <Route path="/producenti/:slug" element={<ProducerDetailPage />} />
            <Route path="/profil/:username" element={<ProfilePage />} />
            <Route path="/magazin" element={<MagazinePage />} />
            <Route path="/magazin/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
