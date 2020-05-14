import * as React from "react";
import {style, classes} from "./Authentication.st.css";

const Authentication = () => (
    <div className={style(classes.root)}>
        <div className={classes.dialog}>
            <h1>Sign in to Call of Blood</h1>
        </div>
    </div>
);

export default Authentication;
