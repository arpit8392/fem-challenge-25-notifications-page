import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['500', '700', '800'],
})

export const metadata = {
	title: 'Notifications Page',
	description:
		'Frontend Mentor Challenge | Notifications Page | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='bg-veryLightGrayishBlue'>
			<body className={`${plus_jakarta_sans.className} md:py-11`}>
				{children}
			</body>
		</html>
	)
}
