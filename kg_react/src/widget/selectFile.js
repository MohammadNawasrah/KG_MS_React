import React from "react";
import "../page/admin";

function selectFile() {
    // var btn = document.getElementById('add');
    return (
        <div id='upLoadFile' className='w3-model'>
            <div className='w3-model-content'>
                <div className='w3-container'>
                    <span
                        class="w3-button w3-display-topright">&times;
                    </span>
                    <input type='file'>
                    </input>
                </div>
            </div>
        </div>
    );
};
export default selectFile;