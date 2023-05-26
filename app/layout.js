import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: '한양인팩',
    description: '포장박스 제작을 전문으로 하는 업체입니다',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
