import React,{useEffect} from 'react';

import '../css/print.css'

const Print = (props) => {
    const done=()=>{
        window.print()
    }
    var result=props.data
    // console.log (result)
    var name=result.name
    var dob = result.dob
    var hobby = result.hobby
    var profile=result.profile
    var workXP=result.workXP
    var education=result.education
    // console.log (hobby)
        useEffect(() => {
            document.getElementById("profile").innerHTML=profile
            document.getElementById("Work").innerHTML=workXP
            document.getElementById("education").innerHTML=education
            document.getElementById("hobby").innerHTML=`
            <strong>Hobby</strong> : ${hobby} 
            `
        }, [profile,name,workXP,education,hobby,dob])
    
    return (
        <div className="row printFile m-4 mt-5">
        <p className="text-center text-capitalize" >
            Resume
        </p>
            <div className="col-md-3 Myprof " >
                <div >
                    <p className="MyDetails"> <strong>Name</strong> : {name} </p>
                    <p className="MyDetails"> <strong>Date Of Birth</strong> : {dob} </p>
                    <p className="MyDetails" id="hobby"> </p>
                </div>
            </div>
            <div className="col-md-9">
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
            <button className="btn-success btn noPrint" onClick={done} >Print</button>
        </div>     
    );
    
}

export default Print;
