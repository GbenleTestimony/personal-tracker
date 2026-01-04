import Button from "./button";
import '../modules/components.css'


export default function NavHeader({home, about, friends, profile, homestyle, aboutstyle, friendsstyle, profilestyle}) {
    return(
        <>
            <nav className="nav-header">
                <Button value={'Home'} Click={home} style={homestyle}/>
                <Button value={'About'} Click={about} style={aboutstyle}/>
                <Button value={'Contact'} Click={friends} style={friendsstyle}/>
                <Button value={'Projects'} Click={profile} style={profilestyle}/>
            </nav>
        </>
    )
}
