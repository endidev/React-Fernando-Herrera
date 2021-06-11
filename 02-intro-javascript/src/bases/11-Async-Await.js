 


const getImagen = async () => {


    try {
        const apiKey = 'KQ5nbCOYv5ym4oIW79n6VLh9aZOb61D9';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        console.log(url)
        console.log(img)
        document.body.append(img);
        
    } catch (error) {
        //manejo del error
        console.error(error)
    }


}

getImagen();

