import { Modal, useModal, Button, Text } from "@nextui-org/react";
// import { Image } from "@nextui-org/react";
import { Card, Col, Row, Grid } from "@nextui-org/react";
import Blog1 from "@/app/components/Blog1"
import Blog2 from "@/app/components/Blog2"
import Blog3 from "@/app/components/Blog3"
import '@/app/styles/blog.css'

// import Image from "next/image";

export default function App() {


    return (
        <>

            <Grid.Container gap={3} justify="center">
                <Grid className="cards" xs={12} sm={3}>
                    <Card className="card_boxx" css={{ w: "300px", h: "400px" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    New
                                </Text>
                                <Text h3 color="Cornsilk" >
                                    Expert Freelancers
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src="/images/Optimized-card1.jpg"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#ffffff66",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Text color="#000" size={12}>
                                        Available soon.
                                    </Text>
                                    <Text color="#000" size={12}>
                                        Get notified.
                                    </Text>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Blog1 />
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid className="cards" xs={12} sm={3}>
                    <Card className="card_boxx" css={{ w: "300px", h: "400px" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    New
                                </Text>
                                <Text h3 color="Cornsilk">
                                    Professional Services
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src="/images/Optimized-card3.jpg"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#ffffff66",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Text color="#000" size={12}>
                                        Available soon.
                                    </Text>
                                    <Text color="#000" size={12}>
                                        Get notified.
                                    </Text>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Blog2 />
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

                <Grid className="cards" xs={12} sm={3}>
                    <Card className="card_boxx" css={{ w: "300px", h: "400px" }}>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    New
                                </Text>
                                <Text h3 color="Cornsilk">
                                    Flexible Solutions
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                            <Card.Image
                                src="/images/Optimized-card4.jpg"
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#ffffff66",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row>
                                <Col>
                                    <Text color="#000" size={12}>
                                        Available soon.
                                    </Text>
                                    <Text color="#000" size={12}>
                                        Get notified.
                                    </Text>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Blog3 />
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>

            </Grid.Container>



        </>
    );
}
