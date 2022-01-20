import CheckoutCard from "./CheckoutCard";
const Basket = ({ basketData, removeProduct}) => {
  let totalValue = 0;
  let itemDesc = "items";
  if (basketData.length === 1) {
    itemDesc = "item";
  }
  let basketMsg = "Your basket...";
  if (basketData.length === 0) {
    basketMsg = "Your basket is empty...";
  }
  return (
    <div className="modal-wrapper">
      <h2 id="order-panel-heading">{basketMsg}</h2>
      {basketData.length > 0 &&
        basketData.map((item, index) => {
          totalValue += parseInt(item.price);
          return (
            <CheckoutCard
              key={index}
              product={item}
              removeProduct={() => removeProduct(index)}
            />
          );
        })}
        <h3 id="order-panel-sub-total">
        Subtotal ({basketData.length} {itemDesc}): £{totalValue}
      </h3>
    </div>
  );
};
export default Basket;