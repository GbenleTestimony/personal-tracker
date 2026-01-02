import Button from './button'
export default function Specialbtn({show, hide}){
    return(
        <>
            <Button value={'Show1'} Click={show} />
            <Button value={'Hide2'} Click={hide} /> 
        </>
        
    )
}