import {Bars3Icon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useMainContext} from "../contexts/MainContextProvider";
import {useThemeContext} from "../contexts/ThemeContextProvider";
import {useUserContext} from "../contexts/UserContextProvider";
import {MessagesNotification, NavButton, NavProfile, Notifications, Profile} from "./index";
import popover from "./UI/Popover";


const Navbar = () => {
    const {setActiveSidebar, handleSetPopovers, popovers, handleClosePopovers} = useMainContext()
    const {themeColor} = useThemeContext()
    const {firstName, lastName, position, image} = useUserContext()

    const iconClass: string = 'w-6 h-6 hover:scale-125 transition duration-300'

    const handleMenuToggle = () => setActiveSidebar((prev) => !prev)

    return (
        <nav className="fixed md:static w-full bg-white border-b border-stroke-gray z-30">
            <div className="relative flex-between-center p-3 h-20 mx-2">

                <NavButton icon={<Bars3Icon className={iconClass}/>} title="Menu"
                           onClick={handleMenuToggle}/>

                <div className="flex-1 flex flex-row gap-2 mx-6">
                    <MagnifyingGlassIcon className="w-[24px] h-[24px] text-gray"/>
                    <input
                        type="text"
                        className="outline-none w-full"
                        placeholder="Type to search..."
                    />
                </div>

                <div className="flex-center md:gap-3 gap-2">

                    <NavButton icon={<BellIcon className={iconClass}/>} title="Notifications"
                               onClick={() => handleSetPopovers('notifications')} dotColor={themeColor}/>

                    <NavButton icon={<ChatBubbleOvalLeftEllipsisIcon className={iconClass}/>} title="Messages"
                               onClick={() => handleSetPopovers('messages')} dotColor={themeColor} hasNew={true}/>

                    <NavProfile onClick={() => handleSetPopovers('profile')} firstName={firstName} lastName={lastName}
                                position={position} image={image}/>
                </div>


                <Profile onClose={handleClosePopovers} show={popovers.profile}/>
                <Notifications onClose={handleClosePopovers} show={popovers.notifications}/>
                <MessagesNotification onClose={handleClosePopovers} show={popovers.messages}/>
            </div>
        </nav>
    );
};

export default Navbar;
