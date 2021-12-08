export const ObtGif = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=Eav0Of2J4oolgnNip2pPbVrMOpphDCBv`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}