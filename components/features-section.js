import { TemplateIcon, CollectionIcon, RefreshIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Create Your Template',
    description:
      'Write up your email as you normally would.',
    icon: TemplateIcon,
  },
  {
    name: 'Add Placeholders',
    description:
      'Highlight each word or phrase you want to replace.',
    icon: CollectionIcon,
  },
  {
    name: 'Replace',
    description:
      'Fill in each placeholder meant for the person receiving it.',
    icon: RefreshIcon,
  },
]

export default function FeaturesSection() {
  return (
    <div className="lg:mt-72 py-12 bg-white border-2 border-gray-100 ">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
