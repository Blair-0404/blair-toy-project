import React from 'react';
import './SignUpPage.scss';
import {BsPeopleCircle} from 'react-icons/bs';
import NecessaryContainer from "./NecessaryContainer/NecessaryContainer";
import AddressContainer from "./AddressContainer/AddressContainer";
import AgreeContainer from "./AgreeContainer/AgreeContainer";
import useForm from "./useForm";

function SignUpPage() {
    const {handleSubmit,values,handleChanges} = useForm();


    return (
        <div className="sign-up-page">
            <h1 className="sign-up-title"><BsPeopleCircle/>Sign Up Form</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <NecessaryContainer values={values} handleChanges={handleChanges}/>
                <AddressContainer/>
                <AgreeContainer/>
                <button type="submit" className="sign-up-btn">가입완료</button>
            </form>
        </div>
    );
}

export default SignUpPage;
