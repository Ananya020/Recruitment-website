import { FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex justify-center space-x-6">
        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/codenex_srmist/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codnex SRMIST on Instagram"
        >
          <FaInstagram size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/code-nex-club-srmist/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codnex SRMIST on LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="text-center text-gray-400 mt-4">
        © 2025 Codnex Club SRMIST
      </p>
    </footer>
  )
}
