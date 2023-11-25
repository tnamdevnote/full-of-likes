import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FBDDDB] p-16">
      <section className="flex h-72 w-full max-w-sm items-center justify-center md:max-w-md lg:max-w-lg">
        <h1>Full of Likes</h1>
        <Button />
      </section>
    </main>
  );
}
