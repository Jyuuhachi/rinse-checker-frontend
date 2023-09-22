import React from 'react';
import {useNavigate} from "react-router-dom"
import SetName from './SetName'


const Sets = ({changeSet, sets, show, setNames, user}) => {

    const navigate = useNavigate();
    let maplist = []
    for(let i=0; i < setNames.length; i++) {
        let addto = 0
        for(let n=0; n < sets.length; n++){
            console.log(user)
            if (sets[n].set_name_id === setNames[i].id && sets[n].show_id === show && sets[n].dj_id === user){
                addto++
            }
        }
        if(addto > 0){
        maplist.push(setNames[i])
        }
    }

return(
    <div className="setlist">
            <ul className="setlist">
            {maplist.map(set => <SetName  key={set.id} changeSet={changeSet} id={set.id} setname={set.name}/>)}
            </ul>
            <form onSubmit={e=> {e.preventDefault() 
              navigate("/create")
              e.target.reset()}}>
                <input type="text" name="newSet"></input>
                <input type="submit" value="Add Set"></input>
            </form>
        </div>
    );
};

export default Sets