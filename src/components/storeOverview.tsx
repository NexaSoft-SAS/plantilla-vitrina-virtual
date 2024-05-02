import data from "assets/json/data.json";
import "assets/scss/astro-ecommerce.scss";
import ComplexNavbar from "@/components/complexNavbar";
import ComplexNavbarDark from "@/components/complexNavbarDark";
import Footer from "@/components/footer";
import ComplexFooter from "@/components/complexFooter";
import CardProduct from "@/components/products/cardProduct";
import CardCategory from "@/components/products/cardCategory";
import ProductOverviewGrid from "@/components/products/productOverviewGrid";
import ProductOverviewGallery from "@/components/products/productOverviewGallery";
import ShoppingCart from "@/components/cart/shoppingCart";
import ShoppingCart2 from "@/components/cart/shoppingCart2";
import ProductQuickview from "@/components/products/productQuickview";
import ProductQuickview2 from "@/components/products/productQuickview2";
import ProductFeature from "@/components/products/productFeature";
import ProductFeature2 from "@/components/products/productFeature2";
import CategoryFilters from "@/components/products/categoryFilters";
import TestimonialsFade from "@/components/promo/testimonialsFade";
import PromoSectionLarge from "@/components/promo/promoSectionLarge";
import CheckoutOrderSummary from "@/components/checkout/checkoutOrderSummary";
import CheckoutMultiStep from "@/components/checkout/checkoutMultiStep";
import ReviewSimple from "@/components/reviews/reviewSimple";
import ReviewSummaryChart from "@/components/reviews/reviewSummaryChart";
import OrderSummaries from "@/components/order/orderSummaries";
import OrderHistory from "@/components/order/orderHistory";
import IncentiveLarge from "@/components/incentives/incentiveLarge";
import IncentiveCols from "@/components/incentives/incentiveCols";

function toggleHeart(e: any) {
  e.target.classList.toggle("fas");
  e.target.classList.toggle("far");
  e.target.classList.toggle("text-danger");
}

document.getElementById("heart1")?.addEventListener("click", toggleHeart);

