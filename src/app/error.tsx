'use client'

import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div className="pt-7 text-center">
      <div className="text-3xl text-red-600 font semibold">
        Something went wrong
      </div>
      <Link className="text-xl underline text-blue-700 block mt-6" href="/">
        Go to Home Page
      </Link>
    </div>
  )
}

export default ErrorPage
