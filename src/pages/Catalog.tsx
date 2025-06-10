import NavigationButton from "@/components/NavigationButton";

const Catalog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <NavigationButton to="/" variant="secondary" className="mb-8">
            ← Назад на главную
          </NavigationButton>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Каталог украшений
          </h1>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Коллекция золотых украшений"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Эксклюзивная коллекция "Золотая элегантность"
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Наша флагманская коллекция представляет изысканные украшения
                  из золота высшей пробы с инкрустацией натуральными
                  драгоценными камнями.
                </p>
                <p className="mb-4">В коллекции представлены:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Кольца с бриллиантами и изумрудами</li>
                  <li>Серьги-капли с сапфирами</li>
                  <li>Колье с жемчугом Акойя</li>
                  <li>Браслеты с турмалинами</li>
                </ul>
                <p>
                  Каждое изделие поставляется с сертификатом подлинности и
                  пожизненной гарантией на работу мастера.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
