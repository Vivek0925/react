import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-4 bg-amber-300'>
            <div className='logo text-4xl'>WebD</div>
            <ul className='flex gap-6'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;
