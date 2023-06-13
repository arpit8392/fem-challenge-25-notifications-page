'use client'

import NotificationItem from '@/components/NotificationItem'
import notifications from '@/data'
import { useState } from 'react'

export default function Home() {
	const [messages, setMessages] = useState<NotificationMessage[]>(notifications)
	const [areAllRead, setAreAllRead] = useState(false)

	const handleNotificationClick = (id: number): void => {
		setMessages((prev) =>
			prev.map((notification) => {
				if (notification.id === id) {
					return { ...notification, isRead: !notification.isRead }
				}
				return notification
			})
		)
	}

	const handleMarkAllAsRead = () => {
		setMessages((prev) =>
			prev.map((notification) => ({ ...notification, isRead: true }))
		)
		setAreAllRead(true)
	}

	const handleMarkAllAsUnread = () => {
		setMessages((prev) =>
			prev.map((notification) => ({ ...notification, isRead: false }))
		)
		setAreAllRead(false)
	}

	const unreadCount = messages.filter(
		(notification) => !notification.isRead
	).length

	return (
		<main className='mx-auto flex max-w-3xl flex-col gap-6 rounded-2xl bg-white px-4 py-6 md:gap-8 md:p-8'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2 md:gap-3'>
					<h1 className='text-xl font-extrabold text-veryDarkBlue md:text-2xl'>
						Notifications
					</h1>
					<span className='h-6 w-8 rounded-md bg-blue text-center text-base font-extrabold text-white'>
						{unreadCount}
					</span>
				</div>
				<button
					onClick={areAllRead ? handleMarkAllAsUnread : handleMarkAllAsRead}
					className='text-right text-sm text-darkGrayishBlue hover:text-blue md:text-base'>
					{areAllRead ? 'Mark all as unread' : 'Mark all as read'}
				</button>
			</div>
			
			<ul className='flex flex-col gap-2 md:gap-3'>
				{messages.map((item) => (
					<NotificationItem
						key={item.id}
						message={item}
						clickHandler={() => handleNotificationClick(item.id)}
					/>
				))}
			</ul>
		</main>
	)
}
