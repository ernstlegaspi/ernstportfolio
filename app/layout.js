import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'My Portfolio',
	description: 'My Portfolio where my personal information, other details, work experience, educations, and projects can be seen.'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<body className={inter.className}>{children}</body>
		</html>
	)
}
