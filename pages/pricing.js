import Nav from "../components/nav";
/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from '@heroicons/react/solid'

const includedFeatures = [
  'Customer Support',
  'Unlimited Template Creation',
  'Future updates',
]

export default function PricingPage() {
  return (
    <div className="relative bg-neutral-50 overflow-hidden">
    <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true"></div>
    <div className="relative pt-6"><Nav /></div>
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Simplified Pricing</h2>
            <p className="mt-4 text-xl text-gray-600">
              If you&apos;re not satisfied, contact us within the first 14 days and we&apos;ll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Lifetime Membership</h3>
                <p className="mt-6 text-base text-gray-500">
                 Enjoy unlimited use of Pressblox for the life of the application. 
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Pay once, own it forever</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$15</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="https://app.pressblox.com/users/sign_up"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-700  transition duration-150 ease-in-out"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
                {/* <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
