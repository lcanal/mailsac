import Nav from '../components/nav';
import DemoSection from '../components/demo-section';
import FeaturesSection from '../components/features-section';


export default function Home() {
  return (
    <div className="relative bg-neutral-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Nav />
        <main className="lg:mt-32 sm:mt-24">
          <div className="mx-auto max-w-7xl mb-20 lg:mb-72">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>

                  <h1 className="mt-20 lg:mt-4 text-4xl tracking-tight font-extrabold text-slate-800 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="block">Spend more time crafting your docs</span>{' '}
                    <span className="text-slate-600 block">and less time searching for them</span>
                  </h1>
                  <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Compose and track your writings using Pressblox, a template builder you'll love.
                  </p>
                  <div className="mt-1 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div className="bg-gray-50  sm:max-w-lg sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div className='flex justify-center'>
                      <a
                        href="https://app.pressblox.com/users/sign_up"
                        type="submit"
                        className="justify-center px-14 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-100 bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="mx-auto mt-6 overflow-hidden lg:flex w-screen" >
                  <img src='/images/homeillustration-500.svg' className='w-11/12 mx-auto lg:mx-0 lg:w-1/2' />
              </div>
            </div>
          </div>
      
        <DemoSection />
        <FeaturesSection />
        </main>
      </div>
    </div>
  )
}
