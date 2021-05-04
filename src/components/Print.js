import React,{useEffect} from 'react';

import '../css/print.css'

const Print = (props) => {
    var result=props.data
    console.log(props.data)
    var name=result.name
    var profile=result.profile
    var workXP=result.workXP
    var education=result.education
        useEffect(() => {
            document.getElementById("profile").innerHTML=profile
            document.getElementById("Work").innerHTML=workXP
            document.getElementById("education").innerHTML=education
        }, [profile,name,workXP,education])
    
    return (
        
        <div className="row m-4 mt-5">
            <div className="col-md-2" >
                <div className="Myprof">
                {name}
                </div>
            </div>
            <div className="col-md-10">
                <button className=" MyHeading " >Profile</button>
                <div id="profile" className="MyData" >


                </div>
                <button className=" MyHeading " >Education</button>
                <div id="education" className="MyData" >


                </div>
                <button className=" MyHeading " >Work Experience</button>
                <div id="Work" className="MyData" >

                    
                </div>
            </div>
        </div>
        
    );
    
}

export default Print;
