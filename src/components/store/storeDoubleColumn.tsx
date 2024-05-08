export default function StoreNavigationDoubleColumn(title?: string) {
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          {!title ? (
            <h6 className="w-100 pb-3 border-bottom"> {title} </h6>
          ) : (
            <h6 className="w-100 pb-3 border-bottom"> Tienda </h6>
          )}
          <div className="d-flex pt-2">
            <ul className="nav flex-column ms-n3">
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Tops
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Diseñadores
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Colección
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Liquidación
                </a>
              </li>
            </ul>
            <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Prints
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Demostración
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Showroom
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h6 className="w-100 pb-3 border-bottom">Categorías</h6>
          <div className="d-flex pt-2">
            <ul className="nav flex-column ms-n3">
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Tops
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Diseñadores
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Colección
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Liquidación
                </a>
              </li>
            </ul>
            <ul className="nav flex-column ms-6 ms-md-11 ms-lg-10">
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Prints
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Demostración
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-body text-sm"
                  href="#"
                  target="_blank"
                >
                  Showroom
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
