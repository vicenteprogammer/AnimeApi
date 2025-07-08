const res = document.getElementsByTagName('pre')[0]

const listNaruto= () =>{
  const result = fetch('http://localhost:8000/naruto')
  .then((res) => {return res.json()})
  .then((data) => {
    console.log(data);
    return data;
  })

  return result
}



const btnNaruto = document.getElementById('narutolist');
btnNaruto.addEventListener('click', async (event)=>{
  event.preventDefault();
  const test = await listNaruto();
  res.textContent = `${JSON.stringify(test, undefined, 2)}`;
})


const btnDbz = document.getElementById('dbzlist');