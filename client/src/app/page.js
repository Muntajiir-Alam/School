import NavBar from "../components/NavBar";
import HeroBanner from "../components/home/HeroBanner";
import NoticeBoards from "../components/home/NoticeBoards";
import AboutIntro from "../components/home/AboutIntro";
import PhotoGallery from "../components/home/PhotoGallery";
import Awards from "../components/home/Awards";
import Statistics from "../components/home/Statistics";
import Messages from "../components/home/Messages";
import Highlights from "../components/home/Highlights";
import ImportantLinks from "../components/home/ImportantLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-light font-sans flex flex-col">
      <NavBar />

      <main className="grow flex flex-col">
        {/* Full-width Hero Banner with background image */}
        <HeroBanner />

        {/* Notice Boards (Overlaps the bottom of the Hero) */}
        <NoticeBoards />

        {/* About Us Abstract Section */}
        <AboutIntro />

        {/* Grid of Photos */}
        <PhotoGallery />

        {/* Vertical Top Student Cards */}
        <Awards />

        {/* Dark strip with counters */}
        <Statistics />

        {/* Principal and Chairman Messages */}
        <Messages />

        {/* Dark green textured background feature cards */}
        <Highlights />

        {/* Row of circular logos */}
        <ImportantLinks />

      </main>

      {/* Footer Placeholder (Usually a separate component) */}
      <footer className="bg-text-dark text-white py-10 text-center text-sm">
        <p>© 2026 EduLe Public School. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
