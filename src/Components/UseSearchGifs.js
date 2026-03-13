import { useState } from "react";
export const UseSearchGifs = () =>{


  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);
        
        
  const onChange = (evento) => {
  const valor = evento.target.value;
  setValorInput(valor);
  }
         
  const getGifs = async (query) => {
  const url =   `https://api.giphy.com/v1/gifs/search?api_key=puoAHOcYjckOvMJ5uPn5AoqrtNEpcREX&q=${query}`;
  const respone = await fetch(url);
  const data = await respone.json();
  return data.data;
  }
        
  const onSubmit = async (evento) => {
  console.log("sssssss");
  evento.preventDefault();
  const gifs = await getGifs(valorInput);
  setGifs(gifs);
  }

  return{
    valorInput,
    onChange,
    onSubmit,
    gifs
  }
}