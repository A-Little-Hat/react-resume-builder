import React, { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../css/resume.css'
import '../css/headline.css'

const Resume = (props) => {
    const print = (e) => {
        e.preventDefault();
        var first_name = document.getElementById("first").value
        var middle_name = document.getElementById("middle").value
        var last_name = document.getElementById("last").value
        var dob = document.getElementById("dob").value
        var name = first_name + " " + middle_name + " " + last_name
        if (name && profile && workXP && education && dob && hobby) {
            const details = { name, profile, workXP, education, dob, hobby }
            props.setData(details)
            props.setIsPrint(true)

        }
        else {
            alert("please fill all the fields")
        }
    }
    const [hobby, setHobby] = useState("My Hobby")
    const [profile, setprofile] = useState("");
    const [workXP, setWorkXP] = useState("");
    const [education, setEducation] = useState("");
    return (
        <div className="container-flude m-2 text-center draw-border p-5" >
            <p>
                <header>
                    <div className="title">
                        <h1 className="headline">Resume Builder</h1>
                    </div>
                </header>
            </p>
            <form className="form-control">
                <label className="draw-border Mybtn my-2 mx-5" htmlFor="name">Name</label>
                <div className="input-group">
                    <span className="input-group-text">Name</span>
                    <input type="text" aria-label="First name" id="first" required className="form-control" />
                    <input type="text" aria-label="Middle name" id="middle" className="form-control" />
                    <input type="text" aria-label="Last name" id="last" required className="form-control" />
                </div>
                <label className="draw-border Mybtn my-2 mx-5" htmlFor="dateOfBirth">Date of Birth</label>
                <div >
                <input type="date"  id="dob" />
                </div>
                <label className="draw-border Mybtn my-2 mx-5" htmlFor="Hobby">Hobby</label>
                <div >
                <CKEditor
                    required
                    editor={ClassicEditor}
                    data="<p>Write about your hobby</p>"
                    onReady={editor => { }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setHobby(data)
                    }}
                    onBlur={(event, editor) => { }}
                    onFocus={(event, editor) => { }}
                />
                </div>
                <label className="draw-border Mybtn my-2 mx-5" htmlFor="profile">Profile</label>
                <CKEditor
                    required
                    editor={ClassicEditor}
                    data="<p>Write about your Profile</p>"
                    onReady={editor => { }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setprofile(data)
                    }}
                    onBlur={(event, editor) => { }}
                    onFocus={(event, editor) => { }}
                />
                <label className="draw-border my-2 Mybtn mx-5" htmlFor="profile">Work Experience</label>
                <CKEditor
                    required
                    editor={ClassicEditor}
                    data="<p>Write about your Work Experience</p>"
                    onReady={editor => { }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setWorkXP(data)
                    }}
                    onBlur={(event, editor) => { }}
                    onFocus={(event, editor) => { }}
                />
                <label className="draw-border my-2 Mybtn mx-5" htmlFor="profile">Education</label>
                <CKEditor
                    required
                    editor={ClassicEditor}
                    data="<p>Write about your Education</p>"
                    onReady={editor => { }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setEducation(data)
                    }}
                    onBlur={(event, editor) => { }}
                    onFocus={(event, editor) => { }}
                />
                <button className="btnPrint draw-border" onClick={print} type="submit">Preview</button>
            </form>
        </div>
    );
}

export default Resume;