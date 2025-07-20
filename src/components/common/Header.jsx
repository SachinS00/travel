import React from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="bg-blue-500 p-4">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <nav className="mt-4">
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-200">Home</a>
                    </li>
                    <li>
                        <a href="/preview" className="text-white hover:text-gray-200">Preview</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header

