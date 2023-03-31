export async function getData() {
  try{
    const RyM = []
    for (let index = 1; index < 10; index++) {
      const user = await(await fetch("https://rickandmortyapi.com/api/character/"+index)).json();
      RyM.push(user);
    }
    return RyM
  }
  catch(error)
  {
    console.log(error);
  }  
}
