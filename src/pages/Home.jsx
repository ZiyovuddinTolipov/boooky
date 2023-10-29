import Navbar from "../components/home/Navbar"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
const Home = () => {
    return (
        <main className="max-w-[1600px] mx-auto">
            <Navbar />
            <Hero />
            <About />
        </main>
    )
}

export default Home