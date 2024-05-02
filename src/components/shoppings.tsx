import data from "assets/json/data.json";
import "assets/scss/astro-ecommerce.scss";
import Navbar from "@/components/navbar";
import UpperNavbar from "@/components/store/upperNavbar";
import CardProduct from "@/components/products/cardProduct";
import ShoppingCart from "@/components/cart/shoppingCart";
import StoreDoubleColumn from "@/components/store/storeDoubleColumn";

const Shoppings = () => {
  let cartItems: any[] = [];
  data.shoppingCart.map((id) =>
    data.products.filter((x) => x.id == id).map((x) => cartItems.push(x)),
  );

  return (
    <>
      <Navbar />

      <ShoppingCart products={cartItems} />

      <div className="container mt-5">
        <div className="row">
          <h5 className="mb-4">También te puede interesar...</h5>
          {data.products.map((product) => (
            <div className="col-md-6 col-lg-3">
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                description="More porducts"
                colors={[product.color]}
                color={product.color}
                title={product.title}
                price={product.price}
                position="left"
              />
            </div>
          ))}
        </div>
        <hr className="dark horizontal my-5" />
        <StoreDoubleColumn />
      </div>
    </>
  );
};

export default Shoppings;
