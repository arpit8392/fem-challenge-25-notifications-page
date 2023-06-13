const notifications: NotificationMessage[] = [
	{
		id: 1,
		activityBy: 'Mark Webber',
		activity: 'reacted to your recent post',
		activityAdditionalDetails: 'My first tournament today!',
		elapsedTime: '1m ago',
		hasPrivateMessage: false,
		activityByImage: 'avatar-mark-webber.webp',
	},
	{
		id: 2,
		activityBy: 'Angela Gray',
		activity: 'followed you',
		elapsedTime: '5m ago',
		hasPrivateMessage: false,
		activityByImage: 'avatar-angela-gray.webp',
	},
	{
		id: 3,
		activityBy: 'Jacob Thompson',
		activity: 'has joined your group',
		activityAdditionalDetails: 'Chess Club',
		elapsedTime: '1 day ago',
		hasPrivateMessage: false,
		activityByImage: 'avatar-jacob-thompson.webp',
	},
	{
		id: 4,
		activityBy: 'Rizky Hasanuddin',
		activity: 'sent you a private message',
		elapsedTime: '5 days ago',
		hasPrivateMessage: true,
		privateMessage:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		activityByImage: 'avatar-rizky-hasanuddin.webp',
	},
	{
		id: 5,
		activityBy: 'Kimberly Smith',
		activity: 'commented on your picture',
		elapsedTime: '1 week ago',
		hasPrivateMessage: false,
		activityByImage: 'avatar-kimberly-smith.webp',
		activityImage: 'image-chess.webp',
	},
	{
		id: 6,
		activityBy: 'Nathan Peterson',
		activity: 'reacted to your recent post',
		activityAdditionalDetails:
			'5 end-game strategies to increase your win rate',
		elapsedTime: '2 weeks ago',
		hasPrivateMessage: false,
		activityByImage: 'avatar-nathan-peterson.webp',
	},
	{
		id: 7,
		activityBy: 'Anna Kim',
		activity: 'left the group',
		activityAdditionalDetails: 'Chess Club',
		elapsedTime: '2 weeks ago',
		hasPrivateMessage: false,
		activityByImage: 'avatar-anna-kim.webp',
	},
]

export default notifications
