import React from 'react';
export default function UserProfileIcon ({imageUrl, name}){
    const defaultImage = "https://s3-ap-southeast-1.amazonaws.com/babychakraserviceproviders/users/default.png";
    const iconStyle = {
        backgroundImage : `url('${imageUrl || defaultImage}')`
    }
    return (
        <div className="user-profile-wrapper">
            <div className="user-profile-icon" style={iconStyle} />
        </div>
    );
}