const logos = [
    { name: 'Transistor', url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg' },
    { name: 'Mirage', url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg' },
    { name: 'Tuple', url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg' },
    { name: 'Laravel', url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg' },
    { name: 'StaticKit', url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg' },
    { name: 'Workcation', url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg' },
  ]

export default function DemoSection(params) {
    return (
        <>
        <div className="mb-52 -mt-32 ml-56 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl flex justify-start">
        Live Template Demo
        </div>
        <div className="bg-sky-700 border-t-2 border-b-2 border-gray-500 mb-48">
            <div className="relative z-10 container mx-auto sm:flex sm:items-center justify-center px-6 md:px-12">
                <span className="inset-y-0 left-0 pl-3 flex h-96 items-center shadow-sm">
                <video src="/video/pressblox_demo.mov" className="rounded-lg border-2 border-gray-200 shadow-lg" autoPlay loop muted />
                </span>

            {/* <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <video src="/video/pressblox_demo.mov" className="col-span-2 rounded-lg" autoPlay loop muted />
            {/* <div>
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
            </div> */}
        </div>
        </div>
        </>
    )
}