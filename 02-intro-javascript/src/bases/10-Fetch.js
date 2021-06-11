const apiKey = 'KQ5nbCOYv5ym4oIW79n6VLh9aZOb61D9';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        console.log(img)
        document.body.append(img);
    })
    .catch( console.warn)
