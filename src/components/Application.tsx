import * as React from "react";
import {Hub, Auth} from "aws-amplify";
import Authentication from "./authentication/Authentication";

const Application = () => {
    return (
        <div>
            <Authentication />
        </div>
    );
};

export default Application;
