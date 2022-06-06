import { KeyIcon, MailOpenIcon, TrendingUpIcon,TerminalIcon } from '@heroicons/react/outline'

const supportLinks = [
  {
    name: 'JSON Rest API',
    href: 'https://mailsac.com/docs/api/#get-an-api-key',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: KeyIcon,
    text: "Get an API key",
  },
  {
    name: 'Email Validation',
    href: 'https://mailsac.com/email-validation',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: MailOpenIcon,
    text: "Validate an email address",
  },
  {
    name: 'Email to Webhooks',
    href: 'https://docs.mailsac.com/en/latest/services/webhook.html',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: TrendingUpIcon,
    text: "More about webhooks",
  },
  {
    name: 'Email to Websockets',
    href: 'https://docs.mailsac.com/en/latest/websocket_examples/overview.html',
    description:
    'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: TerminalIcon,
    text: "Websockets overview",
  }
]

export default function Audience() {
  return (
    <div className="bg-neutral-50">
      {/* Header */}
      <div className="relative pb-32 bg-neutral-50">
        <div className="relative max-w-7xl mx-auto py-10 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            APIs and Email QA Testing
          </h1>
          {/* <p className="mt-6 max-w-3xl text-xl text-gray-700">
            Built for developers and QA teams
          </p>
          <p>
              REST API, webhooks, Slack support, web sockets, and of course SMTP/POP3 
          </p>
          <p>
              Used by large enterprises for automated quality assurance testing
          </p> */}
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-orange-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-orange-500 hover:text-orange-600">
                  {link.text}<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
