import Contact from "./components/Contact"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skill from "./components/skill"

function App() {
  return (
    <>
    <div className="fixed -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e3fae6,transparent)]"></div></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Info />
        <Skill />
        <Projects />
        <Contact />
      </main>

    </>
  )
}

export default App

