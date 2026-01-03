import Button from './button'
import Logo from './logo'
import '../modules/components.css'

export default function WelcomeHeader({show}) {

    return(
        <>
            <div className='header'>
                <Logo value={'logo'} style={'logo'}/>
                <section className='header-buttons' >
                    <Button value={'Sign In'} style={'button'} Click={show}/>
                    <Button value={'Sign Up'} style={'secbutton'}/>
                </section>
            </div>
        </>
    )
}