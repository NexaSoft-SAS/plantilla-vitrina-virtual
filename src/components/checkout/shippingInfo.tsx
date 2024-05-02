interface Props {
  title?: string;
}

export default function OrderSummary({}: Props) {
  return (
    <>
      <div className="form-group">
        <label>Dirección</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ingresar una dirección"
        />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>Ciudad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresar una ciudad"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>País</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa un país"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Código Postal</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa un código postal"
            />
          </div>
        </div>
      </div>
    </>
  );
}
