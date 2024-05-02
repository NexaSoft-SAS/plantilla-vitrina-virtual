import ReviewComment from "./reviewComment";

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

export default function ReviewSimple({ reviews }: Props) {
  let CommentsList: any[] = [];

  reviews.map((review) => {
    CommentsList.push(<ReviewComment review={review} />);
  });
  return (
    <>
      <div className="mx-auto text-center w-md-60 mb-5">
        <h3>La opinión de nuestros clientes</h3>
        <p>Romper con las fronteras y limitaciones es posible.</p>
      </div>
      <div className="w-100 w-md-80 w-lg-60 mx-auto">{CommentsList}</div>
    </>
  );
}
