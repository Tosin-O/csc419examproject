// src/components/MyHomeFeed.tsx
import { Repeat2, MessageSquare, Heart, Send } from "lucide-react";
import { Link } from "react-router-dom";

const MOCK_POSTS = [
  {
    id: 1,
    user: "The anarchist",
    content:
      "Just passed a storefront window full of cacti wearing a bunch of tiny santa hats. seasonal depression cured.",
    image: "/Lookup.png",
    avatar: "/nimi.png",
  },
  {
    id: 2,
    user: "Underrated genius",
    content:
      "In your 20s, there is an apology you'll never receive and it's VERY important that you move on anyway.",
    image: "/quote.png",
    avatar: "/brow.png",
  },
];

export default function MyHomeFeed() {
  return (
    <div className="space-y-6">
      {/* 1. TOP SECTION: Clickable bubble linked to Create Post Modal */}
      <Link
        to="/create"
        className="flex items-center gap-4 bg-[#121212] p-4 rounded-2xl border border-white/5 hover:bg-[#1a1a1a] hover:border-white/10 transition-all cursor-pointer mb-8 group relative z-0"
      >
        <img
          src="/nimi.png"
          className="w-10 h-10 rounded-full border border-white/10 group-hover:scale-105 transition-transform"
          alt="avatar"
        />
        <div className="flex-1">
          <span className="text-gray-500 group-hover:text-gray-400 transition-colors">
            What's on your mind, Oluwalonimi?
          </span>
        </div>
        <div className="bg-[#FF5C00] p-2.5 rounded-xl text-white group-hover:bg-orange-600 transition-all">
          <Send size={18} />
        </div>
      </Link>

      {/* 2. FEED POSTS */}
      {MOCK_POSTS.map((post) => (
        <div key={post.id} className="group">
          {/* Post Header */}
          <div className="flex gap-4 mb-3">
            <img
              src={post.avatar}
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white">{post.user}</span>
              <p className="text-gray-300 text-[14px] leading-snug mt-1">
                {post.content}
              </p>
            </div>
          </div>

          <div className="ml-14">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#121212]">
              <img
                src={post.image}
                className="w-full h-auto object-cover max-h-112.5 cursor-pointer"
                alt="post"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(post.image, "_blank");
                }}
              />
            </div>

            {/* 3. INTERACTION BAR - High Z-Index for guaranteed clickability */}
            <div className="flex gap-8 mt-4 text-gray-500 relative z-50">
              <button className="transition-all duration-200 hover:text-[#FF5C00] cursor-pointer">
                <Repeat2 size={19} />
              </button>

              <Link
                to={`/post/${post.id}`}
                className="flex items-center gap-2 transition-all duration-200 hover:text-[#FF5C00] cursor-pointer group relative z-60"
                style={{ display: "flex", minWidth: "44px", minHeight: "44px" }}
              >
                <MessageSquare
                  size={19}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-xs font-medium">Reply</span>
              </Link>

              <button className="transition-all duration-200 hover:text-[#FF5C00] cursor-pointer">
                <Heart size={19} />
              </button>
            </div>
            <div className="h-px bg-white/5 w-full mt-8" />
          </div>
        </div>
      ))}
    </div>
  );
}
