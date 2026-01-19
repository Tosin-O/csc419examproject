import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../pages/Home';
import Collectives from '../components/Collectives';
import NotificationSidebar from "../components/notifications/notificationSidebar";

const MainLayout: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-hidden">

      {/* ================= MOBILE SIDEBAR (Overlay) ================= */}
      <div className="lg:hidden fixed left-0 top-0 h-screen z-50">
        <Sidebar
          isNotificationActive={isNotificationOpen}
          onNotificationClick={() => setIsNotificationOpen(prev => !prev)}
        />
      </div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden lg:flex min-h-screen">

        {/* Desktop Sidebar */}
        <aside className="shrink-0 w-20 xl:w-64 sticky top-0 h-screen border-r border-gray-800 z-40">
          <Sidebar
            isNotificationActive={isNotificationOpen}
            onNotificationClick={() => setIsNotificationOpen(prev => !prev)}
          />
        </aside>

        {/* Desktop Content Area */}
        <div className="flex-1 flex justify-center min-w-0">

          {/* Feed (Shifted Right) */}
          <main
            className="
              w-full max-w-2xl min-w-0 border-r border-gray-800
              lg:ml-24 xl:ml-32 2xl:ml-40
            "
          >
            <div className="pt-10 px-4">
              <Feed />
            </div>
          </main>

          {/* Collectives (No Scrollbar) */}
          <aside className="hidden xl:block w-80 p-6 sticky top-0 h-screen">
            <div className="pt-10">
              <Collectives />
            </div>
          </aside>

        </div>
      </div>

      {/* ================= MOBILE CONTENT ================= */}
      <main className="lg:hidden w-full flex justify-center">
        <div className="w-full max-w-md px-4 pt-6">
          <Feed />
        </div>
      </main>

      {/* ================= NOTIFICATIONS ================= */}
      {isNotificationOpen && (
        <>
          {/* Notification Panel */}
          <div
            className="
              fixed top-0 h-screen z-50 bg-dark border-r border-gray-800
              w-80 sm:w-96 transition-transform duration-300
              left-0 lg:left-20 xl:lg:left-64
            "
          >
            <NotificationSidebar
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
            />
          </div>

          {/* Backdrop (Mobile Only) */}
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsNotificationOpen(false)}
          />
        </>
      )}

    </div>
  );
};

export default MainLayout;
