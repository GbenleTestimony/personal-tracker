import Userheader from "../components/userheader";
import Home from "./home";
import About from "./about"
import Contact from "./contact"
import Projects from "./projects"
import { useState } from "react";



export default function UserPage({hide}) {

const [onHome, setOnHome]=useState(true);
const [onAbout, setOnAbout]=useState(false);
const [onContact, setOnContact]=useState(false);
const [onProjects, setOnProjects]= useState(false);
const [homestyle, setHomeStyle]= useState('on');
const [aboutstyle, setAboutStyle]= useState('normal');
const [contactstyle, setContactStyle]= useState('normal');
const [projectstyle, setProjectStyle]= useState('normal');


    function home () {
        console.log('hi')
        setOnHome(true)
        setHomeStyle('on')
        setOnAbout(false)
        setAboutStyle('normal')
        setOnContact(false)
        setContactStyle('normal')
        setOnProjects(false)
        setProjectStyle('normal')
    }
    function about() {
        console.log('hi')
        setOnAbout(true)
        setAboutStyle('on')
        setOnHome(false)
        setHomeStyle('normal')
        setOnContact(false)
        setContactStyle('normal')
        setOnProjects(false)
        setProjectStyle('normal')
    }
    function contact() {
        console.log('hi')
        setOnContact(true)
        setContactStyle('on')
        setOnAbout(false)
        setAboutStyle('normal')
        setOnHome(false)
        setHomeStyle('normal')
        setOnProjects(false)
        setProjectStyle('normal')
    }
    const projects=()=>{
        console.log('hi')
        setOnProjects(true)
        setProjectStyle('on')
        setOnContact(false)
        setContactStyle('normal')
        setOnAbout(false)
        setAboutStyle('normal')
        setOnHome(false)
        setHomeStyle('normal')
    }
    return(
        <>
            <Userheader hide={hide} home={home} about={about} friends={contact} profile={projects} homestyle={homestyle} aboutstyle={aboutstyle} friendsstyle={contactstyle} profilestyle={projectstyle}/>
            {onHome && <Home/>}
            {onAbout && <About/>}
            {onContact && <Contact/>}
            {onProjects && <Projects/>}
            
        </>
    )
}