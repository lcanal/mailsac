import Nav from '../components/nav';
import Audience from '../components/audience'
import LogoSection from '../components/logo-section'


export default function Home() {
  return (
    <div className="relative bg-neutral-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Nav />
        <main className="lg:mt-32  sm:mt-24">
          <div className="mx-auto max-w-7xl min-h-screen">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>

                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-slate-800 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Disposable Email</span>{' '}
                    <span className="text-rose-500 md:block">and API</span>
                  </h1>
                  <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Make up any email address <strong>@mailsac.com</strong> and you can instantly receive mail. No need to create the email first!
                  </p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div className="bg-white ring-2 ring-slate-100 sm:max-w-lg sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div className="mt-3">
                      <form action="#" method="POST" className="space-y-6">
                        <div className='flex'>
                          <label htmlFor="name" className="sr-only">
                            Disposable Email Account Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="anything"
                            required
                            className="w-3/5 shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm border-gray-300 rounded-md"
                          />

                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="@mailsac.com"
                            disabled={true}
                            className="w-3/5 bg-slate-100 shadow-sm sm:text-sm border-gray-300 rounded-md ml-3"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-100 bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                          >
                            Check the mail!
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
              <div className="mx-auto mt-6 overflow-hidden lg:flex w-screen" >
                  <img src='/images/homeillustration-500.svg' className='w-full lg:w-1/2' />
              </div>
            </div>
          </div>

        <LogoSection />
        
        <Audience />
        </main>
      </div>
    </div>
  )
}
