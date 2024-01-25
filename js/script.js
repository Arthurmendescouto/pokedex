const pokemonName=document.querySelector('.pokemon__name');
const pokemonNumber=document.querySelector('.pokemon__number');
const pokemonImage=document.querySelector('.pokemon__image');


const form=document.querySelector('.form');
const input=document.querySelector('.input__search');
const buttonprev=document.querySelector('.btn-prev')
buttonnext=document.querySelector('.btn-next')

let ini=1;

const fetchPokemon= async(pokemon)=>{
  const APIResponse=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if(APIResponse.status==200){const data=await APIResponse.json();
  return data;}

  }
  

  const renderPokemon=async(pokemon)=>{
pokemonName.innerHTML='Loading...';
pokemonNumber.innerHTML='';
  const data= await fetchPokemon(pokemon);
  if(data){pokemonName.innerHTML=data.name;
    pokemonNumber.innerHTML=data.id;
  pokemonImage.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  input.value='';
   ini=data.id
}else{
    pokemonName.innerHTML='Not found :C';
    pokemonNumber.innerHTML='';
  }
  
  }

form.addEventListener('submit',(Event)=>{
  (Event).preventDefault();
  renderPokemon(input.value.toLowerCase());
});
buttonprev.addEventListener('click',()=>{
  
})
buttonnext.addEventListener('click',()=>{
  ini+=1;
  renderPokemon(ini)
})
buttonprev.addEventListener('click',()=>{if(ini>1)ini-=1;
  renderPokemon(ini);
  
}
)

renderPokemon(ini)

        

           
 