import { useSignUpViewModel } from "./signup.model";
import { SignUpView } from "./signup.view";

export function Signup() {
    const singUpModel = useSignUpViewModel();

    return <SignUpView {...singUpModel}/>
}