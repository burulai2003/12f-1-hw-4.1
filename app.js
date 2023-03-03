const array = document.getElementById('bur')

const getData = async () => {
    const obj = await fetch('https://jsonplaceholder.typicode.com/posts')
    const obje = await obj.json();

    obje.map((el) => {
        array.innerHTML += `<div class = "object"> <p>userId: ${el.userId}</p><p>id:${el.title}${el.body}</p></div>`
    }
    )
}
getData()