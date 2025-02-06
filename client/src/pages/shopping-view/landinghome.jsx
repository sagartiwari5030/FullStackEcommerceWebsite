import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import{LandinHeader} from "../../components/shopping-view/landingheader"

// Import Banner Images
import bannerOne from "../../assets/banner-1.png";
import bannerTwo from "../../assets/banner-2.png";
import bannerThree from "../../assets/banner-3.png";

// Import Furniture Category Images
import sofaImg from "../../assets/sofa.webp";
import bedsImg from "../../assets/beds.webp";
import diningImg from "../../assets/dining_sets.webp";
import studyTableImg from "../../assets/study_table.webp";
import sectionalSofaImg from "../../assets/sectional_sofa.webp";
import wardrobesImg from "../../assets/wardrobes.webp";
import cabinatesImg from "../../assets/cabinates.webp";
import officeFurnitureImg from "../../assets/office_furniture.webp";
import centerTableImg from "../../assets/center_table.webp";
import shoeRacksImg from "../../assets/shoe_racks.webp";
import reclinersImg from "../../assets/recliners.webp";
import chairsImg from "../../assets/chairs.webp";
import dressingTablesImg from "../../assets/dressing_tables.webp";

// Define Categories with Images
const furnitureCategories = [
  { id: "sofa", label: "Sofa", image: sofaImg },
  { id: "beds", label: "Beds", image: bedsImg },
  { id: "dining_sets", label: "Dining Sets", image: diningImg },
  { id: "study_table", label: "Study Table", image: studyTableImg },
  { id: "sectional_sofa", label: "Sectional Sofas", image: sectionalSofaImg },
  { id: "wardrobes", label: "Wardrobes", image: wardrobesImg },
  { id: "cabinates", label: "Cabinates", image: cabinatesImg },
  { id: "office_furniture", label: "Office Furniture", image: officeFurnitureImg },
  { id: "center_table", label: "Center Table", image: centerTableImg },
  { id: "shoe_racks", label: "Shoe Racks", image: shoeRacksImg },
  { id: "recliners", label: "Recliners", image: reclinersImg },
  { id: "chairs", label: "Chairs", image: chairsImg },
  { id: "dressing_tables", label: "Dressing Tables", image: dressingTablesImg },
];

function LandingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Banners Array
  const bannerImages = [bannerOne, bannerTwo, bannerThree];

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = { [section]: [getCurrentItem.id] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddToCart(getCurrentProductId) {
    if (!isAuthenticated) {
      // ✅ If user is not logged in, redirect to login/signup page
      navigate("/auth/login");
    } else {
      // ✅ If user is logged in, add the product to the cart
      dispatch(addToCart({ userId: user?.id, productId: getCurrentProductId, quantity: 1 }))
        .then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchCartItems(user?.id));
            toast({ title: "Product is added to cart" });
          }
        });
    }
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [bannerImages]);

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: "price-lowtohigh" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (<>
   <LandinHeader/>
      <div className="flex flex-col min-h-screen">
      
      {/* Hero Section - Banner Slider */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {bannerImages.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide - 1 + bannerImages.length) % bannerImages.length)
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length)
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      {/* Shop by Category */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {furnitureCategories.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img src={categoryItem.image} alt={categoryItem.label} className="w-16 h-16 mb-4" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Feature Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.length > 0 && productList.map((productItem) => (
              <ShoppingProductTile 
                key={productItem.id} 
                handleGetProductDetails={handleGetProductDetails} 
                product={productItem} 
                handleAddtoCart={() => handleAddToCart(productItem.id)} 
              />
            ))}
          </div>
        </div>
      </section>

      <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails} />
    </div>
    </>
  );
}

export default LandingHome;
