import React from 'react';
import {Handle, Position} from "react-flow-renderer";


const handleStyle = { top:50, right: 0, visibility: "none", zIndex: -100 };

function SideNode({data}) {
    return (
        <div className="flow-side-node d-flex justify-content-center align-items-center p-3 ">
            <div>
                <p className="m-0 text-white text-center " style={{fontSize:13}} >{data.value}</p>
            </div>
            <Handle type="target" position={Position.Bottom} id="a" style={handleStyle} />
        </div>
    );
}

export default SideNode;
