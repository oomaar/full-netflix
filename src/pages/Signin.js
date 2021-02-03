import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import {FirebaseContext} from "../context/firebase";
import HeaderContainer from '../containers/Header';
import {Form} from "../components";
import FooterContainer from '../containers/Footer';
import * as ROUTES from "../constants/routes";

export default function Signin() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();
        // firebase work here!

        firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            // push to browse page
            history.push(ROUTES.BROWSE);
        })
        .catch(error => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input 
                        placeholder="Email-Address" 
                        value={emailAddress} 
                        onChange={({target}) => setEmailAddress(target.value)} />
                        <Form.Input
                        type="password"
                        autoComplete="off"
                        placeholder="Password" 
                        value={password} 
                        onChange={({target}) => setPassword(target.value)} />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <Form.BlueLink>
                        Learn More.
                    </Form.BlueLink>
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}