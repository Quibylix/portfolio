import {
  AboutMe,
  ContactMe,
  Footer,
  Hero,
  MyProjects,
  Navbar,
} from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <MyProjects />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
