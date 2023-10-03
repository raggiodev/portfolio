import About from "../components/About";

const Home = () => {
  return (
    <main>
      <section className="about">
        <h4>Hi, my name is</h4>
        <h1>Fernando Andres Raggio</h1>
        <h2>Full Stack Developer</h2> {/* ESTOS TEXTOS CAMBIAN */}
        <About />
      </section>
    </main>
  )
}

export default Home;