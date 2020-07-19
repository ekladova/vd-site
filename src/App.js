import React from "react";
import "./App.css";
import { Banner, Mockups, Images } from "./sections";
import { Text } from "./components";

function App() {
  return (
    <>
      <div className="App">
        <Banner />
        <Mockups />
        <Text>
          These are the mock-ups for the Home page, About page and Game page.
          They were created in Figma utilizing the layout grid for more precise
          design.
          <ol>
            <li className="list-element">
              The home page displays the general information of the website: the
              author's name and occupation, visual representation of awards,
              magazine features, textboxes with relevant information,
              mini-product display and a contact form.
            </li>
            <li className="list-element">
              About page features an image, manipulated in Photoshop, as well as
              contact information with social media icons, an SVG timeline, and
              an iframe map
            </li>
            <li className="list-element">
              Finally, the game page acts as a gamified portfolio for the
              author. The users can select a variety of different genres by
              clicking on images (taken from public domain libraries), selecting
              some words and generating a silly text from all the components in
              the end.
            </li>
          </ol>
        </Text>
        <Images />
      </div>
    </>
  );
}

export default App;
