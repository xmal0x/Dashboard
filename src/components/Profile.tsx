import {useUserContext} from "../contexts/UserContextProvider";
import {Button, Popover} from "./";
import {useNavigate} from "react-router-dom";
import {NavPopupProps} from "../types";

const Profile = ({onClose, show}: NavPopupProps) => {
    const {firstName, lastName, image, email, position} = useUserContext()
    const navigate = useNavigate()

    const handleGoToSettings = () => {
        navigate('/settings')
        onClose()
    }

    return (
        <Popover show={show} title="Profile" handleClose={onClose}>
            <div className="flex flex-col gap-2 p-4">
                <div className="flex-center">
                    <img src={image} alt="avatar" className="w-12 h-12 rounded-full"/>
                    <p className="ml-3 text-xl text-dark-black">Hi, {firstName} {lastName}!</p>
                </div>
                <p className="text-sm text-dark-gray">{position}</p>
                <p className="text-sm text-dark-gray">{email}</p>
                <div className="flex flex-col mt-4">
                    <Button text="Go to settings" btnType="primary" onClick={handleGoToSettings}/>
                </div>
            </div>
        </Popover>
    )
};

export default Profile;
