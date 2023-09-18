import React from "react";

export interface SummaryData {
    id: number
    title: string
    value: string
    direction: string
    diff: string
}

export interface Message {
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
    messages: Message[]
}

export interface MessagePreviewProps {
    message: Message
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
    type: 'primary' | 'secondary'
    onClick: () => void
}


export interface PopoverProps {
    children: React.ReactNode
    title: string
    handleClose: () => void
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
