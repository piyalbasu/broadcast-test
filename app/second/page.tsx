"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

export default function Home() {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    const bc = new BroadcastChannel("test_channel");
    bc.onmessage = (event) => {
      setStatus(event.data);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      status: {status}
    </main>
  );
}
