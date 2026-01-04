import '../modules/components.css'
import Card from '../components/card'
import Searchbar from '../components/searchbar'
export default function Home(){
    
    return(
        <>
            <div style={{ padding:'20px', backgroundColor:'rgba(0, 200, 0, 0.1)', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
                <section style={{margin:'100px'}}>
                    <Searchbar/>
                </section>
                <div style={{display:'flex', flexDirection:'column', backgroundColor:'rgba(0,220,0,1.0)', padding:'100px', borderRadius:'2rem'}}>
                    <section style={{margin:'20px', display:'flex', justifyContent: 'left', alignItems:'left'}}>
                        <h3 style={{fontSize:'2.2rem', backgroundColor:'lightgreen', textAlign:'center', padding:'2rem', borderRadius:'1.5rem', textDecoration:'underline'}}> Trending...</h3>
                    </section>
                    <section style={{display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap:'200px'}}>
                        
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>    
                    </section>
                </div>
            </div>
        </>
    )
}