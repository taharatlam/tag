import React from 'react';
import {Handle, Position} from "react-flow-renderer";


const handleStyle = { top:25, right: 0, visibility: "none", zIndex: -100 };

function CenterNode({data}) {
    return (
        <div className="flow-center-node d-flex justify-content-center align-items-center p-3 ">
            <div>
                <p className="m-0  text-white">{data.value}</p>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
        </div>
    );
}

export default CenterNode;
