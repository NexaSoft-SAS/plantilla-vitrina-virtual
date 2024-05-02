import ReviewComment from "./reviewComment";
import ReviewRating from "./reviewRating";
import ReviewProgress from "./reviewProgress";

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    productID: string; // number
  }[];
}

export default function ReviewSummaryChart({ reviews }: Props) {
  let CommentsList: any[] = [];
  let rating: number = 0;

  reviews.map((review) => {
    rating += review.rating;
    CommentsList.push(<ReviewComment review={review} />);
  });

  rating = Math.trunc(rating / reviews.length);

  return (
    <>
      <div className="mx-auto text-center w-md-60 mb-5">
        <h3>La opinión de nuestros clientes</h3>
        <p>Romper con las fronteras y limitaciones es posible.</p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className="p-4 mb-4">
            <h4 className="mb-3">Reseñas de clientes</h4>
            <div className="d-flex align-items-center">
              <h6 className="mb-0 me-2">4.7</h6>
              <ReviewRating rating={rating} />
              <p className="mb-0 ms-2">
                Basado en <b>{reviews.length}</b> reseñas
              </p>
            </div>
            <div className="mt-4 mb-5">
              <ReviewProgress reviews={reviews} />
            </div>
            <h5>Valoramos su opinión</h5>
            <p className="mb-5">
              Ahora es el momento de ser grandioso y hacer de otros grandiosos.
            </p>
            <button className="btn btn-dark w-100 mb-0">
              Escribe una reseña
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-7 max-height-500 overflow-scroll rounded-3 pt-4">
          <div className="card card-plain">
            <div className="card-body">{CommentsList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
