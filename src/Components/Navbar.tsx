import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "var(--navbar-color)" }} className="text-white py-3 text-center">
        <div className="flex justify-center items-center">
            <ul className="flex space-x-6"> 
            <li>
                <Link href="/Portfolio" className="hover:text-yellow-300">
                Portfolio
                </Link>
            </li>
            <li>
                <Link href="/" className="hover:text-yellow-300">
                Home
                </Link>
            </li>
            <li>
                <Link href="/About" className="hover:text-yellow-300">
                About
                </Link>
            </li>
            </ul>
        </div>
    </nav>
  );
}