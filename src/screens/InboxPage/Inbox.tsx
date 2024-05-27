"use client";
import ProtectedRoute from "../ProtectedRoute";
// import MessageInbox from "./content/MessageInbox";
import DemoPage from "./content/connects/page";

export function InboxPage() {

  return (
    <ProtectedRoute>
      <div className="flex flex-col py-20">
        <DemoPage />
      </div>
    </ProtectedRoute>
  );
};

