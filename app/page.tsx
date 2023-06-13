import NotificationItem from '@/components/NotificationItem'
import notifications from '@/data'

export default function Home() {
	return (
		<main className='mx-auto flex max-w-3xl flex-col gap-6 rounded-2xl bg-white px-4 py-6 md:gap-8 md:p-8'>
			{/* Notifications Badge & Button */}
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2 md:gap-3'>
					<h1 className='text-xl font-extrabold text-veryDarkBlue md:text-2xl'>
						Notifications
					</h1>
					<span className='h-6 w-8 rounded-md bg-blue text-center text-base font-extrabold text-white'>
						3
					</span>
				</div>
				<button className='text-right text-sm text-darkGrayishBlue hover:text-blue md:text-base'>
					Mark all as read
				</button>
			</div>
			{/* All Notifications */}
			<ul className='flex flex-col gap-2 md:gap-3'>
				{notifications.map((item) => (
					<NotificationItem key={item.id} {...item} />
				))}
			</ul>
		</main>
	)
}
