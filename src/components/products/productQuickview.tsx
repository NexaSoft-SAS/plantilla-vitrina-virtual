import ProductBadge from './productBadge';
import ProductRating from './productRating';
import ProductSizes from './productSizes';
import ProductGallery from './productGallery'
import Reviews from '../reviews/reviewSimple'


interface Props {
  thumb_src: string;
  title: string;
  price: number;
  colors: string[];
  rating: number;
  reviews: number;
  sizes: Map<string,number>;
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductQuickview({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  sizes,
  images
}: Props) {

  return (
    <>
    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Product Quickview
    </button>
    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="card card-product">
            <div className="card-body d-block d-lg-flex p-4">
              <button type="button" className="btn-close text-dark position-absolute me-4 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
              {(thumb_src) && 
                <ProductGallery images={images} />
              }
              <div className="w-100 w-lg-70 ps-lg-5 mt-4 mt-md-5">
                <div className="d-flex align-items-center">
                  {(title.length != 0) && 
                    <h3 className="me-4">{title}</h3>
                  }
                {(price) && 
                  <>
                    <div className="d-flex">
                      <h4 className="mb-0">${price.toLocaleString()}</h4>
                      <input className="opacity-0 d-none" defaultValue={price} />
                    </div>
                  </>
                }
                </div>
                {(rating != 0) && 
                  <ProductRating rating={rating} reviews={reviews} />
                }
                <p className="mt-4">Mientras vivimos, nuestros corazones se vuelven más fríos. Porque el dolor es lo que pasamos a medida que envejecemos. Los demás nos insultan y perdemos la confianza en esos otros. Nos vuelven apuñalados por amigos.</p>
                {(colors.length != 0) && 
                  <>
                    <h6 className="mt-4">Color</h6>
                    {(colors) &&
                      <ProductBadge colors={colors} />
                    }
                  </>
                }
                {(sizes.size != 0) && 
                  <ProductSizes sizes={sizes}/>
                }
                <div className="d-block text-center">
                  <button className="btn btn-dark w-100">Procesar orden de compra</button>
                  <button className="btn btn-white w-100">Seguir comprando</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
