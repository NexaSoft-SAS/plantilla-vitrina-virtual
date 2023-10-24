import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';

interface Props {
  title: string;
  images?: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  featuresDetails: Map<string,string>;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails,
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto text-center">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 pe-5">
          <div className="row">
            <h4 className="mb-3">Descripción del Producto</h4>
            <p className="mb-5">Romper con las fronteras y limitaciones es posible. Es como un niño pequeño, un niño pequeño, que mira los colores y nadie le dice qué colores son buenos, antes de que alguien te diga que no te debería gustar el rosa porque es para niñas, o instantáneamente te convertirías en gay a los dos años. -viejo.</p>
            <ProductFeatureDetails featuresDetails={featuresDetails} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <ProductFeatureImg images={images}/>
        </div>
      </div>
    </div>
    </>
  );
};
