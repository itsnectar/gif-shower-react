

export const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vvX8FQbEeQaH7CzxBKhSSf2LRaxTNd0W&q=${encodeURI(categoria)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
        }
    })
    return gifs;
}