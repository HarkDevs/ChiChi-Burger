/* =====================================================================
   ⚙️  CONFIG — TOKEN VA CHAT_ID NI O'ZGARTIRING!
   ===================================================================== */
const CONFIG = {
  BOT_TOKEN: '9079198090:AAFLCOSpBORYJ3yNHZzjNq3V77G6FBZcfk4',
  CHAT_ID: '6037908409',   // @userinfobot orqali oling!
  DELIVERY_FEE: 15000,
  PHONE: '+998 94 921 65 10',
  ADDRESS: 'Sebzor dahasi, 4',
};

/* =====================================================================
   🌍  TRANSLATIONS
   ===================================================================== */
const T = {
  uz: {
    currency: "so'm",
    nav_home: "Bosh sahifa", nav_menu: "Menyu", nav_fav: "Sevimlilar", nav_about: "Aloqa",
    hero_badge: "Yetkazib berish 30 daqiqada",
    hero_title1: "Mazali", hero_title2: "Burgerlar", hero_title3: "Siz uchun!",
    hero_desc: "Yangi go'sht, issiq non va maxsus souslar bilan tayyorlangan haqiqiy ta'm. Hoziroq buyurtma bering!",
    hero_cta1: "Buyurtma berish", hero_cta2: "Menyuni ko'rish",
    tag_fast: "Tez yetkazish", tag_fresh: "100% Yangi",
    f1_t: "Tez yetkazish", f1_d: "30 daqiqada eshigingizgacha",
    f2_t: "Sifatli mahsulot", f2_d: "Faqat yangi masalliqlar",
    f3_t: "Ustalar tayyorlaydi", f3_d: "Tajribali oshpazlar",
    f4_t: "Qulay to'lov", f4_d: "Naqd yoki karta orqali",
    featured_eyebrow: "Tanlangan", featured_title: "Mashhur taomlar",
    featured_desc: "Mijozlarimiz eng ko'p buyurtma qiladigan taomlar",
    menu_eyebrow: "Bizning menyu", menu_title: "To'liq menyu",
    menu_desc: "Har bir luqmada mehr bilan tayyorlangan taomlar",
    cat_all: "Barchasi", cat_burgers: "Burgerlar", cat_sides: "Gazaklar",
    cat_drinks: "Ichimliklar", cat_combos: "Kombo", cat_desserts: "Desertlar",
    fav_eyebrow: "Sevimlilar", fav_title: "Sizning sevimli taomlaringiz",
    fav_desc: "Yurakcha bilan belgilangan taomlar",
    fav_empty_t: "Sevimlilar yo'q", fav_empty_d: "Menyudan taomlarni yurakcha bilan belgilang",
    about_eyebrow: "Nega biz?", about_title: "ChiChi Burger — mazali ta'm, sifatli xizmat",
    about_desc: "Biz har bir burgerni yangi go'shtdan, yangi sabzavotlardan va o'zimizning maxsus souslardan tayyorlaymiz. Mijozlarimizning roziligi — bizning eng katta yutug'imiz.",
    about_li1: "Har kuni yangi masalliqlar", about_li2: "Tez va sifatli yetkazib berish",
    about_li3: "Qulay narxlar va aksiyalar", about_li4: "Halol va sifatli mahsulotlar",
    contact_eyebrow: "Aloqa", contact_title: "Biz bilan bog'laning",
    contact_hours_t: "Ish vaqti", contact_hours_d: "Har kuni 10:00 — 23:00",
    contact_addr_t: "Manzil", contact_phone_t: "Telefon",
    footer_tag: "Eng mazali burgerlar shu yerda!",
    footer_rights: "Barcha huquqlar himoyalangan.",
    cart_title: "Savat", cart_empty_t: "Savat bo'sh",
    cart_empty_d: "Menyudan mazali taom tanlang",
    cart_subtotal: "Mahsulotlar", cart_total: "Jami", cart_delivery: "Yetkazish",
    cart_checkout: "Buyurtma berish", cart_continue: "Xaridni davom ettirish",
    cart_clear: "Savatni tozalash", cart_items_title: "Savatdagi mahsulotlar",
    checkout_title: "Buyurtma berish", type_delivery: "Yetkazib berish",
    type_pickup: "Olib ketish", form_name: "Ismingiz *",
    form_phone: "Telefon raqam *", form_address: "Manzil *",
    form_comment: "Izoh (ixtiyoriy)", form_submit: "Buyurtmani yuborish",
    form_your_info: "Sizning ma'lumotlaringiz", form_delivery_info: "Yetkazish ma'lumotlari",
    err_required: "To'ldiring", err_phone: "Noto'g'ri raqam",
    sum_products: "Mahsulotlar", sum_delivery: "Yetkazish", sum_total: "Jami",
    success_t: "Buyurtma qabul qilindi!",
    success_d: "Tez orada operatorimiz siz bilan bog'lanadi. Buyurtmangiz uchun rahmat!",
    success_home: "Bosh sahifaga qaytish", success_close: "Yopish",
    toast_added: "Savatga qo'shildi", toast_removed: "O'chirildi",
    toast_fav_added: "Sevimlilarga qo'shildi", toast_fav_removed: "Sevimlilardan olib tashlandi",
    toast_sent: "Buyurtma yuborildi!", toast_err: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    toast_bot_err: "Bot sozlanmagan. Administrator bilan bog'laning.",
    toast_cart_cleared: "Savat tozalandi",
    login_tab: "Kirish", register_tab: "Ro'yxatdan o'tish",
    login_title: "Xush kelibsiz!", login_sub: "Hisobingizga kiring",
    register_title: "Ro'yxatdan o'ting", register_sub: "Yangi hisob yarating",
    login_phone: "Telefon raqam", login_password: "Parol",
    register_name: "Ismingiz", register_submit: "Ro'yxatdan o'tish",
    login_submit: "Kirish", login_no_acc: "Hisobingiz yo'qmi?",
    login_have_acc: "Hisobingiz bormi?",
    login_switch: "Ro'yxatdan o'tish", register_switch: "Kirish",
    err_user_exists: "Bu raqam allaqachon ro'yxatdan o'tgan",
    err_invalid: "Raqam yoki parol noto'g'ri",
    err_password_short: "Parol kamida 4 ta belgi bo'lishi kerak",
    toast_welcome: "Xush kelibsiz", toast_registered: "Muvaffaqiyatli ro'yxatdan o'tdingiz",
    toast_loggedout: "Hisobdan chiqdingiz",
    profile_title: "Mening hisobim",
    profile_addresses: "Manzillarim", profile_add_address: "+ Manzil qo'shish",
    profile_logout: "Hisobdan chiqish", profile_no_addresses: "Hali manzil qo'shilmagan",
    profile_address_label: "Manzil nomi (Uy, Ish...)",
    profile_address_text: "To'liq manzil",
    profile_set_default: "Asosiy qilib belgilash",
    profile_save: "Saqlash", profile_cancel: "Bekor qilish",
    profile_delete_confirm: "Manzilni o'chirmoqchimisiz?",
    profile_default: "Asosiy",
    profile_orders_history: "Buyurtmalar tarixi tez orada...",
    add_address_modal: "Yangi manzil qo'shish",
    order_new: "YANGI BUYURTMA",
    order_name: "Ism", order_phone: "Telefon", order_addr: "Manzil",
    order_type: "Turi", order_comment: "Izoh", order_items: "Buyurtmalar",
    order_total: "Jami", order_time: "Vaqt",
    type_delivery_msg: "Yetkazib berish", type_pickup_msg: "Olib ketish",
    pcs: "dona", goto_menu: "Menyuga o'tish",
    saved_addresses: "Saqlangan manzillar:",
  },
  ru: {
    currency: "сум",
    nav_home: "Главная", nav_menu: "Меню", nav_fav: "Избранное", nav_about: "Контакты",
    hero_badge: "Доставка за 30 минут",
    hero_title1: "Вкусные", hero_title2: "Бургеры", hero_title3: "Для вас!",
    hero_desc: "Настоящий вкус — свежее мясо, горячая булочка и фирменные соусы. Заказывайте прямо сейчас!",
    hero_cta1: "Заказать", hero_cta2: "Смотреть меню",
    tag_fast: "Быстрая доставка", tag_fresh: "100% Свежее",
    f1_t: "Быстрая доставка", f1_d: "До двери за 30 минут",
    f2_t: "Качественный продукт", f2_d: "Только свежие ингредиенты",
    f3_t: "Готовят мастера", f3_d: "Опытные повара",
    f4_t: "Удобная оплата", f4_d: "Наличными или картой",
    featured_eyebrow: "Избранное", featured_title: "Популярные блюда",
    featured_desc: "Блюда, которые заказывают чаще всего",
    menu_eyebrow: "Наше меню", menu_title: "Полное меню",
    menu_desc: "Блюда, приготовленные с любовью в каждом кусочке",
    cat_all: "Все", cat_burgers: "Бургеры", cat_sides: "Закуски",
    cat_drinks: "Напитки", cat_combos: "Комбо", cat_desserts: "Десерты",
    fav_eyebrow: "Избранное", fav_title: "Ваши любимые блюда",
    fav_desc: "Блюда, отмеченные сердечком",
    fav_empty_t: "Избранного нет", fav_empty_d: "Отметьте блюда сердечком в меню",
    about_eyebrow: "Почему мы?", about_title: "ChiChi Burger — вкус и качество",
    about_desc: "Мы готовим каждый бургер из свежего мяса, свежих овощей и наших фирменных соусов. Довольные клиенты — наша главная награда.",
    about_li1: "Свежие ингредиенты каждый день", about_li2: "Быстрая и качественная доставка",
    about_li3: "Удобные цены и акции", about_li4: "Халяльные и качественные продукты",
    contact_eyebrow: "Контакты", contact_title: "Свяжитесь с нами",
    contact_hours_t: "Часы работы", contact_hours_d: "Ежедневно 10:00 — 23:00",
    contact_addr_t: "Адрес", contact_phone_t: "Телефон",
    footer_tag: "Самые вкусные бургеры здесь!",
    footer_rights: "Все права защищены.",
    cart_title: "Корзина", cart_empty_t: "Корзина пуста",
    cart_empty_d: "Выберите блюдо из меню",
    cart_subtotal: "Товары", cart_total: "Итого", cart_delivery: "Доставка",
    cart_checkout: "Оформить заказ", cart_continue: "Продолжить покупки",
    cart_clear: "Очистить корзину", cart_items_title: "Товары в корзине",
    checkout_title: "Оформление заказа", type_delivery: "Доставка",
    type_pickup: "Самовывоз", form_name: "Ваше имя *",
    form_phone: "Телефон *", form_address: "Адрес *",
    form_comment: "Комментарий (необязательно)", form_submit: "Отправить заказ",
    form_your_info: "Ваши данные", form_delivery_info: "Данные доставки",
    err_required: "Заполните поле", err_phone: "Неверный номер",
    sum_products: "Товары", sum_delivery: "Доставка", sum_total: "Итого",
    success_t: "Заказ принят!",
    success_d: "Наш оператор скоро свяжется с вами. Спасибо за заказ!",
    success_home: "На главную", success_close: "Закрыть",
    toast_added: "Добавлено в корзину", toast_removed: "Удалено",
    toast_fav_added: "Добавлено в избранное", toast_fav_removed: "Удалено из избранного",
    toast_sent: "Заказ отправлен!", toast_err: "Произошла ошибка. Попробуйте снова.",
    toast_bot_err: "Бот не настроен. Свяжитесь с администратором.",
    toast_cart_cleared: "Корзина очищена",
    login_tab: "Вход", register_tab: "Регистрация",
    login_title: "Добро пожаловать!", login_sub: "Войдите в аккаунт",
    register_title: "Регистрация", register_sub: "Создайте новый аккаунт",
    login_phone: "Телефон", login_password: "Пароль",
    register_name: "Ваше имя", register_submit: "Зарегистрироваться",
    login_submit: "Войти", login_no_acc: "Нет аккаунта?",
    login_have_acc: "Есть аккаунт?",
    login_switch: "Регистрация", register_switch: "Вход",
    err_user_exists: "Этот номер уже зарегистрирован",
    err_invalid: "Неверный номер или пароль",
    err_password_short: "Пароль минимум 4 символа",
    toast_welcome: "Добро пожаловать", toast_registered: "Вы успешно зарегистрированы",
    toast_loggedout: "Вы вышли из аккаунта",
    profile_title: "Мой аккаунт",
    profile_addresses: "Мои адреса", profile_add_address: "+ Добавить адрес",
    profile_logout: "Выйти", profile_no_addresses: "Адресов ещё нет",
    profile_address_label: "Название (Дом, Работа...)",
    profile_address_text: "Полный адрес",
    profile_set_default: "Сделать основным",
    profile_save: "Сохранить", profile_cancel: "Отмена",
    profile_delete_confirm: "Удалить адрес?",
    profile_default: "Основной",
    profile_orders_history: "История заказов скоро...",
    add_address_modal: "Добавить новый адрес",
    order_new: "НОВЫЙ ЗАКАЗ",
    order_name: "Имя", order_phone: "Телефон", order_addr: "Адрес",
    order_type: "Тип", order_comment: "Комментарий", order_items: "Заказы",
    order_total: "Итого", order_time: "Время",
    type_delivery_msg: "Доставка", type_pickup_msg: "Самовывоз",
    pcs: "шт", goto_menu: "Перейти в меню",
    saved_addresses: "Сохранённые адреса:",
  },
  en: {
    currency: "UZS",
    nav_home: "Home", nav_menu: "Menu", nav_fav: "Favorites", nav_about: "Contact",
    hero_badge: "Delivery in 30 minutes",
    hero_title1: "Delicious", hero_title2: "Burgers", hero_title3: "For you!",
    hero_desc: "Real taste with fresh meat, warm buns and signature sauces. Order now!",
    hero_cta1: "Order now", hero_cta2: "View menu",
    tag_fast: "Fast delivery", tag_fresh: "100% Fresh",
    f1_t: "Fast delivery", f1_d: "To your door in 30 minutes",
    f2_t: "Quality products", f2_d: "Only fresh ingredients",
    f3_t: "Crafted by masters", f3_d: "Experienced chefs",
    f4_t: "Easy payment", f4_d: "Cash or card",
    featured_eyebrow: "Featured", featured_title: "Popular dishes",
    featured_desc: "Most ordered dishes by our customers",
    menu_eyebrow: "Our menu", menu_title: "Full menu",
    menu_desc: "Dishes prepared with love in every bite",
    cat_all: "All", cat_burgers: "Burgers", cat_sides: "Sides",
    cat_drinks: "Drinks", cat_combos: "Combos", cat_desserts: "Desserts",
    fav_eyebrow: "Favorites", fav_title: "Your favorite dishes",
    fav_desc: "Dishes marked with a heart",
    fav_empty_t: "No favorites", fav_empty_d: "Mark dishes with a heart in the menu",
    about_eyebrow: "Why us?", about_title: "ChiChi Burger — taste & quality",
    about_desc: "We make every burger with fresh meat, fresh vegetables and our signature sauces. Customer satisfaction is our greatest reward.",
    about_li1: "Fresh ingredients daily", about_li2: "Fast and quality delivery",
    about_li3: "Fair prices and promotions", about_li4: "Halal and quality products",
    contact_eyebrow: "Contact", contact_title: "Get in touch",
    contact_hours_t: "Working hours", contact_hours_d: "Daily 10:00 — 23:00",
    contact_addr_t: "Address", contact_phone_t: "Phone",
    footer_tag: "The tastiest burgers are here!",
    footer_rights: "All rights reserved.",
    cart_title: "Cart", cart_empty_t: "Cart is empty",
    cart_empty_d: "Pick a tasty item from the menu",
    cart_subtotal: "Products", cart_total: "Total", cart_delivery: "Delivery",
    cart_checkout: "Checkout", cart_continue: "Continue shopping",
    cart_clear: "Clear cart", cart_items_title: "Items in cart",
    checkout_title: "Checkout", type_delivery: "Delivery",
    type_pickup: "Pickup", form_name: "Your name *",
    form_phone: "Phone *", form_address: "Address *",
    form_comment: "Comment (optional)", form_submit: "Send order",
    form_your_info: "Your information", form_delivery_info: "Delivery information",
    err_required: "Required", err_phone: "Invalid number",
    sum_products: "Products", sum_delivery: "Delivery", sum_total: "Total",
    success_t: "Order received!",
    success_d: "Our operator will contact you soon. Thank you for your order!",
    success_home: "Back to home", success_close: "Close",
    toast_added: "Added to cart", toast_removed: "Removed",
    toast_fav_added: "Added to favorites", toast_fav_removed: "Removed from favorites",
    toast_sent: "Order sent!", toast_err: "Something went wrong. Try again.",
    toast_bot_err: "Bot not configured. Contact administrator.",
    toast_cart_cleared: "Cart cleared",
    login_tab: "Login", register_tab: "Register",
    login_title: "Welcome back!", login_sub: "Sign in to your account",
    register_title: "Sign up", register_sub: "Create a new account",
    login_phone: "Phone number", login_password: "Password",
    register_name: "Your name", register_submit: "Register",
    login_submit: "Sign in", login_no_acc: "No account?",
    login_have_acc: "Have an account?",
    login_switch: "Register", register_switch: "Sign in",
    err_user_exists: "This phone is already registered",
    err_invalid: "Invalid phone or password",
    err_password_short: "Password must be at least 4 characters",
    toast_welcome: "Welcome", toast_registered: "Registered successfully",
    toast_loggedout: "Logged out",
    profile_title: "My account",
    profile_addresses: "My addresses", profile_add_address: "+ Add address",
    profile_logout: "Logout", profile_no_addresses: "No addresses yet",
    profile_address_label: "Label (Home, Work...)",
    profile_address_text: "Full address",
    profile_set_default: "Set as default",
    profile_save: "Save", profile_cancel: "Cancel",
    profile_delete_confirm: "Delete this address?",
    profile_default: "Default",
    profile_orders_history: "Order history coming soon...",
    add_address_modal: "Add new address",
    order_new: "NEW ORDER",
    order_name: "Name", order_phone: "Phone", order_addr: "Address",
    order_type: "Type", order_comment: "Comment", order_items: "Items",
    order_total: "Total", order_time: "Time",
    type_delivery_msg: "Delivery", type_pickup_msg: "Pickup",
    pcs: "pcs", goto_menu: "Go to menu",
    saved_addresses: "Saved addresses:",
  }
};

