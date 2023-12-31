"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState(0);

  const handleClick = () => {
    setStatus(status + 1);

    const bc = new BroadcastChannel("test_channel");
    bc.postMessage(status);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>click here</button>
    </main>
  );
}
