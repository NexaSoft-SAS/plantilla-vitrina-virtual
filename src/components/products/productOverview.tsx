import CardProduct from "@/components/products/cardProduct";
import ProductOverviewGrid from "@/components/products/productOverviewGrid";
import StoreDoubleColumn from "@/components/store/storeDoubleColumn";
import ReviewSummaryChart from "@/components/reviews/reviewSummaryChart";
import data from "assets/json/data.json";

// filter reviews with ID 01
let productReviews = data.reviews.filter((x) => x.productID == "01");

const ProductOverview = () => {
  return (
    <>
      <div className="container mt-5">
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

        <div className="my-5">
          <ReviewSummaryChart reviews={productReviews} />
        </div>

        <div className="row">
          <h5 className="mb-4">Otros clientes también compraron</h5>
          {data.products.map((product, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <CardProduct
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
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

export default ProductOverview