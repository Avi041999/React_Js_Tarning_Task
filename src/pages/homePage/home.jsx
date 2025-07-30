import BlogsCards from "../../components/blogscards/blogscard"
import {data} from "../../assets/data"
import Navbar from "../../components/navComponent/navigation"
import About from "../../components/aboutComponent/about"
import Contact from "../../components/contactComponent/contact"
import Footer from "../../components/footerComponent/footer"


const Home = () => {
    return (
        <>
        <div id="home">

         <Navbar />
         <About />
         <BlogsCards data={data}/>
         <Contact />
         <Footer />
           
        </div>
           
        </>
    )
}

export default Home