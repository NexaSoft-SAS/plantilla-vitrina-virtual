export default function OrderSummary() {
  return (
    <>
      <div className="form-group">
        <label>Número de tarjeta</label>
        <input type="text" className="form-control" placeholder="Introduce un número de tarjeta" />
      </div>
      <div className="row">
        <div className="col-8">
          <div className="form-group">
            <label>Fecha de caducidad (MM/AA)</label>
            <input type="text" className="form-control" placeholder="Introduce una fecha" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CVC</label>
            <input type="text" className="form-control" placeholder="Introduce los 3 dígitos" />
          </div>
        </div>
      </div>
    </>
  );
}