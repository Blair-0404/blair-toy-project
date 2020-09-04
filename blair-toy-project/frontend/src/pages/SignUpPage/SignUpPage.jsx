import React from 'react';
import './SignUpPage.scss';
import {BsPeopleCircle} from 'react-icons/bs';
import NecessaryContainer from "./NecessaryContainer/NecessaryContainer";
import AddressContainer from "./AddressContainer/AddressContainer";
import AgreeContainer from "./AgreeContainer/AgreeContainer";

function SignUpPage() {
    return (
        <div className="sign-up-page">
            <h1 className="sign-up-title"><BsPeopleCircle/>Sign Up Form</h1>
            <form className="sign-up-form">
                <NecessaryContainer/>
                <AddressContainer/>
                <AgreeContainer/>
                <button type="submit" className="sign-up-btn">가입완료</button>
            </form>
        </div>
    );
}

export default SignUpPage;
