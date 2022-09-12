import React from 'react';
import { BsTrash, BsPencilFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


///Functional component called Row.

export function Row(props) {
    console.log(props);
    const navigate = useNavigate();

    const cursorStyle ={
        cursor: 'pointer'
    };
  

    return (

        <div class='container w-50 mb-5 p-4'>
           <div key={props.index} class="row border  border-5 rounded-3 " style={cursorStyle} >
                <div class="col-md-7 px-3" onClick={() => navigate('/edit/' + props.index)}> 
                    <h1 class="text-start">{props.list.title}</h1>
                    <p  class="text-start">{props.list.note}</p>
                </div>

                <div class='col-md-5 mt-3' style={cursorStyle}>
             
                    <BsTrash   onClick={props.onRowDelete} size={50} style={{marginRight:50}} />
                    <BsPencilFill  onClick={() => navigate('/edit/' + props.index)} size={50} />
                </div>

            </div>


        </div>

    )
;

}

