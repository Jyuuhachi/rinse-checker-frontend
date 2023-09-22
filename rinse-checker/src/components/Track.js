



const Track = ({title, id, artist, deleteTrack, deleteID, showplays, userplays, totalplays}) => {


    return(
        <li className="set">
                <p>Title: {title}</p>
                <br/>
                <p>Artist: {artist}</p>
                <p>Total: {totalplays} User: {userplays} Show: {showplays}</p>
                <button type="button" onClick={() => {deleteTrack(id)
                console.log("it's the buttons")
                }}>delete</button>
            </li>
        );
    };
    
    export default Track