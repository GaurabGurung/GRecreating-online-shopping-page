import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { useState } from 'react';   

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
                <input 
                    // type="email" 
                    name= "email" 
                    required
                    label= 'Email'
                    // value={email}
                />
                {/* <input 
                    type= "password" 
                    name='password'
                    required
                    label= 'Password'    
                    // value={Password}
                /> */}
                <Button 
                    type= "submit"
                > SIGN IN</Button>
                <Button> GOOGLE SIGN IN </Button>
            </form>
        </div>
    )
}

export default SignInForm;