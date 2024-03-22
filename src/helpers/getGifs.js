export const getGifs = async (term) => {
    const api = 'sTbpdEXZ6XNtIRvpCXO41eYgNa45vaNj'
    const url = `https://api.giphy.com/v1/gifs/search/?api_key=${api}&q=${term}&limit=12`;

    const response = await fetch(url);
    const { data } = await response.json();

    const newData = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        src: gif.images.downsized_medium
    }))
    return newData;
}