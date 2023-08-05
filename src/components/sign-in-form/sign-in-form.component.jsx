import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { useState } from 'react';   
import FormInput from '../form-input/form-input.component';

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


    return (
        <div>
            <h2> Already have an Account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email" 
                    name= "email" 
                    required
                    label= 'Email'
                    value={email}
                />
                <FormInput 
                    type= "password" 
                    name='password'
                    required
                    label= 'Password'    
                    // value={Password}
                />
                <Button 
                    type= "submit"
                    buttontype
                > SIGN IN</Button>
                <Button
                    buttonType='google'
                > GOOGLE SIGN IN </Button>
            </form>
        </div>
    )
}

export default SignInForm;