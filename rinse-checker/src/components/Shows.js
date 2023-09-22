//import {useLoaderData} from "react-router-dom"
import React from 'react';
import ShowName from './ShowName'


const Shows = ({changeShow, shows}) => {

return(
    <div className="showlist">
            <ul className="showlist">
            {shows.map(show => <ShowName  key={show.id} changeShow={changeShow} id={show.id} showname={show.name} showdate={show.date}/>
            )}
            </ul>
            <form onSubmit={e=> {e.preventDefault() 
              //newMessage(e.target.message.value)
              e.target.reset()}}>
                <input type="text" name="newShow"></input>
                <input type="submit" value="Add Show"></input>
            </form>
        </div>
    );
};

export default Shows