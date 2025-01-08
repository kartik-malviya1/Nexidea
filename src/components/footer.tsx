import Link from "next/link"

export const Footer = () => {
  const date = new Date()
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {date.getFullYear()}{" "}
          <Link href="/" className="hover:underline hover:text-purple-600">
            Nexidea
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="/privacy-policy"
              className="hover:underline me-4 md:me-6 hover:text-purple-600"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
