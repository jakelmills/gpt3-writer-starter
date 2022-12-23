import {useCartState}  from "../context/cart";

function CartItem(name, quantity, line_total) {

  return (
    <div>
      <p>{name.name}</p>
      <p>{name.quantity}</p>
      <p>{name.line_total.formatted_with_symbol}</p>
    </div>
  )
}

export default function CartPage() {
  const {line_items} = useCartState()
  // console.log(line_total);
  const isEmpty = line_items.length === 0

  if (isEmpty) return <p>Your cart is empty</p>

  return (
    <div>
      <h1>Cart</h1>
      {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  )
}