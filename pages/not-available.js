import Nav from "../components/nav";

export default function PricingPage(params){
    return(
    <div className="relative bg-neutral-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24 h-screen">
            <Nav />
            <main className="lg:mt-32 sm:mt-24">
                <div className="text-center">
                    <h1 className="text-7xl mb-10">Pricing Page</h1>
                    <p className="text-lg">Pricing information not yet available</p>
                </div>
            </main>
        </div>
    </div>
    )
}