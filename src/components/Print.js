import React,{useEffect} from 'react';

import '../css/print.css'

const Print = (props) => {
    var result=props.data
    console.log(props.data)
    var name=result.name
    var profile=result.profile
    var workXP=result.workXP
    var education=result.education
    window.onload =()=>{
        document.getElementById("profile").innerHTML=profile
        }
        useEffect(() => {
            document.getElementById("profile").innerHTML=profile
        }, [profile])
    
    return (
        
        <div className="row m-4 mt-5">
            <div className="col-md-4">
                {name}
            </div>
            <div className="col-md-8">
                <button className=" MyHeading " >Profile</button>
                <div id="profile">
                    
                </div>

            </div>
        </div>
        
    );
    
}

export default Print;
