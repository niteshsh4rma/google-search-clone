import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {

    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = e => {
        e.preventDefault()

        const term = searchInputRef.current.value

        if (!term || term == undefined) router.push('/')

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    height={35}
                    width={100}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                />

                <form className="flex flex-grow px-6 py-3 ml-3 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center sm:ml-10">
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text"
                    />

                    <XIcon
                        className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => { searchInputRef.current.value = "" }}
                    />

                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
                    />

                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"
                    />

                    <button hidden type="submit" onClick={search}>Search</button>

                </form>
                <Avatar className="ml-auto" url="data:image/jpeg;base64,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" />

            </div>

            <HeaderOptions />

        </header>
    )
}

export default Header
