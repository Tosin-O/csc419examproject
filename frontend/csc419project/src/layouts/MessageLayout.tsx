import { useState } from "react";

// Components
import Sidebar from "../components/Sidebar";
import NotificationSidebar from "../components/notifications/notificationSidebar";
import ChatList from "../components/messages/chatList";
import ChatWindow from "../components/messages/chatWindow";

export default function MessageLayout() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [reloadChatsFlag, setReloadChatsFlag] = useState(0);

  const triggerReloadChats = () => {
    setReloadChatsFlag((n) => n + 1);
  };

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      
      {/* 1. SIDEBAR — hidden on mobile */}
      <div className="hidden md:block shrink-0 w-64 relative z-20">
        <Sidebar
          isNotificationActive={isNotificationOpen}
          onNotificationClick={() => setIsNotificationOpen((prev) => !prev)}
        />

        <NotificationSidebar
          isOpen={isNotificationOpen}
          onClose={() => setIsNotificationOpen(false)}
        />
      </div>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 flex flex-col z-30">
        <div className="flex-1 flex relative">

          {/* CHAT LIST */}
          <div
            className={`
              w-full md:w-95 border-r border-white/10
              ${selectedChatId ? "hidden md:block" : "block"}
            `}
          >
            <ChatList
              onSelectChat={setSelectedChatId}
              selectedChatId={selectedChatId}
              reloadKey={reloadChatsFlag}
            />
          </div>

          {/* CHAT WINDOW */}
          <div
            className={`
              flex-1 relative
              ${!selectedChatId ? "hidden md:flex" : "flex"}
            `}
          >
            {/* MOBILE BACK BUTTON */}
            {selectedChatId && (
              <button
                onClick={() => setSelectedChatId(null)}
                className="md:hidden absolute top-4 left-4 z-50 bg-white/10 px-3 py-1 rounded text-sm"
              >
                ← Back
              </button>
            )}

            <ChatWindow
              chatId={selectedChatId}
              onChatCreated={(newChatId) => {
                setSelectedChatId(newChatId);
                triggerReloadChats();
              }}
            />
          </div>

        </div>
      </main>
    </div>
  );
}
