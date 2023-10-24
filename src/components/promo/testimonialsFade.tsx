import Reviews from '../reviews/reviewRating';
interface Props {
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
}

export default function TestimonialsFade({
  pageHeaderBgImg,
  pageHeaderMinVh
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
    },
  } as const;

  return (
    <>
      <section>
        <div className="page-header rounded-top" style={styles.pageHeader}>
          <div className="faded opacity-10"></div>
          <div className="container z-index-2">
            <div className="row justify-content-center">
              <div className="col-sm-9 text-center mx-auto pt-6">
                <h1 className="mb-4">Descuentos exclusivos para socios</h1>
                <p className="lead mb-sm-5 px-md-8">Ahora es el momento de ser grandioso y hacer de otros Por ser un color brillante. Por destacar. Pero ahora es el momento de estar bien y ser el mejor tú.</p>
                <button className="btn btn-dark btn-lg d-flex align-items-center mx-auto">
                  <svg className="me-2" width="15" height="15" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00002 3.4999C4.00002 2.34011 4.94023 1.3999 6.10002 1.3999C6.63788 1.3999 7.12849 1.6021 7.50002 1.93463C7.87158 1.6021 8.36214 1.3999 8.90002 1.3999C10.0599 1.3999 11 2.34011 11 3.4999C11 3.74535 10.9579 3.98096 10.8805 4.1999H11.7C12.4732 4.1999 13.1 4.8267 13.1 5.5999C13.1 6.3731 12.4732 6.9999 11.7 6.9999H8.20002V6.2999C8.20002 5.91331 7.88663 5.5999 7.50002 5.5999C7.11343 5.5999 6.80002 5.9133 6.80002 6.2999V6.9999H3.30002C2.52683 6.9999 1.90002 6.3731 1.90002 5.5999C1.90002 4.8267 2.52683 4.1999 3.30002 4.1999H4.11952C4.04213 3.98096 4.00002 3.74535 4.00002 3.4999ZM6.80002 4.1999V3.4999C6.80002 3.11331 6.48662 2.7999 6.10002 2.7999C5.71343 2.7999 5.40002 3.11331 5.40002 3.4999C5.40002 3.8865 5.71343 4.1999 6.10002 4.1999H6.80002ZM8.90002 4.1999C9.28663 4.1999 9.60003 3.8865 9.60003 3.4999C9.60003 3.11331 9.28663 2.7999 8.90002 2.7999C8.51341 2.7999 8.20002 3.11331 8.20002 3.4999V4.1999H8.90002Z" fill="white"/>
                    <path d="M6.79998 7.69995H2.59998V11.2C2.59998 11.9732 3.22678 12.6 3.99998 12.6H6.79998V7.69995Z" fill="white"/>
                    <path d="M8.20001 12.6H11C11.7732 12.6 12.4 11.9732 12.4 11.2V7.69995H8.20001V12.6Z" fill="white"/>
                  </svg>
                  Obtén tu código
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h3 className="font-weight-bolder mt-4 mb-2">La opinión de nuestros clientes</h3> 
          <p className="mb-5 w-60">Romper con las fronteras y limitaciones es posible.</p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border shadow-xs mb-4">
                <div className="card-body text-start p-3 w-100">
                  <Reviews rating = "4" />
                  <p className="mt-4">No siempre estamos en la posición que queremos estar. Estamos en constante crecimiento. Constantemente cometemos errores. Estamos constantemente tratando de expresarnos y hacer realidad nuestros sueños. Si tienes la oportunidad de jugar este juego de la vida, debes apreciar cada momento.</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm position-relative me-2">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" className="rounded-circle" />
                    </div>
                    <h6 className="mb-0">Alexa Liras</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border shadow-xs mb-4">
                <div className="card-body text-start p-3 w-100">
                  <Reviews rating = "5" />
                  <p className="mt-4">No hay nada que realmente quisiera hacer en la vida en lo que no pude mejorar. Esa es mi habilidad. En realidad, no tengo ningún talento específico para nada excepto la capacidad de aprender. Eso es lo que hago. Eso es para lo que estoy aquí. No tengas miedo de equivocarte porque no puedes aprender nada de un cumplido.</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm position-relative me-2">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" className="rounded-circle" />
                    </div>
                    <h6 className="mb-0">Laurent Perrier</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card border shadow-xs mb-4">
                <div className="card-body text-start p-3 w-100">
                  <Reviews rating = "4" />
                  <p className="mt-4">Realmente importa y luego realmente no importa. Lo que importa son las personas que se sienten estimuladas por ello. Y a la gente que se siente ofendida por ello, no importa. Porque se trata de motivar a los hacedores. Porque estoy aquí para seguir mis sueños e inspirar a otras personas a seguir los suyos.</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm position-relative me-2">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" className="rounded-circle" />
                    </div>
                    <h6 className="mb-0">Michael Levi</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};