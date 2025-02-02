import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-neon-blue hover:text-neon-pink transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-neon-blue hover:text-neon-pink transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-neon-blue hover:text-neon-pink transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-neon-blue hover:text-neon-pink transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

