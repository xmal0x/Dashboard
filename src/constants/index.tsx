import {ChatBubbleLeftEllipsisIcon, Squares2X2Icon, UserIcon} from "@heroicons/react/24/outline";
import {Message} from "../types";


export const sideBarItems = [
    {
        title: 'Dashboard',
        icon: <Squares2X2Icon/>,
        links: [
            {
                title: 'eCommerce',
                link: 'ecommerce',
            },
            {
                title: 'Analytics',
                link: 'analytics',
            },
            {
                title: 'Marketing',
                link: 'marketing',
            }
        ]
    },
    {
        title: 'Profile',
        icon: <UserIcon/>,
        links: [
            {
                title: 'Settings',
                link: 'settings',
            },
        ]
    },
    {
        title: 'Support',
        icon: <ChatBubbleLeftEllipsisIcon/>,
        links: [
            {
                title: 'Messages',
                link: 'messages',
            },
            {
                title: 'Inbox',
                link: 'inbox',
            },
        ]
    },
]

export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        name: 'orange-theme',
        color: '#FB9678',
    },
]

export const notifications = [
    {
        text: 'You have a new message. You always can check new messages in Menu - Support - Messages. Have a nice day!',
        date: '12 May, 2025'
    },
    {
        text: 'Check your calendar for new events. You always can check new events in Menu - Work - Calendar. Have a nice day!',
        date: '24 Feb, 2025'
    },
    {
        text: 'Please update your password. You always can update your password in Menu - Profile - Settings. Have a nice day!',
        date: '04 Jan, 2025'
    }
]

export const messages: Message[] = [
    {
        from: 'John Willis',
        message: 'Hi this is John! How are you? Can you answer me about your plans?',
        date: '11 May, 2025'
    },
    {
        from: 'Bruce Holland',
        message: 'I\'m waiting for confirmation from you regarding the latest transaction.',
        date: '28 Feb, 2025'
    }
]
