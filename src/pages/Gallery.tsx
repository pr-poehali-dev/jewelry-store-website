import NavigationButton from "@/components/NavigationButton";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <NavigationButton to="/" variant="secondary" className="mb-8">
            ← Назад на главную
          </NavigationButton>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Галерея наших работ
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Роскошное бриллиантовое кольцо"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  "Звездная ночь"
                </h3>
                <p className="text-gray-600">
                  Кольцо с центральным бриллиантом 2 карата в окружении мелких
                  камней. Белое золото 750 пробы.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Изысканные золотые серьги"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  "Морская волна"
                </h3>
                <p className="text-gray-600">
                  Серьги с натуральными аквамаринами и жемчугом. Желтое золото
                  585 пробы с авторской гравировкой.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/7983e457-bebe-416c-9e1d-6e631f473ac4.png"
                  alt="Элегантные украшения с камнями"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  "Королевская роскошь"
                </h3>
                <p className="text-gray-600">
                  Изысканный комплект украшений с натуральными камнями.
                  Авторская работа с филигранной обработкой металла.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Лицензии и сертификаты
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      📜
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Лицензия на торговлю
                      </h4>
                      <p className="text-sm text-gray-600">№ ЛТ-2023-001</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Официальная лицензия на розничную торговлю ювелирными
                    изделиями из драгоценных металлов и камней.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      💎
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Сертификат качества
                      </h4>
                      <p className="text-sm text-gray-600">№ СК-2023-789</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Международный сертификат качества драгоценных камней и
                    металлов по стандарту ISO 9001.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Мастерская-партнер
                      </h4>
                      <p className="text-sm text-gray-600">№ МП-2023-456</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Авторизованная мастерская с правом изготовления изделий из
                    золота 585 и 750 пробы.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      🔒
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Страхование
                      </h4>
                      <p className="text-sm text-gray-600">№ СТР-2023-321</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Полное страхование всех изделий на сумму до 5 млн рублей при
                    изготовлении и доставке.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Индивидуальный заказ
              </h3>
              <p className="text-gray-700 mb-6">
                Мы создаем украшения по индивидуальным эскизам. Время
                изготовления от 2 до 4 недель. Консультация дизайнера и создание
                3D-модели — бесплатно.
              </p>
              <div className="flex justify-center">
                <span className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold">
                  📞 Звоните: +7 (495) 123-45-67
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
