/* eslint-disable react/prop-types */
const BoardGameItem = ( {f,removeBGFromFavorite}) => {
    const { title, genre} = f
    return (
        <>
            <li>
                <span>{title} , genero: {genre}</span>
                <button onClick={()=>removeBGFromFavorite(f)}>✖️</button>
            </li>
        </>
    );
}

export default BoardGameItem;