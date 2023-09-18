import {ChatBubbleLeftEllipsisIcon, Squares2X2Icon, UserIcon} from "@heroicons/react/24/outline";
import {ChatData, Direction, MessageData, User} from "../types";
import {avatar1, avatar2, avatar3, avatar4, avatar5, avatar6} from "../assets";


export const sideBarItems = [
    {
        title: 'Dashboard',
        icon: <Squares2X2Icon/>,
        links: [
            {
                title: 'eCommerce',
                link: 'ecommerce',
                enabled: true
            },
            {
                title: 'Customers',
                link: 'customers',
                enabled: false
            },
            {
                title: 'Analytics',
                link: 'analytics',
                enabled: false
            },
            {
                title: 'Marketing',
                link: 'marketing',
                enabled: false
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
                enabled: true
            },
        ]
    },
    {
        title: 'Support',
        icon: <ChatBubbleLeftEllipsisIcon/>,
        links: [
            {
                title: 'Chat',
                link: 'chat',
                enabled: true
            },
            {
                title: 'Inbox',
                link: 'inbox',
                enabled: false
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
        id: 1,
        text: 'You have a new message. You always can check new messages in Menu - Support - Messages. Have a nice day!',
        date: '12 May, 2025'
    },
    {
        id: 2,
        text: 'Check your calendar for new events. You always can check new events in Menu - Work - Calendar. Have a nice day!',
        date: '24 Feb, 2025'
    },
    {
        id: 3,
        text: 'Please update your password. You always can update your password in Menu - Profile - Settings. Have a nice day!',
        date: '04 Jan, 2025'
    }
]

export const messages: MessageData[] = [
    {
        senderId: 2,
        message: 'Hi this is John! How are you? Can you answer me about your plans?',
        dateTime: new Date()
    },
    {
        senderId: 5,
        message: 'I\'m waiting for confirmation from you regarding the latest transaction.',
        dateTime: new Date()
    }
]

export const eCommerceData = {
    summary: [
        {
            id: 1,
            title: 'Unique Visitors',
            value: '18.6K',
            direction: 'up' as Direction,
            diff: '18%'
        },
        {
            id: 2,
            title: 'Total Pageviews',
            value: '55.9K',
            direction: 'up' as Direction,
            diff: '25%'
        },
        {
            id: 3,
            title: 'Bounce Rate',
            value: '54%',
            direction: 'down' as Direction,
            diff: '7%'
        },
        {
            id: 4,
            title: 'Visit Duration',
            value: '2m 56s',
            direction: 'up' as Direction,
            diff: '12%'
        }
    ],
    visitorsAnalytics: {
        series: [{
            name: 'Visitors',
            data: [200, 150, 180, 260, 290, 250]
        }],
        xaxis: {
            categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'bottom',
        },
        colors: ['']
    },
    topCountries: {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
            ],
        }
    },
    dayTimeAnalytics: {
        series: [
            {
                name: "Day",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "Night",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        chart: {
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    },
    deviceAnalytics: {
        series: [38, 24, 18, 20],
        labels: ["Desktop", "Mobile", "Tablet", "Unknown"],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function (val: string, opts: any) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
            },
            position: 'bottom' as 'bottom'
        },
    },
    summaryVisitorsCount: {
        series: [{
            name: "Visitors",
            data: [123, 113, 159, 188, 201, 227, 212, 244, 229, 254, 267, 272]
        }],
        chart: {
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight' as 'straight'
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        xaxis: {
            type: 'category' as 'category',
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left' as 'left'
        }
    },
    actualExpected: {
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: 'Jul',
                        y: 1292,
                        goals: [
                            {
                                name: 'Expected',
                                value: 1400,
                                strokeHeight: 5,
                                strokeColor: '#00E396'
                            }
                        ]
                    },
                    {
                        x: 'Aug',
                        y: 4432,
                        goals: [
                            {
                                name: 'Expected',
                                value: 5400,
                                strokeHeight: 5,
                                strokeColor: '#00E396'
                            }
                        ]
                    },
                    {
                        x: 'Sep',
                        y: 5423,
                        goals: [
                            {
                                name: 'Expected',
                                value: 5200,
                                strokeHeight: 5,
                                strokeColor: '#00E396'
                            }
                        ]
                    },
                    {
                        x: 'Oct',
                        y: 6653,
                        goals: [
                            {
                                name: 'Expected',
                                value: 6500,
                                strokeHeight: 5,
                                strokeColor: '#00E396'
                            }
                        ]
                    },
                    {
                        x: 'Nov',
                        y: 8133,
                        goals: [
                            {
                                name: 'Expected',
                                value: 6600,
                                strokeHeight: 13,
                                strokeWidth: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#00E396'
                            }
                        ]
                    },
                    {
                        x: 'Dec',
                        y: 7132,
                        goals: [
                            {
                                name: 'Expected',
                                value: 7500,
                                strokeHeight: 5,
                                strokeColor: '#00E396'
                            }
                        ]
                    },
                ]
            }
        ],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        dataLabels: {
            enabled: false
        },
    }
}

