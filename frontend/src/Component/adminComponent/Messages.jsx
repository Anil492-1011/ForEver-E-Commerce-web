import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const loginData = JSON.parse(localStorage.getItem("loginData"));
      const response = await axios.get(
        `${import.meta.env.VITE_CLIENT_URL}/api/contact/all`,
        {
          headers: {
            Authorization: `Bearer ${loginData?.token}`,
          },
        },
      );

      if (response.data?.success) {
        setMessages(response.data.data || []);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const recentMessages = messages.slice(0, 5);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-8 text-gray-700">
      <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
            <h3 className="text-lg font-medium mb-3">Recent Messages</h3>
            {recentMessages.length === 0 ? (
              <p>No recent messages found.</p>
            ) : (
              <div className="space-y-3">
                {recentMessages.map((item) => (
                  <div
                    key={item._id}
                    className="border border-gray-200 rounded-md p-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">{item.email}</p>
                    <p className="mt-2 text-sm">{item.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_2fr_160px] bg-gray-100 px-4 py-2 text-sm font-semibold">
              <span>Name</span>
              <span>Email</span>
              <span>Message</span>
              <span>Date</span>
            </div>

            {messages.length === 0 ? (
              <p className="p-4">No messages found.</p>
            ) : (
              messages.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-[1fr_1fr_2fr_160px] items-start gap-3 px-4 py-3 text-sm border-t"
                >
                  <p className="font-medium">{item.name}</p>
                  <p className="break-all">{item.email}</p>
                  <p className="break-words">{item.message}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
