import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { useState } from 'react';   
import FormInput from '../form-input/form-input.component';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName : '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState (defaultFormFields);
    const {email, password} = formFields;


    const handleSubmit = async(event) => {
        const {name} = await event.target.value;

        console.log({name})
    }

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup ();
        const userDocRef = createUserDocumentFromAuth (user);
    }

    return (
        <div className = 'sign-in-container'>
            <h2> Already have an Account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email" 
                    name= "email" 
                    required
                    label= 'Email'
                    // value={email}
                />
                <FormInput 
                    type= "password" 
                    name='password'
                    required
                    label= 'Password'    
                    // value={Password}
                />
                <div className='buttons-container '>
                    <Button 

                        type= "submit"
                        buttontype
                    > SIGN IN</Button>
                    <Button
                        onClick= {logGoogleUser}
                        buttonType='google' 
                    > GOOGLE SIGN IN </Button>
                    <button onClick= {logGoogleUser}> Sign innn now</button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;