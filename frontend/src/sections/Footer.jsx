/* eslint-disable react/no-unescaped-entities */
import paymentBrandImg from '../assets/payment_brand.png'
const Footer = () => {
  return (
    <div className="mt-12 grid lg:grid-cols-4 sm:grid-cols-1 text-center
    gap-12">
      <div className="mx-9">
        <h2 className="font-bold text-2xl">Showroom</h2>
        <h2>Point E en face iRadio</h2>
        <h2>Tél: <span className="font-bold">+221 33 897 76 56</span></h2>
        <h2>Email: <span className="underline">mamadou@espaceDivision.com</span></h2>
      </div>
      <div>
        <h2 className="font-bold text-2xl">
          Service client
        </h2>
        <h2 className="bg-black rounded-3xl text-white text-2xl
        px-3 py-2 font-bold">
          Tél: +221 77 381 54 79
        </h2>
        <h2 className="bg-black rounded-3xl text-white text-2xl
        px-3 py-2 mt-6 font-bold">
          Tél: +221 77 479 86 19
        </h2>
      </div>
      <div>
        <h2 className="font-bold text-2xl">Support</h2>
        <h2 className="font-bold text-2xl">Mentions légales</h2>
        <h2 className="font-bold text-2xl">Politique et confidentialités</h2>
        <h2 className="font-bold text-2xl">Termes et conditions</h2>
      </div>
      <div className="mb-10">
        <h2 className="text-xl">
          Recevez nos derniéres nouveautés
        </h2>
        <h2 className="font-bold text-4xl mb-5">
          Abonnez-vous à notre Newsletter
        </h2>
        <div className="flex bg-[#f2f3f5] rounded-3xl px-4 py-2">
          <input 
            type="text"
            placeholder="Entrez votre mail"
            className="bg-[#f2f3f5] border-none outline-none px-6
            py-3 rounded-[30px] w-full"
          />
          <button className="bg-emerald-400 text-white py-2 
          px-4 rounded-3xl">
            Envoi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
