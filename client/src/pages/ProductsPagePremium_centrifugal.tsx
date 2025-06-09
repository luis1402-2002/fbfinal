              {activeCategory === "centrifugal" && (
                <motion.div
                  key="centrifugal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* FBCN Series Container with Blue Border */}
                  <div className="relative border-2 border-blue-600 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Side - Title */}
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h3 className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-2">
                            {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                          </h3>
                          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-azul-profundo to-blue-600 mb-4">
                            FBCN
                          </h2>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                            {language === "pt"
                              ? "Bombas Centrífugas"
                              : language === "en"
                                ? "Centrifugal Pumps"
                                : "Bombas Centrífugas"}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {language === "pt"
                            ? "Bombas centrífugas normalizadas para aplicações industriais diversas, oferecendo alta eficiência e confiabilidade."
                            : language === "en"
                              ? "Standardized centrifugal pumps for various industrial applications, offering high efficiency and reliability."
                              : "Bombas centrífugas normalizadas para diversas aplicaciones industriales, ofreciendo alta eficiencia y confiabilidad."}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Droplets className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Vazão" : language === "en" ? "Flow" : "Flujo"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 2.200 m³/h" : language === "en" ? "Up to 2.200 m³/h" : "Hasta 2.200 m³/h"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Gauge className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Pressão" : language === "en" ? "Pressure" : "Presión"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 135 M" : language === "en" ? "Up to 135 M" : "Hasta 135 M"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Settings className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Rotação" : language === "en" ? "Rotation" : "Rotación"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 3500 RPM" : language === "en" ? "Up to 3500 RPM" : "Hasta 3500 RPM"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="mt-12 relative overflow-hidden rounded-2xl">
                      <div className="flex animate-scroll-x">
                        <img src="/src/assets/products/fbcn/fbcn-1.png" alt="FBCN 1" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbcn/fbcn-2.png" alt="FBCN 2" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbcn/fbcn-3.png" alt="FBCN 3" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbcn.png" alt="FBCN Main" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbcn/fbcn-1.png" alt="FBCN 1" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbcn/fbcn-2.png" alt="FBCN 2" className="w-64 h-64 object-contain flex-shrink-0" />
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Características Técnicas" : language === "en" ? "Technical Features" : "Características Técnicas"}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Tamanhos DN25 até 300 mm" : "Sizes DN25 to 300 mm"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Bomba com corpo em voluta" : "Volute casing pump"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Instalação na horizontal" : "Horizontal installation"}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Aplicações" : language === "en" ? "Applications" : "Aplicaciones"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {language === "pt"
                            ? "Indústrias químicas, petroquímicas, papel, siderúrgica, mineração, alimentícia, têxtil e farmacêutica."
                            : language === "en"
                              ? "Chemical, petrochemical, paper, steel, mining, food, textile and pharmaceutical industries."
                              : "Industrias químicas, petroquímicas, papel, siderúrgica, minería, alimenticia, textil y farmacéutica."}
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => window.open('/assets/manuals/FB_Manual_Tecnico_FBCN.pdf', '_blank')}
                        className="bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-600 hover:to-azul-profundo text-white"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Manual Técnico" : language === "en" ? "Technical Manual" : "Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Solicitar Orçamento" : language === "en" ? "Request Quote" : "Solicitar Presupuesto"}
                      </Button>
                    </div>
                  </div>

                  {/* FBOT Series Container with Blue Border */}
                  <div className="relative border-2 border-blue-600 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Side - Title */}
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h3 className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-2">
                            {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                          </h3>
                          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-azul-profundo to-blue-600 mb-4">
                            FBOT
                          </h2>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                            {language === "pt"
                              ? "Bombas para Óleo Térmico"
                              : language === "en"
                                ? "Thermal Oil Pumps"
                                : "Bombas para Aceite Térmico"}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {language === "pt"
                            ? "Bombas especializadas para circulação de óleo térmico em sistemas de aquecimento industrial."
                            : language === "en"
                              ? "Specialized pumps for thermal oil circulation in industrial heating systems."
                              : "Bombas especializadas para circulación de aceite térmico en sistemas de calentamiento industrial."}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Thermometer className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Temperatura" : language === "en" ? "Temperature" : "Temperatura"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 350°C" : language === "en" ? "Up to 350°C" : "Hasta 350°C"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Droplets className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Vazão" : language === "en" ? "Flow" : "Flujo"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 2.200 m³/h" : language === "en" ? "Up to 2.200 m³/h" : "Hasta 2.200 m³/h"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Gauge className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Pressão" : language === "en" ? "Pressure" : "Presión"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 135 M" : language === "en" ? "Up to 135 M" : "Hasta 135 M"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="mt-12 relative overflow-hidden rounded-2xl">
                      <div className="flex animate-scroll-x-reverse">
                        <img src="/src/assets/products/fbot/fbot-1.png" alt="FBOT 1" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbot/fbot-2.png" alt="FBOT 2" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbot/fbot-3.png" alt="FBOT 3" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbot.png" alt="FBOT Main" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbot/fbot-1.png" alt="FBOT 1" className="w-64 h-64 object-contain flex-shrink-0" />
                        <img src="/src/assets/products/fbot/fbot-2.png" alt="FBOT 2" className="w-64 h-64 object-contain flex-shrink-0" />
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Características Técnicas" : language === "en" ? "Technical Features" : "Características Técnicas"}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Construção back pull-out" : "Back pull-out construction"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Monoestágio" : "Single stage"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Temperaturas até 350°C" : "Temperatures up to 350°C"}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Aplicações" : language === "en" ? "Applications" : "Aplicaciones"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {language === "pt"
                            ? "Sistemas de aquecimento com óleo térmico, indústrias farmacêutica, química, alimentícia, têxtil e plástica."
                            : language === "en"
                              ? "Thermal oil heating systems, pharmaceutical, chemical, food, textile and plastic industries."
                              : "Sistemas de calentamiento con aceite térmico, industrias farmacéutica, química, alimentaria, textil y plástica."}
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => window.open('/assets/manuals/FB_Manual_Tecnico_FBOT.pdf', '_blank')}
                        className="bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-600 hover:to-azul-profundo text-white"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Manual Técnico" : language === "en" ? "Technical Manual" : "Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Solicitar Orçamento" : language === "en" ? "Request Quote" : "Solicitar Presupuesto"}
                      </Button>
                    </div>
                  </div>

                  {/* Clean High-End CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-12">
                      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                      
                      <div className="relative z-10 text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
                        >
                          <Phone className="w-12 h-12 text-white" />
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {language === "pt"
                            ? "Precisa de Consultoria Técnica?"
                            : language === "en"
                              ? "Need Technical Consulting?"
                              : "¿Necesita Consultoría Técnica?"}
                        </h3>

                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                          {language === "pt"
                            ? "Nossa equipe de engenheiros especializados está pronta para ajudar você a encontrar a solução perfeita."
                            : language === "en"
                              ? "Our team of specialized engineers is ready to help you find the perfect solution."
                              : "Nuestro equipo de ingenieros especializados está listo para ayudarlo a encontrar la solución perfecta."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button
                            onClick={handleWhatsAppClick}
                            size="lg"
                            className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6"
                          >
                            <MessageCircle className="mr-3 h-5 w-5" />
                            {language === "pt" ? "Falar com Especialista" : language === "en" ? "Talk to Expert" : "Hablar con Experto"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}