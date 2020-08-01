import Head from 'next/head'
import React from "react";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";


export default function Home() {
  return (
    <div >
      <Head>
        <title>BCK API</title>
      </Head>

      <main >
          <Container style={{width: "50%", margin: "auto"}}>
              <Button href={"/api/032f02be-a7d3-41c3-a8f0-a7619ce2abbb?token=1234"} variant={"contained"} style={{margin: "10rem"}}>
                  test api
              </Button>
          </Container>
      </main>
    </div>
  )
}
