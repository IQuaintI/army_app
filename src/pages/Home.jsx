import '../styles/Home.css'
import AccordionMenu from '../components/Accordion'

function Header() {
    return (
        <div className="header">
            <h1>Army WebStudy</h1>
            <h2>A (Semi) Complete Encyclopedia of Army Trivia</h2>
        </div>
    )
}

function Home() {
    return (
        <>
        <Header />
        <AccordionMenu /> 
        </>
    )
    }

export default Home