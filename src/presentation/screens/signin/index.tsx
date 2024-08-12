import { useSignInViewModel } from "./signin.model";
import { SigninView } from "./signin.view";

export function Signin() {
    const signModel = useSignInViewModel();

    return <SigninView {...signModel}/>
}