import Image from 'next/image'

const classNames = (...classes: Array<string>): string => {
	return classes.filter(Boolean).join(' ')
}

type Props = {
	message: NotificationMessage
	clickHandler: (event: React.MouseEvent<HTMLLIElement>) => void
}

const NotificationItem = ({ message, clickHandler }: Props) => {
	const {
		activityBy,
		activity,
		activityAdditionalDetails,
		elapsedTime,
		hasPrivateMessage,
		privateMessage,
		activityByImage,
		activityImage,
		isRead,
	} = message

	return (
		<li
			onClick={clickHandler}
			className={classNames(
				'flex justify-between p-4 hover:cursor-pointer md:p-5',
				!isRead ? 'rounded-lg bg-veryLightGrayishBlue' : 'bg-inherit'
			)}>
			<div className='flex gap-3 md:gap-5 '>
				<div className='relative h-10 w-10 self-start rounded-full md:h-12 md:w-12 shrink-0'>
					<Image
						src={`/images/${activityByImage}`}
						alt={activityBy}
						fill
						className='object-contain'
					/>
				</div>
				<div className='flex flex-col gap-[3px]'>
					<p className='max-w-xs text-sm text-darkGrayishBlue md:max-w-none md:text-base'>
						<span className='font-extrabold text-veryDarkBlue hover:cursor-pointer hover:text-blue'>
							{activityBy}
						</span>{' '}
						{activity}{' '}
						{activityAdditionalDetails && (
							<span className='font-bold hover:cursor-pointer hover:text-blue'>
								{activityAdditionalDetails}
							</span>
						)}
						{!isRead && (
							<span className='mx-[6px] inline-block h-2 w-2 rounded-full bg-red'></span>
						)}
					</p>

					<p className='text-sm text-grayishBlue md:text-base'>{elapsedTime}</p>

					{hasPrivateMessage && (
						<blockquote className='my-3 rounded-md border border-lightGrayishBlue2 p-4 text-sm text-darkGrayishBlue hover:bg-lightGrayishBlue1 md:p-5 md:text-base '>
							{privateMessage}
						</blockquote>
					)}
				</div>
			</div>

			{activityImage && (
				<div className='relative h-10 w-10 rounded-full md:h-12 md:w-12'>
					<Image
						src={`/images/${activityImage}`}
						alt={activityImage}
						fill
						className='object-contain'
					/>
				</div>
			)}
		</li>
	)
}
export default NotificationItem
