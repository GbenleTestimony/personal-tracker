import '../modules/components.css'
import Button from './button'

export default function Searchbar() {
    return(
        <>
            <div className='searchbar'>
                <input type="text" placeholder='Search...' className='textInput' />
                <Button value={'Search'}/>
            </div>
        </>
    )
}