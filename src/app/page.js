"use client"
import style from './page.module.css'
import React from 'react';
import { Card, Col, Row, Button, Grid, Text, red } from "@nextui-org/react";
import Link from 'next/link';

const page = () => {
  return (
    <section className={style.card_box}>
    <Grid.Container  gap={2} justify="center">
       <Grid className={style.card} xs={12} sm={7}>
    <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Body css={{ p: "0", bg: "#9c27b0" }}>
      <Card.Image 
        src="images/nextpro1.png"
        objectFit="cover"
        width="100%"
        height="200"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
       
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="images/profile3.png"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text weight="bold" color="#d1d1d1" size={12}>
                Next Pro
              </Text>
              <Text color="#d1d1d1" size={12}>
                Next js Template (1)
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link href="/home1">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026"}}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Get App
              </Text>
            </Button>  </Link>
                     
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </Grid>
  <Grid className={style.card} xs={12} sm={7}>
    <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
       
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="images/profile3.png"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text weight="bold" color="#d1d1d1" size={12}>
                Next Pro
              </Text>
              <Text color="#d1d1d1" size={12}>
                Next js Template (1)
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026"}}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Get App
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </Grid>
  </Grid.Container>
  </section>
  );
};

export default page;