/* ---------- PRODUCTS (rasmlar bilan) ---------- */
const PRODUCTS = [
  // Burgers
  {id:'classic', price:35000, emoji:'🍔', cat:'burgers', badge:'hit', name:{uz:'ChiChi Classic',ru:'ChiChi Classic',en:'ChiChi Classic'}, desc:{uz:"Klassik mol go'shtli burger, yangi sabzavotlar",ru:'Классический бургер с говядиной и овощами',en:'Classic beef burger with fresh veggies'}, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop'}, // Classic burger
  {id:'cheese', price:42000, emoji:'🧀', cat:'burgers', name:{uz:'Chizburger',ru:'Чизбургер',en:'Cheeseburger'}, desc:{uz:'Eritilgan pishloqli mazali burger',ru:'Вкусный бургер с плавленым сыром',en:'Tasty burger with melted cheese'}, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop'}, // Cheeseburger
  {id:'double', price:55000, emoji:'🍔', cat:'burgers', badge:'hit', name:{uz:'Double Smash',ru:'Double Smash',en:'Double Smash'}, desc:{uz:"Ikki qavat go'sht, ikki barobar lazzat",ru:'Двойная котлета — двойное удовольствие',en:'Double patty — double pleasure'}, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop'}, // Double smash burger
  {id:'chicken', price:38000, emoji:'🍗', cat:'burgers', name:{uz:'Tovuqli burger',ru:'Чикен Бургер',en:'Chicken Burger'}, desc:{uz:"Yumshoq tovuq go'shti bilan",ru:'С нежным куриным мясом',en:'With tender chicken'}, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&h=400&fit=crop'}, // Chicken burger
  {id:'spicy', price:40000, emoji:'🌶️', cat:'burgers', badge:'new', name:{uz:'Achchiq burger',ru:'Spicy Burger',en:'Spicy Burger'}, desc:{uz:'Achchiq sevuvchilar uchun maxsus',ru:'Специально для любителей острого',en:'Specially for spicy lovers'}, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop'}, // Spicy burger
  {id:'bbq', price:45000, emoji:'🍖', cat:'burgers', name:{uz:'BBQ Burger',ru:'BBQ Бургер',en:'BBQ Burger'}, desc:{uz:"BBQ sousli, dudlangan ta'm",ru:'С соусом BBQ и копчёным вкусом',en:'With BBQ sauce and smoky flavor'}, image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&h=400&fit=crop'}, // BBQ burger
  {id:'mushroom', price:48000, emoji:'🍄', cat:'burgers', name:{uz:"Qo'ziqorinli burger",ru:'Бургер с грибами',en:'Mushroom Burger'}, desc:{uz:"Shveytsar pishloq va qo'ziqorin bilan",ru:'Со швейцарским сыром и грибами',en:'With Swiss cheese and mushrooms'}, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&h=400&fit=crop'}, // Mushroom burger
  {id:'bacon', price:50000, emoji:'🥓', cat:'burgers', name:{uz:'Bekonli burger',ru:'Бургер с беконом',en:'Bacon Burger'}, desc:{uz:'Qarsildoq bekon va kotletlar',ru:'Хрустящий бекон и котлеты',en:'Crispy bacon and patties'}, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&h=400&fit=crop'}, // Bacon burger
  {id:'veggie', price:36000, emoji:'🥬', cat:'burgers', badge:'new', name:{uz:'Vegetarian burger',ru:'Вегетарианский бургер',en:'Veggie Burger'}, desc:{uz:'Sabzavotli kotlet bilan',ru:'С овощной котлетой',en:'With vegetable patty'}, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=400&fit=crop'}, // Veggie burger
  
  // Sides
  {id:'fries', price:18000, emoji:'🍟', cat:'sides', name:{uz:'Fri kartoshka',ru:'Картофель фри',en:'Fries'}, desc:{uz:'Tiniq qovurilgan kartoshka',ru:'Хрустящий картофель',en:'Crispy fried potatoes'}, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop'}, // French fries
  {id:'cheese_fries', price:25000, emoji:'🧀', cat:'sides', name:{uz:'Pishloqli fri',ru:'Картофель с сыром',en:'Cheesy Fries'}, desc:{uz:'Eritilgan pishloq bilan',ru:'С плавленым сыром',en:'With melted cheese'}, image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&h=400&fit=crop'}, // Cheese fries
  {id:'onion_rings', price:22000, emoji:'🧅', cat:'sides', name:{uz:'Piyoz halqalari',ru:'Луковые кольца',en:'Onion Rings'}, desc:{uz:'Tiniq qovurilgan piyoz',ru:'Хрустящие луковые кольца',en:'Crispy fried onion rings'}, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&h=400&fit=crop'}, // Onion rings
  {id:'nuggets', price:24000, emoji:'🍗', cat:'sides', name:{uz:'Tovuq nagetslari',ru:'Куриные наггетсы',en:'Chicken Nuggets'}, desc:{uz:'8 dona, sous bilan',ru:'8 шт, с соусом',en:'8 pcs, with sauce'}, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop'}, // Chicken nuggets
  {id:'wings', price:35000, emoji:'🔥', cat:'sides', name:{uz:'Bufallo qanotchalari',ru:'Крылышки Баффало',en:'Buffalo Wings'}, desc:{uz:'Achchiq sousli qanotchalar',ru:'Крылышки в остром соусе',en:'Spicy buffalo wings'}, image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop'}, // Buffalo wings
  
  // Drinks
  {id:'cola', price:12000, emoji:'🥤', cat:'drinks', name:{uz:'Coca-Cola',ru:'Coca-Cola',en:'Coca-Cola'}, desc:{uz:'Sovuq gazlangan ichimlik 0.5L',ru:'Холодный газированный напиток 0.5л',en:'Cold soft drink 0.5L'}, image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&h=400&fit=crop'}, // Cola
  {id:'fanta', price:12000, emoji:'🍊', cat:'drinks', name:{uz:'Fanta',ru:'Fanta',en:'Fanta'}, desc:{uz:'Apelsinli gazli ichimlik 0.5L',ru:'Апельсиновый напиток 0.5л',en:'Orange soda 0.5L'}, image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&h=400&fit=crop'}, // Orange soda
  {id:'sprite', price:12000, emoji:'🥤', cat:'drinks', name:{uz:'Sprite',ru:'Sprite',en:'Sprite'}, desc:{uz:'Limonli gazli ichimlik 0.5L',ru:'Лимонный напиток 0.5л',en:'Lemon soda 0.5L'}, image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&h=400&fit=crop'}, // Lemon soda
  {id:'shake', price:22000, emoji:'🥛', cat:'drinks', name:{uz:'Milkshake',ru:'Милкшейк',en:'Milkshake'}, desc:{uz:'Yumshoq va shirin sut kokteyli',ru:'Нежный и сладкий молочный коктейль',en:'Smooth and sweet milkshake'}, image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=400&fit=crop'}, // Milkshake
  {id:'lemonade', price:15000, emoji:'🍋', cat:'drinks', badge:'new', name:{uz:'Limonad',ru:'Лимонад',en:'Lemonade'}, desc:{uz:'Uy sharoitida tayyorlangan',ru:'Домашний лимонад',en:'Homemade lemonade'}, image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=600&h=400&fit=crop'}, // Lemonade
  {id:'coffee', price:18000, emoji:'☕', cat:'drinks', name:{uz:'Kofe',ru:'Кофе',en:'Coffee'}, desc:{uz:'Issiq Americano',ru:'Горячий Американо',en:'Hot Americano'}, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop'}, // Coffee
  
  // Combos
  {id:'combo_classic', price:65000, emoji:'🍱', cat:'combos', badge:'hit', name:{uz:'Kombo Classic',ru:'Комбо Classic',en:'Combo Classic'}, desc:{uz:'Burger + Fri + Ichimlik',ru:'Бургер + Фри + Напиток',en:'Burger + Fries + Drink'}, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop'}, // Combo meal
  {id:'combo_double', price:85000, emoji:'🍱', cat:'combos', name:{uz:'Kombo Double',ru:'Комбо Double',en:'Combo Double'}, desc:{uz:'Double burger + Fri + Ichimlik',ru:'Дабл бургер + Фри + Напиток',en:'Double burger + Fries + Drink'}, image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&h=400&fit=crop'}, // Double combo
  {id:'combo_family', price:150000, emoji:'🍱', cat:'combos', name:{uz:'Oilaviy kombo',ru:'Семейное комбо',en:'Family Combo'}, desc:{uz:'4 burger + 2 fri + 4 ichimlik',ru:'4 бургера + 2 фри + 4 напитка',en:'4 burgers + 2 fries + 4 drinks'}, image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=600&h=400&fit=crop'}, // Family combo
  {id:'combo_kids', price:45000, emoji:'🍱', cat:'combos', badge:'new', name:{uz:'Bolalar kombosi',ru:'Детское комбо',en:'Kids Combo'}, desc:{uz:'Kichik burger + Fri + Sharbat',ru:'Мини бургер + Фри + Сок',en:'Mini burger + Fries + Juice'}, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=400&fit=crop'}, // Kids combo
  
  // Desserts
  {id:'ice_cream', price:15000, emoji:'🍦', cat:'desserts', name:{uz:'Muzqaymoq',ru:'Мороженое',en:'Ice Cream'}, desc:{uz:'Vanil, shokolad, qulupnay',ru:'Ваниль, шоколад, клубника',en:'Vanilla, chocolate, strawberry'}, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop'}, // Ice cream
  {id:'brownie', price:20000, emoji:'🍫', cat:'desserts', name:{uz:'Brauni',ru:'Брауни',en:'Brownie'}, desc:{uz:'Shokoladli yumshoq kek',ru:'Мягкий шоколадный пирог',en:'Soft chocolate cake'}, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop'}, // Brownie
  {id:'donut', price:12000, emoji:'🍩', cat:'desserts', badge:'new', name:{uz:'Donut',ru:'Пончик',en:'Donut'}, desc:{uz:'Shakar kukunli donut',ru:'Пончик в сахарной пудре',en:'Donut with powdered sugar'}, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop'}, // Donut
  {id:'cheesecake', price:25000, emoji:'🍰', cat:'desserts', name:{uz:'Chizkeyk',ru:'Чизкейк',en:'Cheesecake'}, desc:{uz:'New York uslubidagi',ru:'В стиле Нью-Йорк',en:'New York style'}, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop'}, // Cheesecake
];

const CATEGORIES = ['all', 'burgers', 'sides', 'drinks', 'combos', 'desserts'];

function productImage(p) {
  // Agar mahsulotda image mavjud bo'lsa, uni qaytaramiz
  if (p.image) return p.image;
  
  // Fallback: SVG placeholder (avvalgi kod)
  const colors = {
    burgers:'#ff6b35', sides:'#ffb703', drinks:'#22d3ee',
    combos:'#a855f7', desserts:'#ec4899',
  };
  const c = colors[p.cat] || '#ff6b35';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200" role="img" aria-label="${tr(p.name)}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c}" stop-opacity=".9"/>
      <stop offset="100%" stop-color="${c}" stop-opacity=".5"/>
    </linearGradient></defs>
    <rect width="320" height="200" fill="url(#g)"/>
    <circle cx="160" cy="90" r="52" fill="#fff" opacity=".22"/>
    <circle cx="160" cy="90" r="34" fill="#fff" opacity=".35"/>
    <text x="160" y="180" text-anchor="middle" font-family="Outfit,sans-serif" font-size="16" fill="#fff" opacity=".9">${tr(p.name)}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function productCardHTML(p, opts={}) {
  const fav = favorites.has(p.id);
  const badge = p.badge ? `<span class="product-badge">${t('badge_'+p.badge)}</span>` : '';
  
  // Rasm elementini tayyorlash
  const imgHTML = p.image
    ? `<img src="${p.image}" alt="${tr(p.name)}" width="320" height="200" loading="lazy" decoding="async" class="product-thumb" 
         onerror="this.style.display='none'; this.parentElement.querySelector('.product-emoji').style.display='grid';">`
    : `<div class="product-emoji" style="display:grid; place-items:center; font-size:4rem; height:100%;">${p.emoji}</div>`;
  
  return `
  <article class="product-card">
    <div class="product-img">
      ${badge}
      ${opts.showFav !== false ? `
        <button class="fav-btn ${fav?'active':''}" data-fav="${p.id}" type="button"
          aria-label="${fav?t('toast_fav_removed'):t('favorite')}" aria-pressed="${fav?'true':'false'}">
          <span class="heart" aria-hidden="true">${fav?'❤️':'🤍'}</span>
        </button>` : ''}
      ${imgHTML}
      ${p.image ? `<div class="product-emoji" style="display:none; position:absolute; inset:0; place-items:center; font-size:4rem;">${p.emoji}</div>` : ''}
    </div>
    <div class="product-body">
      <h3>${tr(p.name)}</h3>
      <p class="desc">${tr(p.desc)}</p>
      <div class="product-footer">
        <span class="price">${formatPrice(p.price)}</span>
        ${opts.showRemove
          ? `<button class="add-btn" data-remove-fav="${p.id}" type="button" style="background:var(--err);font-size:1rem" aria-label="${t('remove')}">✕</button>`
          : `<button class="add-btn" data-add="${p.id}" type="button" aria-label="${t('add')}">+</button>`}
      </div>
    </div>
  </article>`;
}

/* =====================================================================
   📦  STATE
   ===================================================================== */
const state = {
  lang: localStorage.getItem('chichi_lang') || 'uz',
  theme: localStorage.getItem('chichi_theme') || 'dark',
  cart: JSON.parse(localStorage.getItem('chichi_cart') || '{}'),
  favorites: JSON.parse(localStorage.getItem('chichi_favorites') || '[]'),
};

/* =====================================================================
   🔐  AUTH
   ===================================================================== */
const Auth = {
  _hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    return 'h' + Math.abs(h).toString(36);
  },
  getUsers() {
    try { return JSON.parse(localStorage.getItem('chichi_users') || '[]'); } catch { return []; }
  },
  saveUsers(u) { localStorage.setItem('chichi_users', JSON.stringify(u)); },
  current() {
    try { return JSON.parse(localStorage.getItem('chichi_user') || 'null'); } catch { return null; }
  },
  setCurrent(u) {
    if (u) localStorage.setItem('chichi_user', JSON.stringify(u));
    else localStorage.removeItem('chichi_user');
  },
  register(name, phone, password) {
    if (!name || !phone || !password) throw new Error('required');
    if (password.length < 4) throw new Error('short_password');
    const users = this.getUsers();
    if (users.some(u => u.phone === phone)) throw new Error('exists');
    const user = {
      id: 'u' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      password: this._hash(password),
      addresses: [],
      createdAt: Date.now(),
    };
    users.push(user);
    this.saveUsers(users);
    this.setCurrent(user);
    return user;
  },
  login(phone, password) {
    const users = this.getUsers();
    const user = users.find(u => u.phone === phone.trim() && u.password === this._hash(password));
    if (!user) throw new Error('invalid');
    this.setCurrent(user);
    return user;
  },
  logout() { this.setCurrent(null); },
  update(user) {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx >= 0) {
      users[idx] = user;
      this.saveUsers(users);
      this.setCurrent(user);
    }
    return user;
  },
  addAddress(label, address) {
    const user = this.current();
    if (!user) throw new Error('not_logged');
    const newAddr = {
      id: 'a' + Date.now(),
      label: label.trim() || 'Manzil',
      address: address.trim(),
      isDefault: user.addresses.length === 0,
    };
    user.addresses.push(newAddr);
    this.update(user);
    return newAddr;
  },
  removeAddress(id) {
    const user = this.current();
    if (!user) return;
    user.addresses = user.addresses.filter(a => a.id !== id);
    if (user.addresses.length && !user.addresses.some(a => a.isDefault)) {
      user.addresses[0].isDefault = true;
    }
    this.update(user);
  },
  setDefaultAddress(id) {
    const user = this.current();
    if (!user) return;
    user.addresses.forEach(a => { a.isDefault = a.id === id; });
    this.update(user);
  },
  defaultAddress() {
    const user = this.current();
    if (!user || !user.addresses.length) return null;
    return user.addresses.find(a => a.isDefault) || user.addresses[0];
  }
};

/* =====================================================================
   🛠  HELPERS
   ===================================================================== */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const t = (k) => T[state.lang][k] || T.uz[k] || k;
const tr = (v) => {
  if (!v) return '';
  if (typeof v === 'string') return v;
  return v[state.lang] || v.uz || v.en || '';
};
const formatPrice = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ' + t('currency');
const findProduct = (id) => PRODUCTS.find(p => p.id === id);

function saveCart() { localStorage.setItem('chichi_cart', JSON.stringify(state.cart)); }
function saveFavs() { localStorage.setItem('chichi_favorites', JSON.stringify(state.favorites)); }

/* =====================================================================
   🍞  TOAST
   ===================================================================== */
function showToast(msg, type = 'info') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  let container = $('#toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* =====================================================================
   🛒  CART
   ===================================================================== */
function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveCart();
  updateBadge();
  showToast(t('toast_added'), 'success');
  if (location.pathname.includes('cart.html')) renderCartPage();
}
function removeFromCart(id) {
  delete state.cart[id];
  saveCart();
  updateBadge();
  showToast(t('toast_removed'), 'info');
  if (location.pathname.includes('cart.html')) renderCartPage();
}
function changeQty(id, delta) {
  state.cart[id] = (state.cart[id] || 0) + delta;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart();
  updateBadge();
  if (location.pathname.includes('cart.html')) renderCartPage();
}
function clearCart() {
  state.cart = {};
  saveCart();
  updateBadge();
  showToast(t('toast_cart_cleared'), 'info');
  if (location.pathname.includes('cart.html')) renderCartPage();
}
function cartCount() { return Object.values(state.cart).reduce((a, b) => a + b, 0); }
function cartSubtotal() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const p = findProduct(id);
    return sum + (p ? p.price * qty : 0);
  }, 0);
}

/* =====================================================================
   ❤️  FAVORITES
   ===================================================================== */
function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    showToast(t('toast_fav_removed'), 'info');
  } else {
    state.favorites.push(id);
    showToast(t('toast_fav_added'), 'success');
  }
  saveFavs();
  // update ALL heart buttons for this product
  $$(`[data-fav="${id}"]`).forEach(b => b.classList.toggle('active', isFavorite(id)));
  if (location.pathname.includes('favorites.html')) renderFavoritesPage();
}
function isFavorite(id) { return state.favorites.includes(id); }

/* =====================================================================
   🌓  THEME
   ===================================================================== */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const icon = $('#themeIcon');
  if (icon) icon.textContent = state.theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('chichi_theme', state.theme);
}
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
}

/* =====================================================================
   🌍  I18N
   ===================================================================== */
function applyI18n() {
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[state.lang][key]) el.textContent = T[state.lang][key];
  });
  // placeholder translations
  $$('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[state.lang][key]) el.placeholder = T[state.lang][key];
  });
  // lang switcher
  const flags = { uz: '🇺🇿', ru: '🇷🇺', en: '🇬🇧' };
  const curFlag = $('#langCurrent .lang-flag');
  if (curFlag) curFlag.textContent = flags[state.lang];
  const label = $('#langLabel');
  if (label) label.textContent = state.lang.toUpperCase();
  $$('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
}
function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('chichi_lang', lang);
  applyI18n();
  $('#langSwitch')?.classList.remove('open');
  // re-render page content
  const page = document.body.dataset.page;
  if (PAGES[page] && PAGES[page].rerender) PAGES[page].rerender();
  if (page === 'menu') renderMenuPage(true);
  if (page === 'favorites') renderFavoritesPage();
  if (page === 'cart') renderCartPage();
  if (page === 'home') renderHomeFeatured();
}

/* =====================================================================
   🧩  HEADER / FOOTER / UI INJECTION
   ===================================================================== */
function injectHeader() {
  const user = Auth.current();
  const page = document.body.dataset.page || 'home';
  const navMap = { home: 'index.html', menu: 'menu.html', favorites: 'favorites.html', about: 'about.html' };
  const activeClass = (p) => page === p ? 'active' : '';
  const userHTML = user
    ? `<span class="user-initial">${user.name.charAt(0)}</span>`
    : '👤';

  const html = `
    <header id="header">
      <div class="container">
        <nav class="nav">
          <a href="index.html" class="logo">
            <div class="logo-mark">🍔</div>
            <div class="logo-text">ChiChi<span>Burger</span></div>
          </a>
          <div class="nav-links" id="navLinks">
            <a href="index.html" class="${activeClass('home')}" data-i18n="nav_home">Bosh sahifa</a>
            <a href="menu.html" class="${activeClass('menu')}" data-i18n="nav_menu">Menyu</a>
            <a href="favorites.html" class="${activeClass('favorites')}" data-i18n="nav_fav">Sevimlilar</a>
            <a href="about.html" class="${activeClass('about')}" data-i18n="nav_about">Aloqa</a>
          </div>
          <div class="nav-actions">
            <div class="lang-switch" id="langSwitch">
              <button class="lang-current" id="langCurrent" type="button">
                <span class="lang-flag">🇺🇿</span>
                <span id="langLabel">UZ</span>
              </button>
              <div class="lang-dropdown">
                <button class="lang-opt" data-lang="uz" type="button"><span class="lang-flag">🇺🇿</span> O'zbekcha</button>
                <button class="lang-opt" data-lang="ru" type="button"><span class="lang-flag">🇷🇺</span> Русский</button>
                <button class="lang-opt" data-lang="en" type="button"><span class="lang-flag">🇬🇧</span> English</button>
              </div>
            </div>
            <button class="icon-btn" id="themeBtn" aria-label="Theme" type="button">
              <span id="themeIcon">🌙</span>
            </button>
            <a href="account.html" class="icon-btn" id="userBtn" title="Account">${userHTML}</a>
            <a href="cart.html" class="icon-btn cart-btn" id="cartBtn" aria-label="Cart">
              🛒
              <span class="cart-badge" id="cartBadge">0</span>
            </a>
            <button class="hamburger" id="hamburger" aria-label="Menu" type="button">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  `;
  const el = $('#app-header');
  if (el) el.innerHTML = html;
  else document.body.insertAdjacentHTML('afterbegin', html);
  bindHeaderEvents();
  updateBadge();
}

function bindHeaderEvents() {
  // theme
  $('#themeBtn')?.addEventListener('click', toggleTheme);
  // lang switch
  const langSwitch = $('#langSwitch');
  $('#langCurrent')?.addEventListener('click', (e) => {
    e.stopPropagation();
    langSwitch.classList.toggle('open');
  });
  document.addEventListener('click', () => langSwitch?.classList.remove('open'));
  $$('.lang-opt').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  // hamburger
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  hamburger?.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open');
  });
  // close on link click
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
  }));
  // scroll
  const header = $('#header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function injectFooter() {
  const html = `
    <footer>
      <div class="container">
        <div class="footer-logo">
          <div class="logo-mark">🍔</div>
          <div class="logo-text" style="font-size:1.3rem;font-weight:800">ChiChi<span>Burger</span></div>
        </div>
        <p class="footer-tag" data-i18n="footer_tag">Eng mazali burgerlar shu yerda!</p>
        <div class="footer-socials">
          <a href="https://t.me/chichiburger" class="social-btn" target="_blank" rel="noopener" aria-label="Telegram">✈️</a>
          <a href="#" class="social-btn" aria-label="Instagram">📸</a>
          <a href="#" class="social-btn" aria-label="Facebook">👍</a>
        </div>
        <p class="footer-copy">© ${new Date().getFullYear()} ChiChi Burger. <span data-i18n="footer_rights">Barcha huquqlar himoyalangan.</span></p>
      </div>
    </footer>
  `;
  const el = $('#app-footer');
  if (el) el.innerHTML = html;
  else document.body.insertAdjacentHTML('beforeend', html);
}

function updateBadge() {
  const badge = $('#cartBadge');
  if (!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);
}

function injectBgBlobs() {
  if ($('.bg-blobs')) return;
  const html = `
    <div class="bg-blobs">
      <div class="blob b1"></div>
      <div class="blob b2"></div>
      <div class="blob b3"></div>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', html);
}

/* =====================================================================
   🎨  PRODUCT CARD
   ===================================================================== */
function productCardHTML(p, opts = {}) {
  const showFav = opts.showFav !== false;
  const showRemove = opts.showRemove === true;
  const badgeLabels = { hit: { uz: 'Hit', ru: 'Хит', en: 'Hit' }, new: { uz: 'Yangi', ru: 'Новое', en: 'New' } };
  const imageHTML = p.image
    ? `<img src="${p.image}" alt="${tr(p.name)}" width="600" height="400" loading="lazy" decoding="async" class="product-thumb"
         onerror="this.style.display='none'; this.parentElement.querySelector('.product-emoji').style.display='grid';">
       <div class="product-emoji" style="display:none; position:absolute; inset:0; place-items:center;" aria-hidden="true">${p.emoji}</div>`
    : `<div class="product-emoji" style="display:grid; place-items:center; height:100%;" aria-hidden="true">${p.emoji}</div>`;
  return `
    <article class="product-card">
      <div class="product-img">
        ${p.badge ? `<span class="product-badge">${tr(badgeLabels[p.badge])}</span>` : ''}
        ${showFav ? `
          <button class="fav-btn ${isFavorite(p.id) ? 'active' : ''}" data-fav="${p.id}" aria-label="Favorite" type="button">
            <span class="heart">${isFavorite(p.id) ? '❤️' : '🤍'}</span>
          </button>
        ` : ''}
        ${imageHTML}
      </div>
      <div class="product-body">
        <h3>${tr(p.name)}</h3>
        <p class="desc">${tr(p.desc)}</p>
        <div class="product-footer">
          <span class="price">${formatPrice(p.price)}</span>
          ${showRemove
            ? `<button class="add-btn" data-remove-fav="${p.id}" style="background:var(--err);font-size:1rem" aria-label="Remove">✕</button>`
            : `<button class="add-btn" data-add="${p.id}" aria-label="Add">+</button>`
          }
        </div>
      </div>
    </article>
  `;
}

function bindProductCardEvents(container) {
  $$('[data-fav]', container).forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFavorite(b.dataset.fav);
      // Update heart emoji
      const heart = b.querySelector('.heart');
      if (heart) heart.textContent = isFavorite(b.dataset.fav) ? '❤️' : '🤍';
    });
  });
  $$('[data-add]', container).forEach(b => {
    b.addEventListener('click', () => addToCart(b.dataset.add));
  });
  $$('[data-remove-fav]', container).forEach(b => {
    b.addEventListener('click', () => {
      toggleFavorite(b.dataset.removeFav);
      renderFavoritesPage();
    });
  });
}

/* =====================================================================
   📄  PAGE: HOME
   ===================================================================== */
function renderHomeFeatured() {
  const grid = $('#homeFeatured');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.badge === 'hit' || p.badge === 'new').slice(0, 6);
  grid.innerHTML = featured.map(p => productCardHTML(p)).join('');
  bindProductCardEvents(grid);
}

function initHome() {
  renderHomeFeatured();
  // Reveal observer
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* =====================================================================
   📄  PAGE: MENU
   ===================================================================== */
let currentCategory = 'all';

function renderMenuCats() {
  const el = $('#menuCats');
  if (!el) return;
  el.innerHTML = CATEGORIES.map(c => `
    <button class="cat ${currentCategory === c ? 'active' : ''}" data-cat="${c}" type="button">
      ${t('cat_' + c)}
    </button>
  `).join('');
  $$('.cat', el).forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      renderMenuCats();
      renderMenuPage();
    });
  });
}

function renderMenuPage(skipCats = false) {
  if (!skipCats) renderMenuCats();
  else {
    // update active states only
    $$('#menuCats .cat').forEach(b => b.classList.toggle('active', b.dataset.cat === currentCategory));
    // also re-render category labels
    $$('#menuCats .cat').forEach(b => {
      const key = 'cat_' + b.dataset.cat;
      if (T[state.lang][key]) b.textContent = T[state.lang][key];
    });
  }
  const grid = $('#menuGrid');
  if (!grid) return;
  const list = currentCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === currentCategory);
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-emoji">🍔</div><h3>—</h3></div>`;
    return;
  }
  grid.innerHTML = list.map(p => productCardHTML(p)).join('');
  bindProductCardEvents(grid);
}

function initMenu() {
  renderMenuPage();
}

/* =====================================================================
   📄  PAGE: FAVORITES
   ===================================================================== */
function renderFavoritesPage() {
  const grid = $('#favGrid');
  const empty = $('#favEmpty');
  if (!grid || !empty) return;
  const favProducts = state.favorites.map(findProduct).filter(Boolean);
  if (!favProducts.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = favProducts.map(p => productCardHTML(p, { showRemove: true })).join('');
  bindProductCardEvents(grid);
}

function initFavorites() {
  renderFavoritesPage();
}

/* =====================================================================
   📄  PAGE: CART
   ===================================================================== */
function renderCartPage() {
  const wrap = $('#cartContent'), empty = $('#cartEmpty'); if (!wrap||!empty) return;
  if (cart.count()===0) { wrap.style.display='none'; empty.style.display='block'; return; }
  wrap.style.display='block'; empty.style.display='none';

  const list = $('#cartItemsList');
  list.innerHTML = Object.entries(state.cart).map(([id,qty])=>{
    const p = PRODUCTS.find(x=>x.id===id); if (!p) return '';
    // Rasm yoki emoji
    const thumb = p.image
      ? `<img src="${p.image}" alt="${tr(p.name)}" width="80" height="80" loading="lazy" class="ci-thumb" 
           onerror="this.style.display='none'; this.parentElement.querySelector('.ci-emoji').style.display='grid';">`
      : `<div class="ci-emoji" style="display:grid; place-items:center; font-size:2rem; width:80px; height:80px; background:var(--bg-3); border-radius:14px;">${p.emoji}</div>`;
    
    return `
    <div class="cart-item">
      <div style="position:relative; flex-shrink:0; width:80px; height:80px;">
        ${thumb}
        ${p.image ? `<div class="ci-emoji" style="display:none; position:absolute; inset:0; place-items:center; font-size:2rem; width:80px; height:80px; background:var(--bg-3); border-radius:14px;">${p.emoji}</div>` : ''}
      </div>
      <div class="ci-info">
        <div class="ci-cat">${t('cat_'+p.cat)}</div>
        <h4>${tr(p.name)}</h4>
        <div class="ci-price">${formatPrice(p.price)}</div>
      </div>
      <div class="ci-controls">
        <div class="qty">
          <button data-qty="-1" data-id="${p.id}" type="button" aria-label="−">−</button>
          <span aria-live="polite">${qty}</span>
          <button data-qty="1" data-id="${p.id}" type="button" aria-label="+">+</button>
        </div>
        <button class="ci-remove" data-remove="${p.id}" type="button" aria-label="${t('remove')}">✕</button>
      </div>
    </div>`;
  }).join('');
  $$('[data-qty]', list).forEach(b=>b.addEventListener('click',()=>cart.change(b.dataset.id, parseInt(b.dataset.qty))));
  $$('[data-remove]', list).forEach(b=>b.addEventListener('click',()=>cart.remove(b.dataset.remove)));

  renderCartSummary();
  prefillCheckout();
}

function renderCartSummary() {
  const subtotal = cartSubtotal();
  const delivery = state.deliveryType === 'pickup' ? 0 : CONFIG.DELIVERY_FEE;
  const total = subtotal + delivery;

  $('#sumSubtotal').textContent = formatPrice(subtotal);
  $('#sumDelivery').textContent = formatPrice(delivery);
  $('#sumTotal').textContent = formatPrice(total);

  const dRow = $('#deliveryRow');
  if (dRow) dRow.style.display = state.deliveryType === 'pickup' ? 'none' : 'flex';
}

let deliveryType = 'delivery';

function prefillCheckoutForm() {
  const user = Auth.current();
  if (user) {
    if (!$('#inpName').value) $('#inpName').value = user.name;
    if (!$('#inpPhone').value) $('#inpPhone').value = user.phone;
    // Saved addresses chips
    const chipsWrap = $('#savedAddressesWrap');
    if (chipsWrap) {
      if (user.addresses.length) {
        chipsWrap.style.display = 'block';
        const chips = $('#savedAddresses');
        chips.innerHTML = user.addresses.map(a =>
          `<button type="button" class="addr-chip" data-addr="${a.id}">${a.label} — ${a.address}</button>`
        ).join('');
        $$('#savedAddresses .addr-chip').forEach(b =>
          b.addEventListener('click', () => {
            const addr = user.addresses.find(a => a.id === b.dataset.addr);
            if (addr) $('#inpAddress').value = addr.address;
          }));
      } else {
        chipsWrap.style.display = 'none';
      }
    }
    // Default address prefill
    const def = Auth.defaultAddress();
    if (def && !$('#inpAddress').value) $('#inpAddress').value = def.address;
  }
}

function validateCheckoutForm() {
  let valid = true;
  const name = $('#inpName').value.trim();
  const phone = $('#inpPhone').value.trim();
  const address = $('#inpAddress').value.trim();

  $('#fg-name').classList.toggle('has-error', !name);
  $('#inpName').classList.toggle('error', !name);
  if (!name) valid = false;

  const phoneOk = /^[+]?[\d\s\-()]{7,}$/.test(phone);
  $('#fg-phone').classList.toggle('has-error', !phoneOk);
  $('#inpPhone').classList.toggle('error', !phoneOk);
  if (!phoneOk) valid = false;

  if (deliveryType === 'delivery') {
    $('#fg-address').classList.toggle('has-error', !address);
    $('#inpAddress').classList.toggle('error', !address);
    if (!address) valid = false;
  }
  return valid;
}

function buildOrderMessage(order) {
  const lines = [];
  lines.push(`<b>🍔 ${t('order_new')} #${order.id}</b>`);
  lines.push('━━━━━━━━━━━━━━━');
  lines.push(`👤 <b>${t('order_name')}:</b> ${order.name}`);
  lines.push(`📱 <b>${t('order_phone')}:</b> ${order.phone}`);
  lines.push(`🚚 <b>${t('order_type')}:</b> ${order.typeLabel}`);
  if (order.address) lines.push(`📍 <b>${t('order_addr')}:</b> ${order.address}`);
  if (order.comment) lines.push(`📝 <b>${t('order_comment')}:</b> ${order.comment}`);
  lines.push('━━━━━━━━━━━━━━━');
  lines.push(`<b>${t('order_items')}:</b>`);
  order.items.forEach((it, i) => {
    lines.push(`${i + 1}. ${it.name} × ${it.qty} = ${formatPrice(it.price * it.qty)}`);
  });
  lines.push('━━━━━━━━━━━━━━━');
  if (order.deliveryFee > 0) lines.push(`🚚 ${t('sum_delivery')}: ${formatPrice(order.deliveryFee)}`);
  lines.push(`💰 <b>${t('order_total')}: ${formatPrice(order.total)}</b>`);
  lines.push('━━━━━━━━━━━━━━━');
  lines.push(`🕐 <b>${t('order_time')}:</b> ${order.time}`);
  return lines.join('\n');
}

async function sendToTelegram(text) {
  if (!CONFIG.CHAT_ID || CONFIG.CHAT_ID === 'YOUR_CHAT_ID_HERE') {
    throw new Error('CHAT_ID_NOT_CONFIGURED');
  }
  const res = await fetch(`https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CONFIG.CHAT_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.description || 'TELEGRAM_ERROR');
  return data;
}

async function submitOrder(e) {
  e.preventDefault();
  if (!validateCheckoutForm()) return;
  const btn = $('#submitBtn');
  btn.classList.add('btn-loading');
  btn.disabled = true;

  const items = Object.entries(state.cart).map(([id, qty]) => {
    const p = findProduct(id);
    return { name: tr(p.name), qty, price: p.price };
  });
  const subtotal = cartSubtotal();
  const deliveryFee = deliveryType === 'delivery' ? CONFIG.DELIVERY_FEE : 0;
  const orderId = Math.floor(1000 + Math.random() * 9000);

  const order = {
    id: orderId,
    name: $('#inpName').value.trim(),
    phone: $('#inpPhone').value.trim(),
    address: deliveryType === 'delivery' ? $('#inpAddress').value.trim() : '',
    comment: $('#inpComment').value.trim(),
    typeLabel: deliveryType === 'delivery' ? t('type_delivery_msg') : t('type_pickup_msg'),
    items,
    deliveryFee,
    total: subtotal + deliveryFee,
    time: new Date().toLocaleString(state.lang === 'ru' ? 'ru-RU' : state.lang === 'en' ? 'en-GB' : 'uz-UZ'),
  };

  try {
    await sendToTelegram(buildOrderMessage(order));
    // Success modal
    $('#cartContent').style.display = 'none';
    $('#cartEmpty').style.display = 'none';
    const succ = $('#orderSuccess');
    if (succ) {
      succ.style.display = 'block';
      succ.innerHTML = `
        <div class="success-screen">
          <div class="success-icon">✓</div>
          <h3>${t('success_t')}</h3>
          <div class="order-id">#${orderId}</div>
          <p>${t('success_d')}</p>
          <a href="index.html" class="btn btn-primary" style="width:100%">${t('success_home')}</a>
        </div>
      `;
    }
    state.cart = {};
    saveCart();
    updateBadge();
  } catch (err) {
    console.error(err);
    btn.classList.remove('btn-loading');
    btn.disabled = false;
    if (err.message === 'CHAT_ID_NOT_CONFIGURED') showToast(t('toast_bot_err'), 'error');
    else showToast(t('toast_err') + ' (' + err.message + ')', 'error');
  }
}

function initCart() {
  if (cartCount() === 0) {
    $('#cartContent').style.display = 'none';
    $('#cartEmpty').style.display = 'block';
  } else {
    renderCartPage();
  }

  // delivery toggle
  $$('.delivery-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.delivery-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      deliveryType = btn.dataset.type;
      state.deliveryType = deliveryType;
      $('#fg-address').style.display = deliveryType === 'delivery' ? 'block' : 'none';
      renderCartSummary();
    });
  });
  state.deliveryType = deliveryType;
  $('#fg-address').style.display = 'block';

  // clear cart
  $('#clearCartBtn')?.addEventListener('click', () => {
    if (confirm('Savatni tozalashni xohlaysizmi?')) clearCart();
  });

  // form
  $('#orderForm')?.addEventListener('submit', submitOrder);

  // phone formatter
  $('#inpPhone')?.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d+\s\-()]/g, '');
  });
}

/* =====================================================================
   📄  PAGE: ACCOUNT
   ===================================================================== */
function renderAccountPage() {
  const user = Auth.current();
  const wrap = $('#accountContent');
  if (!wrap) return;

  if (!user) {
    wrap.innerHTML = renderAuthForm();
    bindAuthEvents();
    return;
  }

  wrap.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${user.name.charAt(0).toUpperCase()}</div>
      <div class="profile-info">
        <h2>${user.name}</h2>
        <p>${user.phone}</p>
      </div>
    </div>

    <div class="card-block">
      <h3>
        <span>📍 ${t('profile_addresses')}</span>
        <button class="btn btn-primary btn-sm" id="addAddressBtn" type="button">${t('profile_add_address')}</button>
      </h3>
      <div class="addresses-list" id="addressesList">
        ${user.addresses.length
          ? user.addresses.map(a => `
            <div class="address-item ${a.isDefault ? 'is-default' : ''}">
              <div class="addr-icon">🏠</div>
              <div class="addr-body">
                <div class="addr-label">
                  ${a.label}
                  ${a.isDefault ? `<span class="default-tag">${t('profile_default')}</span>` : ''}
                </div>
                <div class="addr-text">${a.address}</div>
              </div>
              <div class="addr-actions">
                ${!a.isDefault ? `<button class="addr-action" data-default="${a.id}" title="${t('profile_set_default')}" type="button">⭐</button>` : ''}
                <button class="addr-action remove" data-del-addr="${a.id}" title="Delete" type="button">🗑️</button>
              </div>
            </div>
          `).join('')
          : `<div class="empty-msg">${t('profile_no_addresses')}</div>`
        }
      </div>
    </div>

    <div class="card-block">
      <button class="btn btn-danger btn-block" id="logoutBtn" type="button">🚪 ${t('profile_logout')}</button>
    </div>
  `;
  bindProfileEvents();
}

function renderAuthForm() {
  return `
    <div class="auth-card">
      <div class="auth-logo">
        <div class="logo-mark">🍔</div>
      </div>
      <h2 id="authTitle">${t('login_title')}</h2>
      <p class="auth-sub" id="authSub">${t('login_sub')}</p>
      <div class="auth-tabs">
        <button class="active" data-tab="login" type="button">${t('login_tab')}</button>
        <button data-tab="register" type="button">${t('register_tab')}</button>
      </div>
      <form class="auth-form" id="authForm" novalidate>
        <div class="form-group" id="fg-reg-name" style="display:none">
          <label>${t('register_name')}</label>
          <input type="text" class="input" id="regName">
        </div>
        <div class="form-group" id="fg-auth-phone">
          <label>${t('login_phone')}</label>
          <input type="tel" class="input" id="authPhone" placeholder="+998 90 123 45 67">
          <div class="form-error">${t('err_phone')}</div>
        </div>
        <div class="form-group" id="fg-auth-password">
          <label>${t('login_password')}</label>
          <input type="password" class="input" id="authPassword">
          <div class="form-error">${t('err_password_short')}</div>
        </div>
        <button type="submit" class="btn btn-primary" id="authSubmit">${t('login_submit')}</button>
      </form>
    </div>
  `;
}

function bindAuthEvents() {
  let mode = 'login';
  const tabs = $$('.auth-tabs button');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      mode = btn.dataset.tab;
      tabs.forEach(b => b.classList.toggle('active', b === btn));
      $('#fg-reg-name').style.display = mode === 'register' ? 'block' : 'none';
      $('#authTitle').textContent = mode === 'login' ? t('login_title') : t('register_title');
      $('#authSub').textContent = mode === 'login' ? t('login_sub') : t('register_sub');
      $('#authSubmit').textContent = mode === 'login' ? t('login_submit') : t('register_submit');
    });
  });
  $('#authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const phone = $('#authPhone').value.trim();
    const pass = $('#authPassword').value;
    const name = $('#regName').value.trim();
    if (!phone || !pass) return showToast(t('err_required'), 'error');
    if (mode === 'register' && !name) return showToast(t('err_required'), 'error');
    try {
      if (mode === 'login') {
        const u = Auth.login(phone, pass);
        showToast(t('toast_welcome') + ', ' + u.name + '!', 'success');
      } else {
        Auth.register(name, phone, pass);
        showToast(t('toast_registered'), 'success');
      }
      setTimeout(() => location.reload(), 700);
    } catch (err) {
      const errMap = {
        exists: 'err_user_exists',
        invalid: 'err_invalid',
        short_password: 'err_password_short',
      };
      showToast(t(errMap[err.message] || 'toast_err'), 'error');
    }
  });
}

function bindProfileEvents() {
  $('#logoutBtn')?.addEventListener('click', () => {
    Auth.logout();
    showToast(t('toast_loggedout'), 'info');
    setTimeout(() => location.reload(), 500);
  });
  $$('[data-del-addr]').forEach(b => b.addEventListener('click', () => {
    if (!confirm(t('profile_delete_confirm'))) return;
    Auth.removeAddress(b.dataset.delAddr);
    renderAccountPage();
  }));
  $$('[data-default]').forEach(b => b.addEventListener('click', () => {
    Auth.setDefaultAddress(b.dataset.default);
    renderAccountPage();
  }));
  $('#addAddressBtn')?.addEventListener('click', showAddressModal);
}

function showAddressModal() {
  let modal = $('#addressModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'addressModal';
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h3>📍 ${t('add_address_modal')}</h3>
          <button class="modal-close" type="button">✕</button>
        </div>
        <div class="modal-body">
          <form id="addressForm">
            <div class="form-group">
              <label>${t('profile_address_label')}</label>
              <input type="text" class="input" id="addrLabel" placeholder="Uy, Ish...">
            </div>
            <div class="form-group">
              <label>${t('profile_address_text')} *</label>
              <textarea class="textarea" id="addrText" rows="2"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">${t('profile_save')}</button>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    $('.modal-close', modal).addEventListener('click', () => modal.classList.remove('show'));
    $('.modal-overlay', modal).addEventListener('click', () => modal.classList.remove('show'));
    $('#addressForm', modal).addEventListener('submit', (e) => {
      e.preventDefault();
      const label = $('#addrLabel', modal).value.trim() || 'Manzil';
      const address = $('#addrText', modal).value.trim();
      if (!address) return showToast(t('err_required'), 'error');
      Auth.addAddress(label, address);
      modal.classList.remove('show');
      renderAccountPage();
      showToast('✓ ' + t('profile_save'), 'success');
    });
  }
  $('#addrLabel').value = '';
  $('#addrText').value = '';
  modal.classList.add('show');
}

function initAccount() {
  renderAccountPage();
}

/* =====================================================================
   📄  PAGE: ABOUT
   ===================================================================== */
function initAbout() {
  const contactEl = $('#contactInfo');
  if (contactEl) {
    // update phone/address
    const phoneEl = contactEl.querySelector('[data-contact-phone]');
    if (phoneEl) phoneEl.textContent = CONFIG.PHONE;
    const addrEl = contactEl.querySelector('[data-contact-address]');
    if (addrEl) addrEl.textContent = CONFIG.ADDRESS;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* =====================================================================
   🚀  PAGES REGISTRY & BOOTSTRAP
   ===================================================================== */
const PAGES = {
  home: initHome,
  menu: initMenu,
  favorites: initFavorites,
  cart: initCart,
  account: initAccount,
  about: initAbout,
};

document.addEventListener('DOMContentLoaded', () => {
  injectBgBlobs();
  injectHeader();
  injectFooter();
  applyTheme();
  applyI18n();
  updateBadge();

  const page = document.body.dataset.page || 'home';
  if (PAGES[page]) {
    try { PAGES[page](); } catch (e) { console.error('Page init error:', e); }
  }

  // Re-apply i18n after dynamic content (so newly created elements get translated too)
  setTimeout(() => applyI18n(), 50);
});