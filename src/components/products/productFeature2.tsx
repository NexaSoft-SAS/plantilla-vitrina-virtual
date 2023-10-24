interface Props {
  title: string;
  full_description: string;
  data: Map<string,string>;
}

export default function ProductOverview({
  title,
  full_description,
  data,
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row mt-5">
        <div className="col-12 ">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5 w-lg-70">{full_description}</p>
          }
          
          <div className="nav-wrapper position-relative end-0 pb-4 border-bottom">
            <ul className="nav nav-pills nav-fill p-1 w-lg-50" role="tablist">
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#first-tab" role="tab" aria-controls="material" aria-selected="true">
                  Material
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#second-tab" role="tab" aria-controls="function" aria-selected="false">
                  Función
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#third-tab" role="tab" aria-controls="warranty" aria-selected="false">
                  Garantía
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#fourth-tab" role="tab" aria-controls="instructions" aria-selected="false">
                  Instrucciones
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content tab-space">
            <div
              className="tab-pane active show"
              id="first-tab"
              role="tabpanel"
              aria-labelledby="#material"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4 pe-lg-10">
                  <h5 className="mt-5 mb-4">Material</h5>
                  <p>Si todo lo que hice fracasó (que no es así, en realidad tuvo éxito), el solo hecho de que esté dispuesto a fracasar es una inspiración. La gente tiene tanto miedo de perder que ni siquiera lo intenta.
                    <br/><br/>
                    Una cosa que la gente no puede decir es que no lo estoy intentando, y que no estoy haciendo lo mejor que puedo, y que no estoy tratando de hacerlo de la mejor manera que sé.
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product10.jpg`} alt="" />
                    </div>
                    <div className="col-6 mb-4">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product11.jpg`} alt="" />
                    </div>
                    <div className="col-6 mb-4">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product12.jpg`} alt="" />
                    </div>
                    <div className="col-6">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product13.jpg`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="second-tab"
              role="tabpanel"
              aria-labelledby="#function"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">Functión</h5>
                  <p>Ahora es el momento de ser grandioso y hacer de otros Por ser un color brillante. Por destacar. Pero ahora es el momento de estar bien y ser el mejor tú. 
                    <br/><br/>
                    ¿Creerías en lo que crees, si fueras el único que lo cree? People are so scared to lose that they don't even try. 
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <img className="w-100 rounded-3" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="third-tab"
              role="tabpanel"
              aria-labelledby="#warranty"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">Garantía</h5>
                  <p>Siempre sentí que podía hacer cualquier cosa. ¡Eso es lo principal que controla a la gente! Pensamientos: ¡su percepción de sí mismos! They're slowed down by their perception of themselves.
                    <br/><br/>
                    Si te enseñan que no puedes hacer nada, no harás nada. Me enseñaron que podía hacer de todo.
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <img className="w-100 rounded-3" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="fourth-tab"
              role="tabpanel"
              aria-labelledby="#instructions"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">Instrucciones</h5>
                  <p>No siempre estamos en la posición que queremos estar. Estamos en constante crecimiento. Constantemente cometemos errores. Estamos constantemente tratando de expresarnos y hacer realidad nuestros sueños.
                    <br/><br/>
                    Si tienes la oportunidad de jugar este juego de la vida, debes apreciar cada momento. Mucha gente no aprecia el momento hasta que pasa.
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <img className="w-100 rounded-3" src="https://images.unsplash.com/photo-1611849362103-5c99622adf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
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



