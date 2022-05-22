const logos = [
    { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
    { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
    { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
    { name: 'Laravel', url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
    { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
    { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
  ]

export default function LogoSection(params) {
    return (
    <div className="lg:-mt-32 bg-sky-700 border-t-2 border-b-2 border-gray-500 py-10">
    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
        <div>
            <h2 className="text-3xl font-extrabold text-neutral-50 tracking-tight sm:text-4xl">
            Backed by world-renowned investors
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-7 text-neutral-50">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
            tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
            morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-2  md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {logos.map((logo) => (
            <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <img className="max-h-12" src={logo.url} alt={logo.name} />
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>    
    )
}