"use client";

import Link from "next/link"
import Image from "next/image"

import { Popover, Transition } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

const Header = () => {
    return(
        <Popover className={
            "container max-w-7xl mx-auto flex items-center border-b-2 px-6 py-2 h-12 z-50"
            }
        >
            <Link href="/">
                <Image
                    className="rounded-full"
                    height={60}
                    width={60}
                    src="/images/fthr-removebg-preview.png"
                    alt="logo"
                />
            </Link>
            <div className="grow">
                <div className="text-black font-bold hidden sm:flex items-center justify-between gap-4 md:gap:8">
                </div>
            </div>
            <div className="grow">
                <div className="text-black font-bold hidden sm:flex items-center justify-between gap-4 md:gap:8">
                    <Link href="/author">About</Link>
                </div>
            </div>
            <div className="grow">
                <div className="text-black font-bold hidden sm:flex items-center justify-between gap-4 md:gap:8">
                    <Link href="/blog">Blog</Link>
                </div>
            </div>
            <div className="hidden sm:block">
                <Link href="http://eepurl.com/ihYDYX" target="_blank" className="mr-2 font-bold">Newsletter</Link>
            </div>

            <div className="flex grow items-center justify-end sm:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
                hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </Popover.Button>
            </div>
            <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"></Popover.Overlay>

            <Transition
                as={Fragment}
                enter="duration-100 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                    <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                        <Image
                            className="rounded-full"
                            height={60}
                            width={60}
                            src="/images/fthr-removebg-preview.png"
                            alt="logo"
                        />
                            <div className="mr-2">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
                                hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </Popover.Button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <Popover.Button as={Link} href="/" className="hover:bg-gray-100 rounded-md p-2 flex items-start text-left">Home</Popover.Button>
                                <Popover.Button as={Link} href="/author" className="hover:bg-gray-100 rounded-md p-2 flex items-start text-left">Author</Popover.Button>
                                <Popover.Button as={Link} href="/blog"className="hover:bg-gray-100 rounded-md p-2 flex items-start text-left">Blog</Popover.Button>
                                <Popover.Button as={Link} href="http://eepurl.com/ihYDYX" target="_blank" className="hover:bg-gray-100 rounded-md p-2 flex items-start text-left">Newsletter</Popover.Button>
                            </nav>
                        </div>
                    </div>
                </div>
            </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Header