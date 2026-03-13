import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Palabras = [
    "gay", "homosexual", "crazy", "handsome", "chris bumstead", "toji fus", "lloron",
    "party", "nerd", "cool", "trans"];

export const PantallaNombre = () => {

    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-violet-800 to-slate-600">
            <h2 className="text-3xl mb-6">Ingresa tu nombre</h2>
            <form action="" className="flex flex-col items-center gap-8">
                <input className="bg-white rounded-xl text-black text-center" type="text" placeholder="     Ingresa tu nombre"/>
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 text-3xl pl-5 pr-5 text-white rounded-xl transition-all">Continuar</button>
            </form>
        </div>
        </>
    )
}