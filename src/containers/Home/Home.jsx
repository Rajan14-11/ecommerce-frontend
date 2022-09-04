import React from "react";
import Layout from "../../components/Layout/index";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <Layout>
      <>
        <div class="container-fluid text-dark p-5 mt-4">
          <div class="container p-5 text-center">
            <h1 class="display-4 fw-bold ">Welcome to Admin Dashboard</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              tenetur incidunt vero ducimus esse nam fuga! Asperiores, quas
              maiores, maxime expedita, quod itaque non mollitia quidem pariatur
              necessitatibus eum amet sunt velit! Numquam, mollitia?Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Eveniet voluptatum
              nihil cupiditate quis quod, eum sapiente consequatur perspiciatis
              obcaecati illum suscipit, numquam soluta! Maxime ipsam dolor
              distinctio! Nam iste excepturi illo praesentium deleniti
              exercitationem?
            </p>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Home;
