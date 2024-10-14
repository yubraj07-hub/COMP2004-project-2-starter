export default function QuantityCounter({
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  id,
  mode,
}) {
  return (
    <div className="ProductQuantityDiv">
      <div
        onClick={() => handleRemoveQuantity(id, mode)}
        className="QuantityBtn"
      >
        <p>➖</p>
      </div>

      <p>{productQuantity}</p>
      <div onClick={() => handleAddQuantity(id, mode)} className="QuantityBtn">
        <p>➕</p>
      </div>
    </div>
  );
}
