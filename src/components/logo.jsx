import '../modules/components.css'

export default function Logo({value, style}) {
    return(
        <>
            <h1 className={style}>{value}</h1>
        </>
    )
}