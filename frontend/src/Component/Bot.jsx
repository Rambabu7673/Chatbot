import React, { useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import axios from "axios";

const Bot = () => {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);
  const messageEndRef = useRef(null);
 useEffect(() => {
   if (messageEndRef.current) {
     messageEndRef.current.scrollIntoView({ behavior: "smooth" });
   }
 }, [message]);


  // Backend ko call karna hai yeha pr
  const handleMessage = async () => {
    setLoader(true);
    if (!input.trim()) return;

    try {
      const res = await axios.post("http://localhost:4002/bot/v1/message", {
        text: input,
        
      });
      
      if (res.status === 200) {
        setMessage([
          ...message,
          { text: res.data.userMessage, sender: "user" },
          { text: res.data.botMessage, sender: "bot" },
        ]);
      }
      console.log( "This is my persional data =",( res).data);
    } catch (error) {
      console.log("Error sending message ", error);
    }
    setInput("");
    setLoader(false);
  };

  const handleKeyPress = (e) => {
   if(e.key==='Enter')  handleMessage()
  }
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0d0d] text-white">
      {/* Navbar and  Header section */}
      <header className="fixed top-0 left-0 w-full border-b border-gray-800 bg-[#0d0d0d] z-10 text-gray-400">
        <div className="contaner mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-lg font-bold ">
            Bot<span className="text-green-700 text-lg">Spoof</span>
          </h1>
          <FaRegUserCircle size={30} className="cursor-pointer" />
        </div>
      </header>
      {/* Chat area  */}
      <main className="flex  overflow-y-auto pt-20  mt-50  pb-24 items-center justify-cente">
        <div className="w-full max-w-4xl  mx-auto px-4 flex flex-col space-y-3">
          {message.length === 0 ? (
            // Center Welcome message
            <div className="text-center  text-gray-400 text-lg">
              👋 Hi,I'm{""}
              <span className="text-green-500 font-semibold "> BotSpoof</span>
            </div>
          ) : (
            <>
              {message.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-xl max-w-[75%] ${msg.sender === "user" ? "bg-blue-700 text-white self-end" : "bg-gray-800 text-gray-100 self-start"}`}
                >
                  {msg.text}
                </div>
              ))}
              {loader && (
                <div className="bg-gray-300 px-4 py-2 rounded-xl   max-w-[60%] self-start">
                  Bot is typing
                </div>
              )}
              <div ref={messageEndRef} />
            </>
          )}
        </div>
      </main>
      {/* Input and footer */}
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-800  bg-[#0d0d0d] z-10">
        <div className="max-w-4xl mx-auto flex justify-center px=4 py-3">
          <div className="w-full flex bg-gray-900 rounded-full px-4 py-2 shadow-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask to BotSpoof ..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
            />
            <button
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-white font-medium transition-colors"
              onClick={handleMessage}
            >
              <IoMdSend size={25} className="-rotate-35 fill-gray-100" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bot;
