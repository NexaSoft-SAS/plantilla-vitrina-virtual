import data from "assets/json/data.json";
import CardCategory from '@/components/products/cardCategory';
import ProductFeature from '@/components/products/productFeature';
import PromoSectionLarge from '@/components/promo/promoSectionLarge';
import Footer from '@/components/footer';
import TestimonialsFade from '@/components/promo/testimonialsFade';

const StoreShowcase = () => {
  return (
    <>
      <PromoSectionLarge 
        title={"La ultima colección ya está aquí"}
        full_description={data.products[0].full_description}  
        pageHeaderBgImg={"/astro-showcase/images/bg2.jpg"}
        pageHeaderMinVh="90vh"
      />
      <div className="container my-5">
        <div className="d-block text-center mb-5">
          <h3>Compra por categoría</h3>
          <a className="text-dark font-weight-bold" href="#">
            Explorar todas las categorías &#62;
          </a>
        </div>
        <div className="row mb-5">
          {data.moreCategories.slice(0, 4).map((category, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <CardCategory
                thumb_src={category.thumb_src}
                collection={category.collection}
                title={category.title}
              />
            </div>
          ))}
        </div>

        <PromoSectionLarge
          title="vitrina virtual"
          full_description={data.products[0].full_description}
          pageHeaderBgImg={"/astro-showcase/images/bg2.jpg"}
          pageHeaderMinVh="50vh"
          pageHeaderRadius="1rem"
        />
        <div className="my-5">
          <ProductFeature
            title="Características del producto"
            images={data.products[2].images}
            full_description="Romper con las fronteras y limitaciones es posible."
            featuresDetails={data.products[0].featuresDetails}
          />
        </div>
        <div className="mt-5 mb-10">
          <TestimonialsFade
            pageHeaderBgImg={
              "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80"
            }
            pageHeaderMinVh="50vh"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default StoreShowcase;
