import {useNavigate} from "react-router-dom"



const SetName = ({setname, id, changeSet}) => {

    const navigate = useNavigate();

    return(
        <li className="set">
                <p>{setname}</p>
                <br/>
                <form onSubmit={e=> {e.preventDefault()
                changeSet(id) 
                navigate("/create")
                  e.target.reset()}}>
                    <input type="submit" name="selectButton" id={id} value="Select"></input>
                </form>
            </li>
        );
    };
    
    export default SetName