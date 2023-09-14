import React from 'react';
import {useUserContext} from "../contexts/UserContextProvider";
import {useMainContext} from "../contexts/MainContextProvider";
import {Button, Popover} from "./";
import {useNavigate} from "react-router-dom";


const Profile = () => {
    const {firstName, lastName, image, email, position} = useUserContext()
    const {handleClosePopovers} = useMainContext()
    const navigate = useNavigate()

    const handleGoToSettings = () => {
        navigate('/settings')
        handleClosePopovers()
    }

    return (
        <Popover title="Profile" handleClose={handleClosePopovers}>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center">
                    <img src={image} alt="avatar" className="w-12 h-12 rounded-full"/>
                    <p className="ml-3 text-xl text-dark-black">Hi, {firstName} {lastName}!</p>
                </div>
                <p className="text-sm text-dark-gray">{position}</p>
                <p className="text-sm text-dark-gray">{email}</p>
                <div className="flex flex-col mt-4">
                    <Button text="Go to settings" type="primary" onClick={handleGoToSettings}/>
                </div>
            </div>
        </Popover>
    )
};

export default Profile;
