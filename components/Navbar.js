import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navbar() {

    const companyName = "한양인팩"

    const navigation = [
        {menu: "메뉴1", url: "/menu1"},
        {menu: "메뉴2", url: "/menu2"},
        {menu: "메뉴3", url: "/menu3"},
        {menu: "메뉴4", url: "/menu4"},
        {menu: "메뉴5", url: "/menu5"}
    ]

    return (
        <div className="w-full">
            <nav
                className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Logo companyName={companyName} navigation={navigation}/>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((item, index) => (
                            <li className="mr-3 nav__item" key={index}>
                                <Link href={navigation[index].url}
                                      className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                                    {navigation[index].menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                    <Link href="/public" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                        Get Started
                    </Link>
                </div>
            </nav>
        </div>
    )
}