import { GoogleSignIn } from './GoogleSignIn';
import SignIn from './SignIn';
import SignUp from './SignUp';

export function LoginPage() {
    return (
        <div className='px-[500px] py-40'>
            <h1>Login Page</h1>
            <SignIn />
            <GoogleSignIn />
            <SignUp />
        </div>
    );
}