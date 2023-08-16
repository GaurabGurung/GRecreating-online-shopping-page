import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import { useState , useEffect} from 'react';   
import FormInput from '../form-input/form-input.component';
import { 
    signInWithRedirect,
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect 
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    email: '',
    password: '',

}

const SignInForm = () => {



    const [formFields, setFormFields] = useState (defaultFormFields);
    const {email, password} = formFields;


    const handleSubmit = async (event) => {
        const response = await event.target;
        console.log(response)
    }

    const handleChange =  (event) => {
        const {name, value} =  event.target;
        setFormFields ({...formFields, [name]: value})

    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        // const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user)
    }


    return (
        <div className = 'sign-in-container'>
            <h2> Already have an Account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit = {handleSubmit}>
                <FormInput 
                    type="email" 
                    name= "email" 

                    label= 'Email'
                    value={email}
                    onChange= {handleChange}
                />
                <FormInput 
                    type= "password" 
                    name='password'

                    label= 'Password'    
                    value={password}
                    onChange= {handleChange}
                />
                <div className='buttons-container '>
                    <Button 
                        type= "submit"
                        buttontype
                    > SIGN IN</Button>
                    <Button
                        type= 'button'
                        buttonType='google' 
                        onClick = {signInWithGoogle}
                    > GOOGLE SIGN IN </Button>

                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;