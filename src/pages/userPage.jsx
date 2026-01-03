import Userheader from "../components/userheader";
import Home from "./home";
import About from "./about"
import Friends from "./friends"
import Profile from "./profile"
import { useState } from "react";



export default function UserPage({hide}) {

const [onHome, setOnHome]=useState(true);
const [onAbout, setOnAbout]=useState(false);
const [onFriends, setOnFriends]=useState(false);
const [onProfile, setOnProfile]= useState(false);
const [homestyle, setHomeStyle]= useState('on');
const [aboutstyle, setAboutStyle]= useState('normal');
const [friendsstyle, setFriendsstyle]= useState('normal');
const [profilestyle, setProfilestyle]= useState('normal');


    function home () {
        console.log('hi')
        setOnHome(true)
        setHomeStyle('on')
        setOnAbout(false)
        setAboutStyle('normal')
        setOnFriends(false)
        setFriendsstyle('normal')
        setOnProfile(false)
        setProfilestyle('normal')
    }
    function about() {
        console.log('hi')
        setOnAbout(true)
        setAboutStyle('on')
        setOnHome(false)
        setHomeStyle('normal')
        setOnFriends(false)
        setFriendsstyle('normal')
        setOnProfile(false)
        setProfilestyle('normal')
    }
    function friends() {
        console.log('hi')
        setOnFriends(true)
        setFriendsstyle('on')
        setOnAbout(false)
        setAboutStyle('normal')
        setOnHome(false)
        setHomeStyle('normal')
        setOnProfile(false)
        setProfilestyle('normal')
    }
    const profile=()=>{
        console.log('hi')
        setOnProfile(true)
        setProfilestyle('on')
        setOnFriends(false)
        setFriendsstyle('normal')
        setOnAbout(false)
        setAboutStyle('normal')
        setOnHome(false)
        setHomeStyle('normal')
    }
    return(
        <>
            <Userheader hide={hide} home={home} about={about} friends={friends} profile={profile} homestyle={homestyle} aboutstyle={aboutstyle} friendsstyle={friendsstyle} profilestyle={profilestyle}/>
            {onHome && <Home/>}
            {onAbout && <About/>}
            {onFriends && <Friends/>}
            {onProfile && <Profile/>}
            
        </>
    )
}