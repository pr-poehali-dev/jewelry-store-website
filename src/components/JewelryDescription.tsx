const JewelryDescription = () => {
  return (
    <section className="max-w-4xl mx-auto mb-12 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          О нашем магазине
        </h2>
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="mb-4">
            Добро пожаловать в мир эксклюзивных украшений! Наш магазин
            специализируется на создании уникальных авторских изделий из
            благородных металлов и натуральных камней.
          </p>
          <p className="mb-4">
            Каждое украшение создается вручную нашими мастерами с более чем
            15-летним опытом. Мы используем только качественные материалы:
            золото 585 и 750 пробы, серебро 925 пробы, натуральные драгоценные и
            полудрагоценные камни.
          </p>
          <p>
            В нашей коллекции вы найдете кольца, серьги, колье, браслеты и броши
            — каждое изделие неповторимо и создано специально для вас.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JewelryDescription;
