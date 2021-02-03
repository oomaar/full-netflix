import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/Loading";

export default function Loading({src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = () => <ReleaseBody />;