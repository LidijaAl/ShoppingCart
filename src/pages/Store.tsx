import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"




export function Store() {
    return (
        <>
         <h2 className="mt-4 mb-4 fs-3">
        Store.{" "}
        <span className="text-muted">
          The best place to by the products you love.
        </span>
      </h2>
        <Row xs={1} md={2} lg={3} className="g-3">
            {storeItems.map(item => (
                 <Col key={item.id}>
                    <StoreItem {...item} />
                 </Col>
            ))}
           
        </Row>
        </>
    )
    
}