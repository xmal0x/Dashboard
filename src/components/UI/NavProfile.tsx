import {NavProfileProps} from "../../types";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

const NavProfile = ({onClick, image, position, firstName, lastName}: NavProfileProps) => {
    return (
        <div className="flex-center md:ml-5 ml-1 cursor-pointer gap-3"
             onClick={onClick}>
            <div className="flex-col md:flex hidden">
                <p className="text-sm text-dark-black whitespace-nowrap">{firstName} {lastName}</p>
                <p className="text-xs text-gray">{position}</p>
            </div>
            <img
                src={image}
                className="object-contain w-12 h-12 rounded-full"
                alt="avatar"
            />
            <ChevronDownIcon className="w-4 h-4 text-dark-gray"/>
        </div>
    )
}

export default NavProfile
