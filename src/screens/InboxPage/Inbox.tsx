"use client";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "../ProtectedRoute";
import MessageInbox from "./content/MessageInbox";

export function InboxPage() {

  const handleLogout = () => {
    // Remove the user's data from local storage
    localStorage.removeItem('user');

    // Redirect to the login page
    window.location.href = '/';
  };
  return (
    <ProtectedRoute>
      <div className="flex flex-col py-20">
        <div className="flex items-center justify-center">
          <Button onClick={handleLogout} className="btn btn-primary">Log Out</Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MessageInbox />
        </div>
      </div>
    </ProtectedRoute>
  );
};

