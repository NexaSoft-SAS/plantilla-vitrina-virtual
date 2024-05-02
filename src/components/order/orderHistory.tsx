import OrderHistoryCard from "./orderHistoryCard";

interface Props {
  orders: {
    orderNumber: string;
    products: {
      id: string;
      status: string;
      dateModified: string;
      quantity?: number;
    }[];
    address: string;
    email: string;
    date: string;
    payment: {
      cardNumber: string;
      expiringDate: string;
    };
    phoneNumber: string;
  }[];
  products: {
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  }[];
}

export default function OrderHistory({ orders, products }: Props) {
  let orderHistoryCards: any[] = [];

  orders.forEach((order) => {
    let orderProducts: any[] = [];

    order.products.forEach((productDetails) => {
      products.forEach((product) => {
        if (product.id == productDetails.id) {
          orderProducts.push(product);
        }
      });
    });
    orderHistoryCards.push(
      <OrderHistoryCard order={order} products={orderProducts} />,
    );
  });
  return (
    <>
      <div>
        <h3 className="mb-0">Historial de pedidos</h3>
        <p className="mb-5">
          Vea sus pedidos recientes, descargue sus facturas.
        </p>

        {orderHistoryCards}
      </div>
    </>
  );
}
