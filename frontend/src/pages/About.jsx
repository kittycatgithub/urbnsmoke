import React from 'react'
import {motion} from 'framer-motion'
import { useAppContext } from '../context/AppContext'

const About = () => {
  const {t, i18n} = useAppContext()
  const isRTL = i18n.language === 'ar'; // Check if Arabic


  return (
    <div>
      <div className="relative w-full  h-[50vh] min-h-[50vh]">
     <img src="/topImg.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -110 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
    >
      {t('about.title')}
    </motion.h1>

  </div>
  </div>

<div className="font-sans bg-amber-50">
    <section id="about" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                    <h2 className="text-3xl font-bold mb-6"             
                        dir={isRTL ? 'rtl' : 'ltr'} // sets direction dynamically
                    >{t('about.section1.title')}</h2>
                    <p className="mb-4" dir={isRTL ? 'rtl' : 'ltr'} // sets direction dynamically
                    >{t('about.section1.paragraph1')}</p>
                    <p className="mb-4" dir={isRTL ? 'rtl' : 'ltr'} // sets direction dynamically
                    >{t('about.section1.paragraph2')}</p>
                    <p className="mb-4" dir={isRTL ? 'rtl' : 'ltr'} // sets direction dynamically
                    >{t('about.section1.paragraph3')}</p>
                    <div className="flex text-black space-x-4">
                        <div className="bg-[#FDBA08] p-4 rounded-lg text-center flex-1">
                            <div className="text-3xl font-bold mb-1">5+</div>
                            <div className="text-sm">Years in Business</div>
                        </div>
                        <div className="bg-[#FDBA08] p-4 rounded-lg text-center flex-1">
                            <div className="text-3xl font-bold mb-1">10+</div>
                            <div className="text-sm">Happy Employees</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                             alt="Coffee shop interior"
                             className="w-full h-auto"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent flex items-end p-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">URBN Smoke</h3>
                                <p className="text-sm">Visit us at our flagship location in Abi Bakr As Siddiq Rd, An Narjis, Riyadh, Saudi Arabia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-amber-800 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80" 
                             alt="Anne Dukundimana"
                             className="w-full h-64 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Anne Dukundimana</h3>
                            <p className="text-amber-200 mb-3">Founder & Head Barista</p>
                            <p className="text-sm">Anne's passion for coffee began during her travels through East Africa's coffee regions. She oversees our coffee sourcing and barista training.</p>
                        </div>
                    </div>
                    
                    <div className="bg-amber-800 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                             alt="Noela"
                             className="w-full h-64 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Noela</h3>
                            <p className="text-amber-200 mb-3">Tea Specialist</p>
                            <p className="text-sm">Noela curates our tea selection and develops unique blends. Her knowledge of tea traditions from around the world is unparalleled.</p>
                        </div>
                    </div>
                    
                    <div className="bg-amber-800 rounded-lg overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80" 
                             alt="Jean Paul"
                             className="w-full h-64 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-1">Jean Paul</h3>
                            <p className="text-amber-200 mb-3">Pastry Chef</p>
                            <p className="text-sm">Jean Paul brings French pastry techniques to Rwandan ingredients, creating our delicious selection of baked goods.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="feature-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300">
                    <div className="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                             alt="Fresh Ingredients"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <div className="text-amber-600 text-3xl mb-4">
                            <i className="fas fa-seedling"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Our Philosophy</h3>
                        <p className="text-gray-600">At URBN SMOKE RESTAURANT, we believe that dining out should be an experience that engages all of your senses. That's why we create dishes that not only taste amazing but also look and smell incredible. We believe that every meal should be a celebration and strive to make every visit to our restaurant a memorable one.</p>
                    </div>
                </div>
                
                <div className="feature-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300">
                    <div className="h-48 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80 " 
                             alt="Skilled Baristas"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <div className="text-amber-600 text-3xl mb-4">
                            <i className="fas fa-mug-hot"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Warm Atmosphere</h3>
                        <p className="text-gray-600">Our restaurant is designed to provide a comfortable and inviting atmosphere for all of our guests. Whether you're looking for a romantic night out or a fun evening with friends, our restaurant is the perfect place to relax and unwind. From the warm lighting to the cozy seating, every detail has been carefully curated to create an unforgettable dining experience.</p>
                    </div>
                </div>
                
                <div className="feature-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300">
                    <div className="h-48 overflow-hidden">
                        <img src="https://img.freepik.com/premium-photo/tattooed-barman-pouring-red-wine-into-burgunya-glass_130488-4265.jpg?uid=R159003840&ga=GA1.1.1591991109.1749796990&semt=ais_items_boosted&w=740" 
                             alt="Cozy Atmosphere"
                             className="w-full h-full object-cover"/>
                    </div>
                    <div className="p-6">
                        <div className="text-amber-600 text-3xl mb-4">
                            <i className="fas fa-heart"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Our Wine List</h3>
                        <p className="text-gray-600">At URBN SMOKE RESTAURANT, we believe that a great meal is not complete without a great glass of wine. That's why we have an extensive wine list featuring wines from around the world. Our sommelier is always available to help you choose the perfect wine to pair with your meal.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials Section --> */}
    <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="text-amber-500 text-2xl mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">"The Rwandan Bourbon coffee is simply exceptional. I come here every morning before work and it's the perfect start to my day. The staff remembers my order and always greets me with a smile."</p>
                    <div className="flex items-center">
                        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                             alt="Customer"
                             className="w-12 h-12 rounded-full object-cover mr-4"/>
                        <div>
                            <h4 className="font-semibold">Alexis N.</h4>
                            <p className="text-sm text-gray-500">Regular Customer</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="text-amber-500 text-2xl mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">"As a tea enthusiast, I appreciate their extensive selection and knowledgeable staff. Noela helped me discover several new favorites. The chamomile with local honey is my go-to for relaxation."</p>
                    <div className="flex items-center">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                             alt="Customer"
                             className="w-12 h-12 rounded-full object-cover mr-4"/>
                        <div>
                            <h4 className="font-semibold">Marie Claire U.</h4>
                            <p className="text-sm text-gray-500">Tea Lover</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-center mb-4">
                        <div className="text-amber-500 text-2xl mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">"The perfect place to work remotely. Great WiFi, comfortable seating, and amazing coffee. The avocado toast is delicious too! I've recommended this place to all my colleagues."</p>
                    <div className="flex items-center">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                             alt="Customer"
                             className="w-12 h-12 rounded-full object-cover mr-4"/>
                        <div>
                            <h4 className="font-semibold">Eric K.</h4>
                            <p className="text-sm text-gray-500">Digital Nomad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <button id="back-to-top" className="fixed bottom-8 right-8 bg-amber-700 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300">
        <i className="fas fa-arrow-up"></i>
    </button>
</div>
    </div>
  )
}

export default About