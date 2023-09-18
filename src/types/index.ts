import React from "react";

export type Direction = 'up' | 'down'

export interface SummaryData {
    id: number
    title: string
    value: string
    direction: Direction
    diff: string
}

export interface MessageData {
    senderId: number,
    message: string,
    dateTime: Date
}

export interface User {
    name: string
    id: number
    avatar: string
    online: boolean
}

export interface ChatData {
    id: number
    user: User
    messages: MessageData[]
}

export interface MessagePreviewProps {
    message: MessageData
    sender?: User
    isNew?: boolean
}

export interface NavButtonProps {
    icon: React.ReactNode
    title: string
    dotColor?: string
    onClick: () => void
    hasNew?: boolean
}

export interface ButtonProps {
    text: string
    btnType: 'primary' | 'secondary'
    onClick: () => void
}


export interface PopoverProps {
    children: React.ReactNode
    title: string
    handleClose: () => void
    show: boolean
}

export interface ChartProps {
    title: string
    type: "area" | "line" | "bar" | "pie" | "donut" | undefined
    height: number
    options: ApexCharts.ApexOptions
    series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
    colors: string[]
}

export interface SummaryProps {
    data: SummaryData[]
}

export interface NavProfileProps {
    onClick: () => void
    firstName: string
    lastName: string
    position: string
    image: string
}

export interface NavPopupProps {
    onClose: () => void
    show: boolean
}

export interface SidebarChapterProps {
    title: string
    icon: React.ReactElement
    links: { title: string, link: string, enabled: boolean }[]
    onCloseSidebar: () => void
}

export interface SidebarLinkProps {
    link: string
    enabled: boolean
    title: string
    onCloseSidebar: () => void
}

export interface ChatItemProps {
    chat: ChatData
    activeChat?: ChatData
    onSelectChat: (chat: ChatData) => void
}

export interface MessengerProps {
    chat: ChatData
    userId: number
    onSend: (message: string) => void
}

export interface ChatListProps {
    chats: ChatData[]
    setChats: (chats: ChatData[]) => void
    onSetActiveChat: (chat: ChatData) => void
}

export interface MessageProps {
    message: MessageData
    userId: number
    themeColor: string
}
