import Image from "next/image";
import Button from "./components/button";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-16">
      <section className="flex h-72 w-full max-w-sm items-center justify-center rounded-2xl bg-zinc-700 md:max-w-md lg:max-w-lg">
        <Button></Button>
      </section>
    </main>
  );
}
