import ProductRating from '../reviews/reviewRating'
import ProductGallery from './productGallery'
import ProductSizes from './productSizes'

interface Props {
  title?: string;
  colors: string[];
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  price: number;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: Map<string,number>
}

export default function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        {(images.length != 0) && 
          <ProductGallery images={images}/>
        }
        <div className="col-12 col-lg-6 ps-lg-5">
          {(title.length != 0) && 
            <h2 className="mt-4">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }

          <form action="" method="post">
            {(price != 0) && 
              <div className="d-flex">
                <h3 className="font-weight-normal">${price.toLocaleString()}</h3>
                <input className="opacity-0" defaultValue={price} />
              </div>
            }

            {(rating != 0) && 
            <>
              <h3 className="sr-only">Reseñas</h3>
              <div className="d-flex">
                <ProductRating rating={4} />
                <span className="ms-3">{reviews} reseñas</span>
              </div>
            </>
            }
            
            {(sizes.size != 0) && 
              <ProductSizes sizes={sizes}/>
            }
            <button className="btn btn-dark btn-lg" type="submit">Agregar al carrito</button>
          </form>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          <h4>Descripción del Producto</h4>
          <p>No hay nada que realmente quisiera hacer en la vida en lo que no pude mejorar. Esa es mi habilidad. En realidad, no tengo ningún talento específico para nada excepto la capacidad de aprender. Eso es lo que hago. Eso es para lo que estoy aquí. No tengas miedo de equivocarte porque no puedes aprender nada de un cumplido.</p>
          {(highlights.length != 0) && 
           <>
             <h6>Beneficios</h6>
              <ul className="text-sm">
              {highlights.map(highlight => 
                <li className="mb-2">{highlight}</li>
              )}
              </ul>
           </>
          }
           {(details.length != 0) && 
            <>
              <h6>Más sobre el producto</h6>
              <p>{details}</p>
            </>
           }
        </div>
      </div>
    </div>
    </>
  );
};
