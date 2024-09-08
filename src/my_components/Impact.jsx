export default function Impact() {
    return (
        <div className="bg-gray-100 min-h-screen pb-8">
           
            <Impact_1 />
            <Impact_2 />
            <Impact_3 />
        </div>
    );
}

export function Impact_1() {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('/gamma/g2.png')" }}>
             <div className="text-6xl font-bold text-center mb-8 text-white p-8">Why Navix Matters</div>
            <div className="flex flex-col lg:flex-row justify-center items-center p-8">
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-gray-700 mb-4">
                    <div className="font-semibold mb-2 text-4xl text-white">Fuel Savings:</div>
                    <div className="text-2xl text-white">Navix can reduce fuel consumption by up to 15%, leading to significant cost savings. For an average cargo ship, this could amount to saving $3,000 to $6,000 per voyage.</div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="fuel_consump_final.png" alt="Fuel Consumption" />
            </div>
        </div>
        </div>
    );
}

export function Impact_2() {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('/gamma/g3.png')" }}>
         <div className="flex flex-col lg:flex-row justify-center items-center p-8">
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="Family_secutrity.png" alt="Family Safety" />
            </div>
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-xl text-gray-700 mb-4">
                    <div className="font-semibold mb-2 text-4xl text-white">Improved Comfort and Safety:</div>
                    <div className="text-2xl text-white">With real-time weather analysis, Navix reduces the risk of delays or detours by up to 20%, enhancing passenger comfort and safety during the voyage.</div>
                    <div className="font-semibold mb-2 mt-4 text-4xl text-white">Route Safety:</div>
                    <div className="text-2xl text-white">Ensures 98% safe passage by avoiding severe weather conditions and dangerous waters, protecting both passengers and crew.</div>
                </div>
            </div>
        </div>
       </div>
    );
}

export function Impact_3() {
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('/gamma/g4.png')" }}>
            <div className="flex flex-col lg:flex-row justify-center items-center p-8">
            <div className="lg:w-1/2 w-full p-4 lg:ml-16">
                <div className="text-xl text-gray-700 mb-4">
                    <div className="font-semibold mb-2 text-4xl text-white">Reduced Travel Time:</div>
                    <div className="text-2xl text-white">Optimized routes can shorten travel times by 10-12%, helping companies complete more voyages in the same timeframe and improving overall efficiency.</div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
                <img className="h-auto w-1/2 object-cover" src="Time_saving_final.png" alt="Time Reduced" />
            </div>
        </div>
        </div>
    );
}