const StoreOverview = () => {
  let cartItems: any[] = [];
  data.shoppingCart.map((id) =>
    data.products.filter((x) => x.id == id).map((x) => cartItems.push(x))
  );
  let cartItems2: any[] = [];
  data.shoppingCart2.map((id) =>
    data.products.filter((x) => x.id == id).map((x) => cartItems2.push(x))
  );

  // filter reviews with ID 01
  let productReviews = data.reviews.filter((x) => x.productID == "01");

  let orderProducts: any[] = [];

  data.orders[0].products.forEach((productDetails) => {
    data.products.forEach((product) => {
      if (product.id == productDetails.id) {
        orderProducts.push(product);
      }
    });
  });

  let orderHistoryProducts = new Set();

  data.orders.forEach((order) => {
    order.products.forEach((productDetails) => {
      data.products.forEach((product) => {
        if (product.id == productDetails.id) {
          orderHistoryProducts.add(product);
        }
      });
    });
  });

  return (
    <>
      <div className="container mt-5">
        <h3>Listas de productos</h3>
        <p>Componentes y bloques para Listas de productos</p>
        <div className="row mt-5">
          {data.products.map((product, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                color={product.color}
                colors={product.colors}
                title={product.title}
                description={product.description}
                price={product.price}
                position="center"
              />
            </div>
          ))}
        </div>

        <h3>Listas de productos</h3>
        <p>Tarjetas con todos los detalles</p>
        <div className="row">
          {data.products.map((product) => (
            <div className="col-md-6 col-lg-3">
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                color={product.color}
                colors={product.colors}
                title={product.title}
                description={product.description}
                price={product.price}
                position="left"
              />
            </div>
          ))}
        </div>

        <div className="row mb-8">
          <div className="d-block text-center mb-5">
            <h3>Compra por categoría</h3>
            <a className="text-dark font-weight-bold" href="#">
              Explorar todas las categorías &#62;
            </a>
          </div>
          {data.moreCategories.slice(0, 4).map((category) => (
            <div className="col-md-6 col-lg-3">
              <CardCategory
                classList="h-100"
                cta=""
                thumb_src={category.thumb_src}
                title={category.title}
                collection={category.collection}
              />
            </div>
          ))}
        </div>

        <div className="row mb-5">
          <div className="d-block text-center mb-5">
            <h3>Compra por categoría</h3>
            <a className="text-dark font-weight-bold" href="#">
              Explorar todas las categorías &#62;
            </a>
          </div>
          <div className="col-md-6">
            <CardCategory
              classList="h-100"
              cta=""
              thumb_src={data.moreCategories[4].thumb_src}
              title={data.moreCategories[4].title}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <CardCategory
                classList=""
                cta=""
                thumb_src={data.moreCategories[5].thumb_src}
                title={data.moreCategories[5].title}
              />
            </div>
            <div className="">
              <CardCategory
                classList=""
                cta=""
                thumb_src={data.moreCategories[6].thumb_src}
                title={data.moreCategories[6].title}
              />
            </div>
          </div>
        </div>

        <div className="my-10">
          <h3>Descripción del producto</h3>
          <p className="mb-5">Con cuadrícula de imágenes</p>

          <ProductOverviewGrid
            colors={data.products[0].colors}
            images={data.products[0].images}
            title={data.products[0].title}
            full_description={data.products[0].full_description}
            price={data.products[0].price}
            highlights={data.products[0].highlights}
            details={data.products[0].details}
            rating={data.products[0].rating}
            reviews={data.products[0].reviews}
            sizes={data.products[0].sizes}
          />
        </div>

        <div className="my-5">
          <h3>Descripción del producto</h3>
          <p className="mb-5">
            Descripción del productos con galería de imágenes y detalles
            ampliables
          </p>

          <ProductOverviewGallery
            colors={data.products[1].colors}
            images={data.products[1].images}
            title={data.products[1].title}
            full_description={data.products[1].full_description}
            price={data.products[1].price}
            rating={data.products[1].rating}
            reviews={data.products[1].reviews}
            data={data.products[1].data}
          />
        </div>

        <div className="my-10">
          <ShoppingCart products={cartItems} />
        </div>

        <div className="my-10">
          <ShoppingCart2 products={cartItems2} />
        </div>

        <div className="my-10">
          <h3>Filtros de categoría</h3>
          <p className="mb-5">
            Con acciones en línea y filtros de barra lateral expandibles
          </p>
          <CategoryFilters title="Our products" />
        </div>

        <div className="my-10">
          <h3>Visores rápidos de productos</h3>
          <p className="mb-5">
            Con selector de color, selector de talla y enlace de detalles
          </p>

          <ProductQuickview
            colors={data.products[0].colors}
            thumb_src={data.products[0].thumb_src}
            title={data.products[0].title}
            price={data.products[0].price}
            rating={data.products[0].rating}
            reviews={data.products[0].reviews}
            sizes={data.products[0].sizes}
            images={data.products[0].images}
          />

          <h3 className="mt-7">Visores rápidos de productos</h3>
          <p className="mb-5">Con selector de tamaño grande</p>
          <ProductQuickview2
            colors={data.products[1].colors}
            thumb_src="/images/mirror.png"
            title="Sofa"
            price={data.products[1].price}
            rating={data.products[1].rating}
            reviews={data.products[1].reviews}
          />
        </div>

        <div className="my-10">
          <ProductFeature
            title={data.products[0].title}
            images={data.products[2].images}
            full_description={data.products[0].full_description}
            featuresDetails={data.products[0].featuresDetails}
          />
        </div>

        <div className="my-10">
          <ProductFeature2
            title={data.products[0].title}
            full_description={data.products[0].full_description}
            images={data.products[2].images}
            data={data.products[2].data}
          />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Barra de navegación compleja blanca</h3>
          <a className="text-dark font-weight-bold" href="#">
            Explorar todas las categorías &#62;
          </a>
          <br />
          <br />
          <ComplexNavbar />
          <div className="row mt-4">
            {data.products.map((product) => (
              <div className="col-12 col-md-6 col-lg-3">
                <CardProduct
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>

          <h3 className="mt-5">Barra de navegación compleja Oscura</h3>
          <a className="text-dark font-weight-bold" href="#">
            Explorar todas las categorías &#62;
          </a>
          <br />
          <br />
          <ComplexNavbarDark />
          <div className="row mt-4">
            {data.products.map((product) => (
              <div className="col-12 col-md-6 col-lg-3">
                <CardProduct
                  thumb_src={product.thumb_src}
                  thumb_alt={product.thumb_alt}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="my-10">
          <h3>Footer Simple</h3>
          <Footer />

          <h3 className="mt-8">Footer Complejo</h3>
          <ComplexFooter />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Secciones promocionales</h3>
          <p className="text-body">
            Ancho completo con imagen de fondo y contenido grande
          </p>
          <TestimonialsFade
            pageHeaderBgImg={
              "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2729&q=80"
            }
            pageHeaderMinVh="50vh"
          />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Secciones promocionales</h3>
          <p className="text-body">
            Con imagenes de fondo descoloridas y testimonios
          </p>
          <PromoSectionLarge
            title={data.products[0].title}
            full_description="Ahora es el momento de ser grandioso y hacer de otros Por ser un color brillante. Por destacar. Pero ahora es el momento de estar bien y ser el mejor tú. ¿Creerías en lo que crees, si fueras el único que lo cree?"
            pageHeaderBgImg={
              "https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            }
            pageHeaderMinVh="50vh"
            pageHeaderRadius="1rem"
          />
        </div>

        <div className="my-10">
          <h3>Formularios de pago</h3>
          <p>Dividir con resumen del pedido</p>
          <CheckoutOrderSummary products={cartItems} />
        </div>

        <div className="my-10">
          <h3>Formularios de pago</h3>
          <p>Con barra lateral de resumen del pedido</p>
          <CheckoutMultiStep products={cartItems2} />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Reseñas de productos</h3>
          <p className="text-body">Sencillo con avatares</p>
          <ReviewSimple reviews={data.reviews} />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Reseñas de productos</h3>
          <p className="text-body">Con cuadro resumen</p>
          <ReviewSummaryChart reviews={productReviews} />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Resúmenes de pedidos</h3>
          <p className="text-body">Con barra lateral de resumen de pedidos</p>
          <OrderSummaries order={data.orders[0]} products={orderProducts} />
        </div>

        <div className="my-10">
          <OrderHistory orders={data.orders} products={orderHistoryProducts} />
        </div>

        <div className="my-10">
          <IncentiveLarge />
        </div>

        <div className="my-10">
          <h3 className="mt-5">Características</h3>
          <p className="text-body">3 columnas con ilustraciones y encabezado</p>
          <IncentiveCols />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default StoreOverview;
