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
        id: 1,
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        id: 2,
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        id: 3,
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        id: 4,
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        id: 5,
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        id: 6,
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

export const eCommerceData = {
    summaryData: [
        {
            id: 1,
            title: 'Unique Visitors',
            value: '18.6K',
            direction: 'up',
            diff: '18%'
        },
        {
            id: 2,
            title: 'Total Pageviews',
            value: '55.9K',
            direction: 'up',
            diff: '25%'
        },
        {
            id: 3,
            title: 'Bounce Rate',
            value: '54%',
            direction: 'down',
            diff: '7%'
        },
        {
            id: 4,
            title: 'Visit Duration',
            value: '2m 56s',
            direction: 'up',
            diff: '12%'
        }
    ]
}
