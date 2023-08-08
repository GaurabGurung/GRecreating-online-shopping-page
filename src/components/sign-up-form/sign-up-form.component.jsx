import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'

const SignUpForm = () => {

    return (
        <div className='sign-up-container'>
            <h2> Don't have an account?</h2>
            <span> Sign up with your email and password </span>
            <form>
                <FormInput 
                    type= "password" 
                    name='password'
                    required
                    label = 'Display Name'
                />
                <FormInput 
                    type= "password" 
                    name='password'
                    required       
                    label= 'Email'
                />
                <FormInput
                    type= "password" 
                    name='password'
                    required
                    label= 'Password'    
                />
                <FormInput 
                    type= "password" 
                    name='password'
                    required                
                    label= 'Confirm Password'
                />

                <Button
                    buttonType={'google'}
                    type=''
                >
                    Sign up
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm;