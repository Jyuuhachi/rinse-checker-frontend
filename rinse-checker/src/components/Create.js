//import {useLoaderData} from "react-router-dom"
import React from 'react'
import Track from './Track'


const Create = ({set, sets, user, show, setList, deleteID, setDeleteID, tracks, changeSetList, setCheck, check}) => {
    let renderList = {"dj": user, "set_name": set, "show": show}
    console.log("initial renderList")
    console.log(renderList)
    console.log("checking a random sets dj_id")
    console.log(sets[2].dj_id)
    let trackList = []
    let newList
    for(let i=0;i < sets.length;i++){
        console.log(sets[i].dj_id)
        console.log(user)
        if(sets[i].dj_id === user && sets[i].set_name_id === set && sets[i].show_id === show){
        console.log("found a match in sets for our DJ show and setname")
        for(let n=0; n < tracks.length; n++){
            if(sets[i].track_id === tracks[n].id) {
                let tempTrack = tracks[n]
                tempTrack.delete_flag = 0
                tempTrack.total_plays = 1
                tempTrack.user_plays = 1
                tempTrack.show_plays = 1
                tempTrack.add_to = 0
                console.log(tempTrack)
                trackList.push(tempTrack)
            }
        }
    }
    }
    renderList.track_list = trackList
    function changeCheck() {
        setCheck(check + 1)
    }

    function deleteTrack(id) {
        console.log("printing id")
        console.log(id)
        for(let i=0; i < renderList.track_list.length; i++){
            if(renderList.track_list[i].id === id) {
            console.log("we matched a delete button to a track")
            renderList.track_list[i].delete_flag = 1
            trackList[i].delete_flag = 1
            break
            }
        }
        let temp = renderList
        fetch("http://localhost:5555/addtrack", {
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(temp)
          })
          .then(res=>res.json())
          .then(data=> {renderList=data
            console.log("logging data from deletetrack")
        console.log(data)
        console.log("logging renderList after assigning data to it")
        console.log(renderList)
        changeSetList(data)})
        changeCheck()
    }

    function addNewTrack(artist, title) {
        trackList.push({'artist': artist, "name": title, "delete_flag": 0, "add_to": 1})
        console.log("printing trackList")
        console.log(trackList)
        renderList.track_list = trackList
        fetch("http://localhost:5555/addtrack", {
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(renderList)
          })
          .then(res=>res.json())
          .then(data=> {renderList=data
            console.log("logging data from addnewtrack")
        console.log(data)
        console.log("logging renderList after assigning data to it")
        console.log(renderList)
        changeSetList(data)})
        changeCheck()
    }
    function renderTracks() {
        console.log("renderTracks is triggering")
        try {
        if(setList.track_list.length !== 0) {
            console.log("using setList to map")
            console.log(setList)
            return(
                <div className="create">
                        <form onSubmit={e=> {e.preventDefault()
                          addNewTrack(e.target.elements.artist.value, e.target.elements.title.value)
                          e.target.reset()}}>
                            <input type="text" name="title" placeholder="Track Title"></input>
                            <input type="text" name="artist" placeholder="Track Artist"></input>
                            <input type="submit" name="selectButton" value="Add Track"></input>
                        </form>
                        <ul>
                        {setList.map(track => <Track  key={track.id} id={track.id} title={track.name} artist={track.artist} deleteTrack={deleteTrack} deleteID={setDeleteID}/>)}
                        </ul>
                    </div>
                );
                        }
        else if(renderList.track_list.length !== 0) {
            console.log("using trackList to map")
            console.log(setList.track_list)
            console.log(trackList)
            return(
                <div className="create">
                        <form onSubmit={e=> {e.preventDefault()
                            addNewTrack(e.target.elements.artist.value, e.target.elements.title.value)
                            console.log(e.target.elements.title.value)
                            console.log(e.target.elements.artist.value)
                            e.target.reset()}}>
                            <input type="text" name="title" placeholder="Track Title"></input>
                            <input type="text" name="artist" placeholder="Track Artist"></input>
                            <input type="submit" name="selectButton" value="Add Track"></input>
                        </form>
                        <ul>
                        {newList.track_list.map(track => <Track  key={track.id} id={track.id} title={track.name} artist={track.artist} deleteTrack={deleteTrack} deleteID={setDeleteID}/>)}
                        </ul>
                    </div>
                );
        }
        else {
        return(
            <div className="create">
                <p>Please return to home and login properly</p>
        </div>
    );
    }
}
catch(err) {
    console.log("catch triggering, checking the renderList")
    console.log(renderList)
    if(renderList.track_list.length !== 0) {
        console.log("using trackList to map")
        console.log(renderList.track_list)
        console.log(trackList)
        return(
            <div className="create">
                    <form onSubmit={e=> {e.preventDefault()
                        addNewTrack(e.target.elements.artist.value, e.target.elements.title.value)
                        console.log(e.target.elements.title.value)
                        console.log(e.target.elements.artist.value)
                        e.target.reset()}}>
                        <input type="text" name="title" placeholder="Track Title"></input>
                        <input type="text" name="artist" placeholder="Track Artist"></input>
                        <input type="submit" name="selectButton" value="Add Track"></input>
                    </form>
                    <ul>
                    {renderList.track_list.map(track => <Track  id={track.id} title={track.name} artist={track.artist} deleteTrack={deleteTrack} deleteID={setDeleteID}/>)}
                    </ul>
                </div>
            );
    }
    else {
    return(
        <div className="create">
            <p>Please return to home and login properly</p>
    </div>
);
}
};

   }
    console.log(renderList)
    console.log(renderList.track_list)
    console.log(setList)
    //changeCheck()
    try {
        if(setList.track_list.length !== 0)
        newList = setList
        console.log(newList)
    }
    catch (err) {
        newList = renderList
        console.log(newList)
    }
    //updateRenderList(setList)

    if(renderList.track_list.length !== 0 && check !== 0) {
        console.log(setList.track_list)
        console.log(renderList.track_list)
        return(
            <div className="create">
                    <form onSubmit={e=> {e.preventDefault()
                        addNewTrack(e.target.elements.artist.value, e.target.elements.title.value)
                        console.log(e.target.elements.title.value)
                        console.log(e.target.elements.artist.value)
                        e.target.reset()}}>
                        <input type="text" name="title" placeholder="Track Title"></input>
                        <input type="text" name="artist" placeholder="Track Artist"></input>
                        <input type="submit" name="selectButton" value="Add Track"></input>
                    </form>
                    <ul>
                        {console.log(newList)}
                    {newList.track_list.map(track => <Track  key={track.id} id={track.id} title={track.name} artist={track.artist} deleteTrack={deleteTrack} deleteID={setDeleteID} userplays={track.user_plays} showplays={track.show_plays} totalplays={track.total_plays}/>)}
                    </ul>
                </div>
            );
    }
    else {
    return(
        <div className="create">
            <p>Please return to home and login properly</p>
    </div>
);
}
}
    export default Create