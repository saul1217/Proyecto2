import { useNavigate } from "react-router-dom"

export const PantallaInicio = () =>{
    const navigate = useNavigate();

    return(
        <>
        <div>
            <h1>Descubre tu gif</h1>
            <button onClick={() => navigate('nombre')}>
                Descubre el gif que te define segun tu nombre
            </button>
        </div>
        </>
    )
}