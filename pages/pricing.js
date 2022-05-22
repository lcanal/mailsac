import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'

const tiers = [
    { name: 'Basic', 
      href: '#', 
      priceMonthly: 0,
      description: 'Quis suspendisse ut fermentum neque vivamus non tellus.' 
    },
    {
      name: 'Indie',
      href: '#',
      priceMonthly: 18,
      description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    },
    {
      name: 'Business',
      href: '#',
      priceMonthly: 89,
      description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    },
    { name: 'Enterprise', 
      href: '#', 
      priceMonthly: 295, 
      description: 'Billed yearly, Starting at $3,540' 
    },

  ]
  const sections = [
    {
      name: 'Features',
      features: [
        { name: 'API Keys', tiers: { Basic: '1', Indie: '1', Business: 'Multiple', Enterprise: "Multiple" } },
        { name: 'Urna purus felis.', tiers: { Basic: true, Indie: true, Business: true } },
        { name: 'Tellus pulvinar sit dictum.', tiers: { Indie: true, Business: true } },
        { name: 'Convallis.', tiers: { Indie: 'Up to 20 users', Business: 'Up to 50 users' } },
      ],
    },
    {
      name: 'Reporting',
      features: [
        { name: 'Adipiscing.', tiers: { Basic: true, Indie: true, Business: true } },
        { name: 'Eget risus integer.', tiers: { Indie: true, Business: true } },
        { name: 'Gravida leo urna velit.', tiers: { Business: true } },
        { name: 'Elementum ut dapibus mi feugiat cras nisl.', tiers: { Business: true } },
      ],
    },
    {
      name: 'Support',
      features: [
        { name: 'Sit dignissim.', tiers: { Basic: true, Indie: true, Business: true } },
        { name: 'Congue at nibh et.', tiers: { Indie: true, Business: true } },
        { name: 'Volutpat feugiat mattis.', tiers: { Indie: true, Business: true } },
        { name: 'Tristique pellentesque ornare diam sapien.', tiers: { Business: true } },
      ],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
import Nav from "../components/nav";

export default function PricingPage(params){
    return(
    <div className="relative bg-neutral-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
            <Nav />
            <div className="bg-neutral-50">
            <div className="max-w-7xl mx-auto bg-neutral-50 py-16 sm:py-24 sm:px-6 lg:px-8">
                {/* xs to lg */}
                <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
                {tiers.map((tier, tierIdx) => (
                    <section key={tier.name}>
                    <div className="px-4 mb-8">
                        <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                        <p className="mt-4">
                        <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                        <span className="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                        <a
                        href={tier.href}
                        className="mt-6 block border border border-transparent rounded-md bg-rose-500 w-full py-2 text-sm font-semibold text-neutral-50 text-center hover:bg-rose-700"
                        >
                        Buy {tier.name}
                        </a>
                    </div>

                    {sections.map((section) => (
                        <table key={section.name} className="w-full">
                        <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            {section.name}
                        </caption>
                        <thead>
                            <tr>
                            <th className="sr-only" scope="col">
                                Feature
                            </th>
                            <th className="sr-only" scope="col">
                                Included
                            </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {section.features.map((feature) => (
                            <tr key={feature.name} className="border-t border-gray-200">
                                <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                {feature.name}
                                </th>
                                <td className="py-5 pr-4">
                                {typeof feature.tiers[tier.name] === 'string' ? (
                                    <span className="block text-sm text-gray-700 text-right">{feature.tiers[tier.name]}</span>
                                ) : (
                                    <>
                                    {feature.tiers[tier.name] === true ? (
                                        <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                                    ) : (
                                        <MinusIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                    )}

                                    <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                                    </>
                                )}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    ))}

                    <div
                        className={classNames(
                        tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                        'border-t border-gray-200 px-4'
                        )}
                    >
                        <a
                        href={tier.href}
                        className="block w-full bg-rose-500 border border border-transparent rounded-md py-2 text-sm font-semibold text-neutral-50 text-center hover:bg-rose-700"
                        >
                        Buy {tier.name}
                        </a>
                    </div>
                    </section>
                ))}
                </div>

                {/* lg+ */}
                <div className="hidden lg:block">
                <table className="w-full h-px table-fixed">
                    <caption className="sr-only">Pricing plan comparison</caption>
                    <thead>
                    <tr>
                        <th className="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                        <span className="sr-only">Feature by</span>
                        <span>Plans</span>
                        </th>
                        {tiers.map((tier) => (
                        <th
                            key={tier.name}
                            className="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                            scope="col"
                        >
                            {tier.name}
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                    <tr>
                        <th className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">
                        Pricing
                        </th>
                        {tiers.map((tier) => (
                        <td key={tier.name} className="h-full py-8 px-6 align-top">
                            <div className="relative h-full table">
                            <p>
                                <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                                <span className="text-base font-medium text-gray-500">/mo</span>
                            </p>
                            <p className="mt-4 mb-16 text-sm text-gray-500">{tier.description}</p>
                            <a
                                href={tier.href}
                                className="absolute bottom-0 flex-grow block w-full bg-rose-500 border border border-transparent rounded-md 5 py-2 text-sm font-semibold text-neutral-50 text-center hover:bg-rose-700"
                            >
                                Buy {tier.name}
                            </a>
                            </div>
                        </td>
                        ))}
                    </tr>
                    {sections.map((section) => (
                        <Fragment key={section.name}>
                        <tr>
                            <th
                            className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                            colSpan={4}
                            scope="colgroup"
                            >
                            {section.name}
                            </th>
                        </tr>
                        {section.features.map((feature) => (
                            <tr key={feature.name}>
                            <th className="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">
                                {feature.name}
                            </th>
                            {tiers.map((tier) => (
                                <td key={tier.name} className="py-5 px-6">
                                {typeof feature.tiers[tier.name] === 'string' ? (
                                    <span className="block text-sm text-gray-700">{feature.tiers[tier.name]}</span>
                                ) : (
                                    <>
                                    {feature.tiers[tier.name] === true ? (
                                        <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                                    ) : (
                                        <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    )}

                                    <span className="sr-only">
                                        {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                    </span>
                                    </>
                                )}
                                </td>
                            ))}
                            </tr>
                        ))}
                        </Fragment>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr className="border-t border-gray-200">
                        <th className="sr-only" scope="row">
                        Choose your plan
                        </th>
                        {tiers.map((tier) => (
                        <td key={tier.name} className="pt-5 px-6">
                            <a
                            href={tier.href}
                            className="block w-full bg-rose-500 border border border-transparent rounded-md py-2 text-sm font-semibold text-neutral-50 text-center hover:bg-rose-700"
                            >
                            Buy {tier.name}
                            </a>
                        </td>
                        ))}
                    </tr>
                    </tfoot>
                </table>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}