const res = document.getElementsByTagName('p')[1]
const img = document.getElementsByTagName('img')[0]

img.hidden = true
const listNaruto = () => {
  const result = fetch('http://localhost:8000/naruto')
    .then((res) => { return res.json() })
    .then((data) => {
      console.log(data);
      return data;
    })

  return result
}

const listDbz = () => {
  const result = fetch('http://localhost:8000/dbz')
    .then((res) => res.json())
    .then((data) => data)

  return result
}





//Mostrar os personagens de naruto.
const btnNaruto = document.getElementById('narutolist');
btnNaruto.addEventListener('click', async (event) => {
  event.preventDefault();
  const test = await listNaruto();
  res.innerHTML = ''
  img.hidden = false
  let i = 0
  function nextPersonNaruto() {
    btnNext.hidden = false;
    i += 1
    if (i > test.length - 2) {
      btnNext.hidden = true
    }

    res.innerHTML = '';

    res.innerHTML += `Nome: ${test[i].nome}<br>`
    res.innerHTML += `Nivel: ${test[i].nivel}<br>`
    res.innerHTML += `Habilidade: ${test[i].poder}<br>`
    img.src = test[i].image
  }
  const btnNext = document.getElementById('next');
  btnNext.addEventListener('click', nextPersonNaruto);
  btnNext.hidden = false
  res.innerHTML += `Nome: ${test[i].nome}<br>`
  res.innerHTML += `Nivel: ${test[i].nivel}<br>`
  res.innerHTML += `Habilidade: ${test[i].poder}<br>`
  img.src = test[i].image



})


const btnDbz = document.getElementById('dbzlist');
btnDbz.addEventListener('click', async (event) => {
  event.preventDefault();
  const result = await listDbz();
  res.innerHTML = ''
  img.hidden = false
  let i = 0
  function nextPersonDbz() {
    btnNext.hidden = false
    i += 1
    if (i > result.length - 2) {
      btnNext.hidden = true
    }
    res.innerHTML = '';

    res.innerHTML += `Nome: ${result[i].nome}<br>`
    res.innerHTML += `Nivel: ${result[i].nivel}<br>`
    res.innerHTML += `Habilidade: ${result[i].poder}<br>`
    img.src = result[i].image
  }
  const btnNext = document.getElementById('next');
  btnNext.addEventListener('click', nextPersonDbz);
  btnNext.hidden = false
  res.innerHTML += `Nome: ${result[i].nome}<br>`
  res.innerHTML += `Nivel: ${result[i].nivel}<br>`
  res.innerHTML += `Habilidade: ${result[i].poder}<br>`
  img.src = result[i].image
})


async function pesquisar() {
  const search = document.getElementById('search');
  const nameCharacter = search.value
  const result = await fetch(`http://localhost:8000/dbz/${nameCharacter}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      return data[0]
    })

  res.innerHTML = '';

  res.innerHTML += `Nome: ${result.nome}<br>`
  res.innerHTML += `Nivel: ${result.nivel}<br>`
  res.innerHTML += `Habilidade: ${result.poder}<br>`
  img.src = result.image
}



const btnP = document.getElementById('pesquisar');
btnP.addEventListener('click', async (event)=>{
  event.preventDefault()
  await pesquisar();
})