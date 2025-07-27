import './style.css'

console.log('SVIT UA Frontend Clone loaded!')

// Main application
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')
    if (app) {
        app.innerHTML = `
            <!-- Header -->
            <header class="bg-white shadow-sm">
                <div class="container mx-auto px-4 py-4">
                    <nav class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <div class="text-2xl font-bold text-blue-600">SVIT UA</div>
                        </div>
                        <div class="hidden md:flex space-x-6">
                            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">Про нас</a>
                            <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Що ми надаємо</a>
                            <a href="#events" class="text-gray-700 hover:text-blue-600 transition-colors">Заходи</a>
                            <a href="#join" class="text-gray-700 hover:text-blue-600 transition-colors">Приєднатися</a>
                            <a href="#faq" class="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
                            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Контакти</a>
                        </div>
                        <div class="md:hidden">
                            <button class="text-gray-700">☰</button>
                        </div>
                    </nav>
                </div>
            </header>

            <!-- Hero Section -->
            <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">SVIT UA</h1>
                    <p class="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                        ГУМАНІТАРНА ДОПОМОГА, ВОЛОНТЕРСТВО ТА ІНТЕГРАЦІЯ — МИ ПОРУЧ ІЗ ТОБОЮ В ШВЕЦІЇ
                    </p>
                    <p class="text-lg mb-10 max-w-3xl mx-auto opacity-90">
                        Ставайте частиною змін — разом ми творимо майбутнє, де кожна дитина та родина має підтримку
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Підтримати
                        </button>
                        <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Зв'язатися
                        </button>
                    </div>
                </div>
            </section>

            <!-- Partners Section -->
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12">Наші партнери</h2>
                    <div class="flex justify-center items-center space-x-8 opacity-60">
                        <div class="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span class="text-sm text-gray-500">Партнер 1</span>
                        </div>
                        <div class="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span class="text-sm text-gray-500">Партнер 2</span>
                        </div>
                        <div class="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span class="text-sm text-gray-500">Партнер 3</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section id="about" class="py-20">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold mb-8">Про нас</h2>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div class="space-y-6">
                                <div class="flex items-center space-x-4">
                                    <div class="text-blue-600 font-bold">Штаб-квартира</div>
                                    <div class="text-2xl font-bold">Стокгольм</div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="text-blue-600 font-bold">Рік заснування</div>
                                    <div class="text-2xl font-bold">2022</div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="text-blue-600 font-bold">Засновниця</div>
                                    <div class="text-2xl font-bold">Анна Мартиненко</div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="text-blue-600 font-bold">Волонтери</div>
                                    <div class="text-2xl font-bold">10+</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-lg mb-6">
                                <strong>SVIT UA</strong> — це команда, що об'єднує людей, які вірять у силу підтримки, солідарності та дій. 
                                Ми працюємо в Швеції, щоб допомогти тим, хто опинився в нових життєвих обставинах: мігрантам, біженцям, людям у скруті.
                            </p>
                            <p class="text-xl font-semibold text-blue-600">
                                Наша місія — зробити адаптацію простішою, а шлях до нового життя — можливим і гідним.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section id="services" class="py-20 bg-gray-50">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold text-center mb-16">Ми надаємо</h2>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-lg shadow-sm">
                            <div class="text-blue-600 font-bold text-lg mb-4">1. Гуманітарна допомога</div>
                            <p class="text-gray-700 mb-6">
                                Ми забезпечуємо людей у складних життєвих обставинах найнеобхіднішим: 
                                продуктами, одягом, засобами гігієни та підтримкою в надзвичайних ситуаціях.
                            </p>
                            <p class="text-sm text-gray-600 mb-4">
                                Наша мета — щоб кожен, хто опинився у вразливому становищі, відчув: він не один.
                            </p>
                            <a href="#" class="text-blue-600 hover:underline">Детальніше →</a>
                        </div>
                        
                        <div class="bg-white p-8 rounded-lg shadow-sm">
                            <div class="text-blue-600 font-bold text-lg mb-4">2. Волонтерство та громадська активність</div>
                            <p class="text-gray-700 mb-6">
                                Ми об'єднуємо тих, хто хоче допомагати іншим. Створюємо простір для ініціатив, 
                                активізуємо громаду, надихаємо людей діяти — на заходах, акціях, у повсякденному житті.
                            </p>
                            <a href="#" class="text-blue-600 hover:underline">Детальніше →</a>
                        </div>
                        
                        <div class="bg-white p-8 rounded-lg shadow-sm">
                            <div class="text-blue-600 font-bold text-lg mb-4">3. Підтримка та інтеграція мігрантів</div>
                            <p class="text-gray-700 mb-6">
                                Допомагаємо мігрантам адаптуватися до життя в Швеції. Проводимо інформаційні семінари, 
                                індивідуальні консультації, допомагаємо з пошуком роботи, навчанням, легалізацією.
                            </p>
                            <p class="text-sm text-gray-600 mb-4">
                                Розкриваємо можливості, пояснюємо систему, підтримуємо на кожному етапі.
                            </p>
                            <a href="#" class="text-blue-600 hover:underline">Детальніше →</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Events Section -->
            <section id="events" class="py-20">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold text-center mb-16">Анонс майбутніх заходів</h2>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="border rounded-lg overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-4">Як виглядає профіль LinkedIn, який дійсно працює?</h3>
                                <p class="text-gray-700 mb-4">
                                    Саме це ми досліджували вчора під час нашого семінару в прямому ефірі в 
                                    Дандерюді з Яною Літвіновою — і це було потужно!
                                </p>
                                <a href="#" class="text-blue-600 hover:underline">Детальніше →</a>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-4">Виставковий та конгрес-центр Kistamässan</h3>
                                <p class="text-gray-700 mb-4">
                                    Вчора ми у SVIT UA мали можливість відвідати Stockholm Tech Show 2025 у 
                                    виставковому та конгрес-центрі Kistamässan — динамічну подію, яка зібрала світових лідерів у галузі штучного інтелекту.
                                </p>
                                <a href="#" class="text-blue-600 hover:underline">Детальніше →</a>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-xl font-bold mb-4">Вдячний за натхненний літературний вечір у Стокгольмі!</h3>
                                <p class="text-gray-700 mb-4">
                                    Сьогодні команда SVIT UA мала честь відвідати презентацію «Світу Злати» — 
                                    зворушливої історії про дитинство, перерване війною, та пошуки нового дому у Швеції.
                                </p>
                                <a href="#" class="text-blue-600 hover:underline">Детальніше →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Join Section -->
            <section id="join" class="py-20 bg-gray-50">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold text-center mb-16">Приєднатися до справи</h2>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                            <h3 class="text-xl font-bold mb-4">Стати волонтером</h3>
                            <p class="text-gray-700 mb-6">
                                Допомагай іншим, ділись знаннями та розвивай спільноту разом з нами. 
                                Разом ми створюємо щось важливе для всієї спільноти.
                            </p>
                            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                Стати волонтером
                            </button>
                        </div>
                        
                        <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                            <h3 class="text-xl font-bold mb-4">Жертвувати</h3>
                            <p class="text-gray-700 mb-6">
                                Допоможи розвивати платформу — зроби свій внесок уже сьогодні. 
                                Кожна пожертва — це крок до більшої користі для всіх.
                            </p>
                            <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                                Жертвувати
                            </button>
                        </div>
                        
                        <div class="bg-white p-8 rounded-lg shadow-sm text-center">
                            <h3 class="text-xl font-bold mb-4">Стати членом організації</h3>
                            <p class="text-gray-700 mb-6">
                                Приєднуйся до організації — розвивайся та впливай! 
                                Разом ми можемо зробити більший внесок в наше майбутнє.
                            </p>
                            <button class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                                Стати членом
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Campaign Section -->
            <section class="py-20">
                <div class="container mx-auto px-4">
                    <div class="bg-blue-600 text-white rounded-lg p-12 text-center">
                        <h2 class="text-3xl font-bold mb-6">Збір на доставку вантажівки реабілітаційного обладнання</h2>
                        <p class="text-xl mb-8">Разом допоможемо українським медичним та реабілітаційним центрам</p>
                        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Підтримати проект
                        </button>
                    </div>
                </div>
            </section>

            <!-- Petition Section -->
            <section class="py-20 bg-gray-50">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-8">Ініціатори петиції</h2>
                    <p class="text-xl mb-8">
                        Не залишайте українців у невизначеності – Забезпечте їхнє майбутнє у Швеції після 2026 року
                    </p>
                    
                    <div class="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">11,000+</div>
                            <div class="text-gray-700">Підписів</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">15</div>
                            <div class="text-gray-700">Шведських і Українських організацій</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">✓</div>
                            <div class="text-gray-700">Діалог із урядом Швеції</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer id="contact" class="bg-gray-800 text-white py-16">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-2xl font-bold mb-4">SVIT UA</h3>
                            <p class="text-gray-300 mb-4">
                                SVIT UA är ett team som förenar människor som tror på kraften i stöd, solidaritet och handling.
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Kontakter</h4>
                            <p class="text-gray-300 mb-2">+467 37 570 310</p>
                            <a href="mailto:info@svitua.se" class="text-blue-400 hover:underline">info@svitua.se</a>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Sociala medier</h4>
                            <div class="space-y-2">
                                <a href="#" class="text-blue-400 hover:underline block">Instagram</a>
                                <a href="#" class="text-blue-400 hover:underline block">TikTok</a>
                                <a href="#" class="text-blue-400 hover:underline block">Facebook</a>
                                <a href="#" class="text-blue-400 hover:underline block">Telegram</a>
                                <a href="#" class="text-blue-400 hover:underline block">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 SVIT UA</p>
                    </div>
                </div>
            </footer>
        `
    }
})

// Add smooth scrolling for navigation links
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
        }
    }
})
