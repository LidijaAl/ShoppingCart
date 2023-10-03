import { Card, Image } from "react-bootstrap";

export function About() {
  return (
    <>
      <h2>About</h2>
      <Card className="mt-4" >
        <Card.Text className="p-3 fs-5">
          <p>
            Apple, Inc. engages in the design, manufacture, and sale of
            smartphones, personal computers, tablets, wearables and accessories,
            and other variety of related services.
          </p>
          <p>
            It operates through the following geographical segments: Americas,
            Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas
            segment includes North and South America. The Europe segment
            consists of European countries, as well as India, the Middle East,
            and Africa. The Greater China segment comprises of China, Hong Kong,
            and Taiwan. The Rest of Asia Pacific segment includes Australia and
            Asian countries.
          </p>
          <p>
            Its products and services include iPhone, Mac, iPad, AirPods, Apple
            TV, Apple Watch, Beats products, Apple Care, iCloud, digital content
            stores, streaming, and licensing services. The company was founded
            by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on
            April 1, 1976 and is headquartered in Cupertino, CA.
          </p>
        </Card.Text>
        <Image src= "/images/apple-products.jpg"></Image>
      </Card>
    </>
  );
}