export const users: User[] = [
    {
        name: 'Henry Dholi',
        id: 1,
        avatar: avatar6,
        online: false,
    },
    {
        name: 'Mariya Desoja',
        id: 2,
        avatar: avatar1,
        online: true,
    },
    {
        name: 'Robert Jhon',
        id: 3,
        avatar: avatar5,
        online: false,
    },
    {
        name: 'Cody Fisher',
        id: 4,
        avatar: avatar2,
        online: true,
    },
    {
        name: 'Cristofer Donin',
        id: 5,
        avatar: avatar4,
        online: true,
    },
    {
        name: 'Marcus Siphron',
        id: 6,
        avatar: avatar3,
        online: false,
    },
]

export const chatData: ChatData[] = [
    {
        id: 1,
        user: users[0],
        messages: [
            {
                senderId: 100,
                message: 'So, if this isn\'t real, what is it?',
                dateTime: new Date()
            },
            {
                senderId: 1,
                message: 'If you\'re talking about what you can feel, what you can smell, what you can taste and see, then \'real\' is simply electrical signals interpreted by your brain.',
                dateTime: new Date()
            },
            {senderId: 1, message: 'What is real? How do you define \'real\'?', dateTime: new Date()},
            {senderId: 100, message: 'Can you tell me if this is the real world?', dateTime: new Date()},
        ]
    },
    {
        id: 2,
        user: users[1],
        messages: [
            {
                senderId: 100,
                message: 'Oh, you\'re sure to do that if only you walk long enough.',
                dateTime: new Date()
            },
            {
                senderId: 2,
                message: 'As long as I get somewhere.',
                dateTime: new Date()
            },
            {senderId: 100, message: 'Then it doesn\'t matter which way you go.', dateTime: new Date()},
            {senderId: 2, message: 'But I don\'t know where I want to go.', dateTime: new Date()},
            {senderId: 100, message: 'The place you\'re going to depends on the path you take.', dateTime: new Date()},
        ]

    },
    {
        id: 3,
        user: users[2],
        messages: [
            {
                senderId: 3,
                message: 'What?',
                dateTime: new Date()
            },
            {
                senderId: 100,
                message: 'What ain\'t no country I ever heard of! They speak English in \'What\'?',
                dateTime: new Date()
            },
            {
                senderId: 3,
                message: 'What?',
                dateTime: new Date()
            },
            {senderId: 100, message: 'What country are you from?', dateTime: new Date()},
            {
                senderId: 3,
                message: 'What?',
                dateTime: new Date()
            },
            {senderId: 100, message: 'What does Marsellus Wallace look like?', dateTime: new Date()},
        ]
    },
    {
        id: 4,
        user: users[3],
        messages: [
            {senderId: 100, message: 'From the future.', dateTime: new Date()},
            {senderId: 4, message: 'Protect me from what?', dateTime: new Date()},
            {senderId: 100, message: 'To protect you.', dateTime: new Date()},
            {
                senderId: 4,
                message: 'What mission?',
                dateTime: new Date()
            },
            {
                senderId: 100,
                message: 'I\'m the Terminator. I\'ve been sent back on a mission.',
                dateTime: new Date()
            },
            {senderId: 4, message: 'Who are you?', dateTime: new Date()},
        ]
    },
    {
        id: 5,
        user: users[4],
        messages: [
            {senderId: 5, message: 'No, I\'m what you want to be. I\'m free.', dateTime: new Date()},
            {
                senderId: 100,
                message: 'Because you\'re me.',
                dateTime: new Date()
            },
            {
                senderId: 5,
                message: 'Why?',
                dateTime: new Date()
            },
            {senderId: 100, message: 'I can\'t hit you, Tyler.', dateTime: new Date()},
            {senderId: 5, message: 'Go ahead, hit me as hard as you can.', dateTime: new Date()},
        ]
    },
    {
        id: 6,
        user: users[5],
        messages: [
            {
                senderId: 6,
                message: 'Well, Dale, you\'ve certainly got a way with words',
                dateTime: new Date()
            },
            {
                senderId: 100,
                message: 'but I have a definite feeling it will be a place both wonderful and strange',
                dateTime: new Date()
            },
            {senderId: 100, message: 'I have no idea where this will lead us', dateTime: new Date()},
            {senderId: 6, message: 'Yeah, Dale, and this town is the strangest one of all', dateTime: new Date()},
            {
                senderId: 100,
                message: 'Small towns are the real storybook of our country',
                dateTime: new Date()
            },
        ]
    },
]
