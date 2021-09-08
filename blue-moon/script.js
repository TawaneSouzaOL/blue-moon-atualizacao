function searchAPOD() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=0gm7OxAkw77L4t8GOEjt9J3uzaDtYlaKuDwqFghJ').then(res => res.json())
    .then(json =>{

        // console.log(json);
        var div = document.createElement('div')

        var image = document.createElement('img')
        image.setAttribute('id', 'img-id-name')
        image.src = json.url
        div.append(image)

        var title = document.createElement('p')
        title.innerHTML = '<br>' + json.title + '<br>' + json.date
        title.style.fontWeight = 'bolder'
        div.append(title)

        var info = document.createElement('p')
        info.innerHTML = '<br>' + json.explanation
        div.append(info)

        document.querySelector('.infos').append(div)
    })
}

searchAPOD()