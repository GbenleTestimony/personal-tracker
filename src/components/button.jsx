import '../modules/components.css'

export default function Button({value, style, Click}) {
    
    return(
        <>
            <button className={style} onClick={Click}>{value}</button>
        </>
    )
}