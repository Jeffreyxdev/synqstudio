import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 w-full">
            {/* Left: Logo */}
            <Link to="/" className="font-serif text-xl md:text-2xl text-black">
                Synq studio
            </Link>

            {/* Left: Links */}
            <div className="hidden md:flex items-center gap-8 ml-10 font-sans text-sm font-medium mr-auto">
                <Link to="/projects" className="hover:opacity-70 transition-opacity">Projects</Link>
                <Link to="/pricing" className="hover:opacity-70 transition-opacity">Pricing</Link>
            </div>

            {/* Right: Time  Left: Logo */}
            <div className="flex items-center gap-6 font-sans text-sm">
                <span>
                    {new Date().toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    })}
                </span>
                <button className="bg-black text-white px-4 py-1.5 hover:bg-gray-800 transition-colors cursor-pointer">
                    <Link to="/book">book</Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar