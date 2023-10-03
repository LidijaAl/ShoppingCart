import { Card, Carousel, CarouselItem, Col, Image, Row } from "react-bootstrap";

export function Home() {
  return (
    <>
      <h2 className="mt-4 fs-3">
        The latest.{" "}
        <span className="text-muted">
          Take a look at what's new, right now.
        </span>
      </h2>

      <Carousel style={{ width: "83%", margin: "3rem auto" }}>
        <CarouselItem interval={4000}>
          <Image src="/images/New-Iphone.png" fluid />
        </CarouselItem>
        <CarouselItem interval={4000}>
          <Image src="/images/New-AppleWatch.png" fluid />
        </CarouselItem>
        <CarouselItem interval={4000}>
          <Image src="/images/New-Ipad.png" fluid />
        </CarouselItem>
      </Carousel>

      <h2 className="fs-3">
        The Apple experience.{" "}
        <span className="text-muted">
          Do even more with Apple products and services.
        </span>
      </h2>

      <Row xs={2} md={2} lg={4} className="g-1 mt-4 mb-3">
        <Col >
          <Card className="h-100">
            <Card.Img src="/images/more-apple-services.png"/>
          </Card>
        </Col>

        <Col>
          <Card className="h-100">
            <Card.Img src="/images/more-applecare.png" />
          </Card>
        </Col>

        <Col>
          <Card className="h-100">
            <Card.Img src="/images/more-applepay.png" />
          </Card>
        </Col>

        <Col>
          <Card className="h-100">
            <Card.Img src="/images/more-home.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
