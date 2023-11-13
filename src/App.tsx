import { AboutMe, Hero, Navbar } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
}
