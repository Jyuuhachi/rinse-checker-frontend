import {useNavigate} from "react-router-dom"



const ShowName = ({showname, showdate, id, changeShow}) => {

    const navigate = useNavigate();

    return(
        <li className="show">
                <p>{showname}</p>
                <br/>
                <p>{showdate}</p>
                <br/>
                <form onSubmit={e=> {e.preventDefault()
                changeShow(id) 
                navigate("/sets")
                  e.target.reset()}}>
                    <input type="submit" name="selectButton" id={id} value="Select"></input>
                </form>
            </li>
        );
    };
    
    export default ShowName