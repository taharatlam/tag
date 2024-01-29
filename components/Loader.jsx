import React from 'react';
import Colors from "../constants/colors";
import {Audio} from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="position-absolute" style={{
            top:"calc(50vh - 40px)",
            right:"calc(50vw - 40px)",
        }} >
            <Audio color={Colors.primaryColor} height={80} width={80} />
        </div>
    );
};

export default Loader;
