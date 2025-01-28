import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className="container mx-auto p-4"> 
        <div className="bg-white p-6 rounded-lg shadow-lg"> 
          <h1 className='text-[32px] text-center text-black font-bold py-4'>Get Help</h1>
        <h2 className="text-2xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2> 
        <p className="mb-4">We want to make buying your favorite Nike shoes and gear online fast and easy, 
            and we accept the following payment options:</p> 
            <ul className="list-disc list-inside mb-4"> 
                <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                 <li>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</li>
                  <li>Apple Pay</li> 
                  </ul>
                   <p className="mb-4">Nike Members can store multiple debit or credit cards in their profile for faster checkout. 
                    If you&apos;re not already a Member, <a href="#" className="text-blue-500">join us today</a>.</p> 
                    <div className="flex space-x-4 mb-4"> 
                        <button className="bg-black text-white px-4 py-2 rounded">JOIN US</button> 
                        <button className="bg-black text-white px-4 py-2 rounded">SHOP NIKE</button>
                         </div>
                         <h2 className="text-xl font-bold mb-4">FAQs</h2> 
                         <div className="mb-4"> 
                            <h3 className="font-semibold">Does my card need international purchases enabled?</h3>
                          <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p> 
                         <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                          </div> 
                         <div className="mb-4"> 
                            <h3 className="font-semibold">Can I pay for my order with multiple methods?</h3> 
                         <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                         </div>
                          <div className="mb-4"> 
                            <h3 className="font-semibold">What payment method is accepted for SNKRS orders?</h3> 
                          <p>You can use any accepted credit card to pay for your SNKRS order.</p> 
                          </div> <div className="mb-4"> 
                            <h3 className="font-semibold">Why don&apos;t I see Apple Pay as an option?</h3>
                             <p>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS,
                                 be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p> 
                                 </div> 
                                 <div className="flex items-center space-x-2 mb-4"> 
                                    <p>Was this answer helpful?</p>
                                     <button className="text-green-500">👍</button> 
                                 <button className="text-red-500">👎</button>
                                  </div> 
                                  <div className="mb-4">
                                     <h3 className="font-semibold">RELATED</h3> 
                                 <ul className="list-disc list-inside"> 
                                    <li><a href="#" className="text-blue-500">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</a></li>
                                     <li><a href="#" className="text-blue-500">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a></li> 
                                    </ul> 
                                    </div>
                                     </div> 
                                     <div className="bg-white p-6 rounded-lg shadow-lg mt-6"> 
        <h2 className="text-xl font-bold mb-4">CONTACT US</h2>Contact details can be added here.
    
        </div>
        </div>
    </div>
  )
}

export default ContactUs
