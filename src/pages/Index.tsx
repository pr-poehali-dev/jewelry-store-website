import JewelryHeader from "@/components/JewelryHeader";
import JewelryDescription from "@/components/JewelryDescription";
import NavigationButton from "@/components/NavigationButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <JewelryHeader />
        <JewelryDescription />

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
          <NavigationButton
            to="/catalog"
            className="w-full sm:w-auto px-8 py-3 text-lg"
          >
            🔮 Каталог украшений
          </NavigationButton>
          <NavigationButton
            to="/gallery"
            variant="secondary"
            className="w-full sm:w-auto px-8 py-3 text-lg"
          >
            🖼️ Галерея работ
          </NavigationButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
