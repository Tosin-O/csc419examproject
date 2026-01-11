import { Search } from "lucide-react";

export default function FriendsPage() {
  return (
   
    <main className="flex-1 py-10 px-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Friends & Followers</h1>

        {/* Search Bar Area */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for friends..."
            className="w-full bg-[#121212] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-[#FF5C00]/50 transition-all text-white"
          />
        </div>

        {/* Friends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sample Friend Card 1 */}
          <div className="bg-[#121212] p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-white/10 transition-colors">
            <img
              src="/brow.png"
              className="w-12 h-12 rounded-full object-cover bg-gray-800"
              alt="Friend"
            />
            <div className="flex-1">
              <p className="font-bold text-white">Underrated genius</p>
              <p className="text-gray-500 text-xs">@genius_mind</p>
            </div>
            <button className="text-[#FF5C00] text-xs font-bold border border-[#FF5C00]/20 px-4 py-2 rounded-xl hover:bg-[#FF5C00]/10 transition-colors">
              Follow
            </button>
          </div>

          {/* Sample Friend Card 2 */}
          <div className="bg-[#121212] p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-white/10 transition-colors">
            <img
              src="/nimi.png"
              className="w-12 h-12 rounded-full object-cover bg-gray-800"
              alt="Friend"
            />
            <div className="flex-1">
              <p className="font-bold text-white">Oluwalonimi</p>
              <p className="text-gray-500 text-xs">@nimtiml</p>
            </div>
            <button className="bg-[#FF5C00] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-orange-600 transition-colors">
              Following
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
