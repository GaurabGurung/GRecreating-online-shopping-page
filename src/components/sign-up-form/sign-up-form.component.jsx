import Button from '../button/button.component';
import './sign-up-form.styles.scss'
import { useState } from 'react';
import {  createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = () => {


    const [ formFields , setFormFields ] = useState (defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if(password != confirmPassword) {
    //         alert('Password does not match')
    //     return;  }
        
    //     try {
    //         const user = await createAuthUserWithEmaillAndPassword(email, password);
    //         console.log(user)
    //     } catch (error) {
    //         console.log('error')          
    //     }

    const handleSubmit = async (event)=> {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert ('Password does not match');
            return;
        }

        try {

            const {user} = await createAuthUserWithEmailAndPassword( email, password);
            console.log(user);
            await createUserDocumentFromAuth (user, {displayName})
               }catch(error){
                if(error.code === 'auth/email-already-in-use') {
                    alert ('Email already in use')
                }
                console.log(error)
            }
        };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    };

    return (
        <div className='sign-up-container'>
            <h2> Don't have an account?</h2>
            <span> Sign up with your email and password </span>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={ handleChange }
                    type= "text" 
                    name='displayName'
                    required
                    // label = 'Display Name'
                    value = {displayName}
                />
                <input 
                    type= "email" 
                    name='email'
                    required       
                    // label= 'Email'
                    onChange={ handleChange }
                    value = {email}
                />
                <input
                    type= "password" 
                    name='password'
                    required
                    // label= 'Password' 
                    onChange={ handleChange }  
                    value = {password} 
                />
                <input 
                    type= "password" 
                    name='confirmPassword'
                    required                
                    // label= 'Confirm Password'
                    onChange={ handleChange }
                    value = {confirmPassword}
                />

                < button

                    type= 'submit'
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;