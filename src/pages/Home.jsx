import About from "../components/About";
import Header from "../components/Header";
import Section from "../layouts/Section";

const Home = () => {
  return (
    <div className="body">
      <Header />
      <main>
        <Section>
          <About />
        </Section>
      </main>
    </div>
  )
}

export default Home;