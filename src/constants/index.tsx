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
                title: 'Messages',
                link: 'messages',
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
    summary: [
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
