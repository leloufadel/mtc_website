import Image from "next/image"; 

 export default function Hero({titleHero}: {titleHero: string}){
    const imageHero = "/images/rubon1.jpg";
 return (
    <section className= "relative h-[60vh] md:h-[70vh] w-full overflow-hidden" >
   <Image src={imageHero} alt="image mtc" fill priority className="object-cover" />
   {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {titleHero}</h1>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>
        </div>
    </section>
 )

 }