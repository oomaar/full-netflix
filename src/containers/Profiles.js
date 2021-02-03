import React from 'react';
import { Header, Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function ProfilesContainer({user, setProfile}) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles onClick={() => setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
            })}>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}
