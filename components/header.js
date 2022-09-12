import Storage from '../services/storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';


/// Header that will be displayed across all pages.
export function Header() {

    const cursorStyle ={
        cursor: 'pointer'
    };
 
    const location = useLocation();

    function onNotesClear() {
       
        if (location.pathname === "/"){
            Storage.removeItem('notes',[]);
            window.location.reload();
        }
        else{
            alert("Im sorry , im unable to clear notes from this page");
        }       
        
      }
    function onReturnToHomePage(){
        Storage.removeSessionItem('form');
       
        window.location.href='/';
    }
   
    return (
        <div  class="navbar navbar-light bg-light" >          
            <nav class="container-fluid" style={{height:150, backgroundColor:'#FFFF99'}}>
                <div>
                   <span class="display-2 fst-italic" onClick={onReturnToHomePage}  style={cursorStyle}>NOTEPAD</span>
                </div>
                <div class="d-flex">
                {/* Clear All button to clear the list from storage */}
                 <button type="button" class="btn btn-info btn-lg fs-4 border-secondary border-1" style={{display: location.pathname == "/" ? 'block':'none'}} onClick={onNotesClear}  >Clear All Notes</button>
                </div>
            </nav>
        </div>
    );
}

