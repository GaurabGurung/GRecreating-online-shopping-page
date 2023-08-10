import Button from '../button/button.component';
import './sign-up-form.styles.scss'
import { useState } from 'react';
import {  createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';


const SignUpForm = () => {

    const defaultFormFields = {
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    }


    const [ formFields , setFormFields ] = useState (defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if(password != confirmPassword) {
    //         alert('Password does not match')
    //     return;  }
        
    //     try {
    //         const response = await createAuthUserWithEmaillAndPassword(email, password);
    //         console.log(response)
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

            const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log(response)
        }catch(error){
            console.log('error')
        }
    };
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})

    }

    return (
        <div className='sign-up-container'>
            <h2> Don't have an account?</h2>
            <span> Sign up with your email and password </span>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={ changeHandler }
                    type= "text" 
                    name='displayName'
                    required
                    label = 'Display Name'
                    value = {displayName}
                />
                <input 
                    type= "email" 
                    name='password'
                    required       
                    label= 'Email'
                    onChange={ changeHandler }
                />
                <input
                    type= "password" 
                    name='password'
                    required
                    label= 'Password' 
                    onChange={ changeHandler }   
                />
                <input 
                    type= "password" 
                    name='confirmPassword'
                    required                
                    label= 'Confirm Password'
                    onChange={ changeHandler }
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