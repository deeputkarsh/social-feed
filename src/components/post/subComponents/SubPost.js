import React from 'react';

export default function SubPost ({text,imageUrl,time,images}){
    return (
        <div className="sub-post-container">
            <div className="text-container">{text}</div>
            {imageUrl ? 
                <div className="image-container">
                    <img src={imageUrl} alt={text} title={text} />
                </div>
                : null
            }
        </div>
    );
}