import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
  
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();

  const quantity = getItemQuantity(id);

  return(
    <>
    <Card className="h-100">
    <Card.Img 
     variant="top"
     src={imgUrl}
     height="200px"
     style={{objectFit: "contain"}}
    />
    <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-5">{name}</span>
            <span className="fs-6 ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="d-flex align-items-center justify-content-center">
          {quantity === 0 ? <Button variant="outline-primary" className="fs-6" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button> : <div className="d-flex align-items-center 
          flex-column" style={{ gap: ".5rem"}}>
            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem", width:"10rem"}}>
              <Button variant="outline-primary" className="w-15" onClick={() => increaseCartQuantity(id)}>+</Button>
              <div>
                <span className="fs-5">{quantity} </span>
                 in cart
              </div>
              <Button variant="outline-primary" className="w-15" onClick={() => decreaseCartQuantity(id)}>-</Button>
            </div>
            <Button variant="outline-danger" className="mt-3 fs-8 pt-1 pb-1 ps-3 pe-3" size="sm" onClick={() => removeFromCart(id)}>REMOVE</Button>
            </div>}
        </div>
    </Card.Body>
    </Card>
    </>
  )
 
}