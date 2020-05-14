import "normalize.css";
import "./style.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Amplify, Auth} from "aws-amplify";
import awsExports from "./aws-exports";

import Application from "./components/Application";

Amplify.configure({
    ...awsExports,
    Auth: {
        region: "eu-central-1",
        userPoolId: "eu-central-1_sLqI8DYbq",
        userPoolWebClientId: "787smugq96l838teiok0tdqpmu",
        oauth: {
            domain: "callofblood.auth.eu-central-1.amazoncognito.com",
            scope: ["openid", "profile"],
            redirectSignIn: "http://localhost:8080",
            redirectSignOut: "http://localhost:8080",
            responseType: "code",
        }
    }
});

ReactDOM.render(
    <Application />,
    document.getElementById("application"),
);
