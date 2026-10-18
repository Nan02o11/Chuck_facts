const button = document.getElementById('button');
const fact = document.getElementById('jokes');
const text = document.createElement('h4');

async function fetchData(){
    const url = "https://api.chucknorris.io/jokes/random";

    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('erreur! Status: ${response.status}');
        }

        const data = await response.json();
        text.textContent = data.value;
        fact.append(text);
        console.log(data.value);
    } catch(error){
        console.error('Fetch error: ', error.message);
    }
}


button.onclick = () => {
    fetchData();
}
