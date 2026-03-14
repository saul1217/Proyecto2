import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "./Footer";

const palabras = [
    "gay", "homosexual", "crazy", "handsome", "chris bumstead", "toji fus", "lloron",
    "party", "nerd", "cool", "trans"];

export const PantallaNombre = () => {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const manejarSubmit = async (e) =>{
        e.preventDefault();
        if (nombre.trim().length === 0) return;

        const shhh = {
            "saul": "chris bumstead",         
            "pedro": "trans",     
            "kikin": "trans",      
            "juan": "trans",
            "leo" : "trans",
            "kaleb" : "trans",
            "kira" :"trans",  
            "chris" : "homosexual",
            "enrique" : "homosexual",
            "jesus enrique" : "homosexual",
            "brandon" : "trans",
            "magio" : "harry pot",
            "bart"  : "bart simpson"      
        };
        const nombreLimpio = nombre.toLowerCase().trim();
        let palabraParaBuscar = "";
        if (shhh[nombreLimpio]) {
            palabraParaBuscar = shhh[nombreLimpio];
        } else {
            palabraParaBuscar = palabras[Math.floor(Math.random() * palabras.length)];
        }

        const url =`https://api.giphy.com/v1/gifs/search?api_key=puoAHOcYjckOvMJ5uPn5AoqrtNEpcREX&q=${palabraParaBuscar}&limit=4`;
       
        try{
            const resp = await fetch(url);
            const {data} = await resp.json();
            const gifData = data.length > 0 ? data : null;

            navigate('resultado', {state: {nombre: nombre, gifAleatorio: gifData}});
        }catch (error){
            console.error("error al buscar el gif", error)
        }
    }
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-violet-800 to-slate-600">
            <h2 className="text-3xl mb-6">Ingresa tu nombre</h2>
            <form onSubmit={manejarSubmit} className="flex flex-col items-center gap-8">
                <input value={nombre} onChange={(e) =>setNombre(e.target.value) } className="bg-white rounded-xl text-black text-center" type="text" placeholder="Ingresa tu nombre"/>
                <button type="submit" className="bg-blue-700 text-white hover:bg-blue-900 rounded-full text-xl p-2 ">Continuar</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}