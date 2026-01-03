import Button from './button'
import Logo from './logo'
import '../modules/components.css'
import NavHeader from './navigation'

export default function Userheader({hide, home, about, friends, profile, homestyle, aboutstyle, friendsstyle, profilestyle}) {

    return(
        <>
            <div className='header'>
                <Logo value={'logo'} style={'logo'}/>
                <NavHeader home={home} about={about} friends={friends} profile={profile} homestyle={homestyle} aboutstyle={aboutstyle} friendsstyle={friendsstyle} profilestyle={profilestyle}/>
                <section className='header-buttons' >
                    <Button value={'Logout'} style={'button'} Click={hide}/>
                    {/* <Button value={'Sign Up'} style={'secbutton'}/> */}
                </section>
            </div>
        </>
    )
}