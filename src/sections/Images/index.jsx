import React from "react";
import bannerName from "../../images/bannertree.jpg";
import bannerNoName from "../../images/banner-noname.jpg";
import "./images.css";
import stroke from "../../images/stroke.svg";
import pen from "../../images/pen.jpg";
import treeO from "../../images/tree1.png";
import penO from "../../images/pen-o.png";

import facebookO from "../../images/facebook-original.png";
import instaO from "../../images/insta-original.png";
import facebook from "../../images/facebook.png";
import insta from "../../images/INSTApng.png";

import woman from "../../images/woman.jpg";
import womanO from "../../images/woman-original.jpg";
import tweetGif from "../../images/tweet.gif";
import tweetNonameGig from "../../images/tweet-noname.gif";

const Images = () => {
  return (
    <>
      <div className="header-container">
        <h2 className="h2-header">Images</h2>
      </div>
      <section className="wrap-container">
        <div className="images-section">
          <div className="right">
            <div className="images-container">
              <div>
                <h3 className="h3-header">
                  <a
                    target="_blank"
                    href="https://github.com/ekladova/vd-site/blob/master/src/images/bannertree.jpg"
                  >
                    Banner
                  </a>
                </h3>

                <div className="banner-images-container">
                  <div>
                    <img
                      className="banner-image"
                      src={bannerName}
                      alt="banner with name"
                    />
                  </div>

                  <div>
                    <img
                      className="banner-image"
                      src={bannerNoName}
                      alt="banner without name"
                    />
                  </div>

                  <div>
                    <h3 className="h3-header">Original:</h3>
                    <img
                      className="banner-image"
                      src={treeO}
                      alt="banner without name"
                    />
                  </div>
                  <div className="information">
                    <div className="info">
                      <h3 className="h3-header">Original Size (Tree image)</h3>
                      <p className="info-text">23.4 KB (24,036 bytes)</p>
                      <h3 className="h3-header">Original Dimentions</h3>
                      <p className="info-text">607x557</p>
                    </div>

                    <div className="info">
                      <h3 className="h3-header">Result Size (With text)</h3>
                      <p className="info-text">211 KB (216,277 bytes)</p>
                      <h3 className="h3-header">Result Dimentions</h3>
                      <p className="info-text">1920x1080</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="left">
            <p className="description">
              The banner was created in 2 variations - with and without text.
              This was done with regards to future development and
              responsiveness. The image was composed of a public domain image of
              a tree, a pink (#FFC7C2) background, and placeholder text on the
              background.
            </p>
            <br />
            <br />
            <ol>
              <li className="list-element">
                First, I selected the tree with a Magic Wand tool, inverted the
                selection in order to select the background with an outline of a
                now transparent tree in the middle. After that, on a separate
                layer, I created a white background using a bucket tool and the
                tree selection. The result was a white layer with a transparent
                tree. As the tree was originally black on a white background,
                the contrast allowed to select the desired shape without any
                further issues.
              </li>
              <li className="list-element">
                Then I created a new layer and used the bucket tool to colours
                it pink, and placed it at the very end of the hierarchy.
              </li>
              <li className="list-element">
                After that, I copy-pasted the placeholder text and selected the
                font (Pristina), which was suitable for the overall design of
                the website.
              </li>
              <li className="list-element">
                I then arranged all the layers in the hierarchy:
                <ul>
                  <li className="list-element"> Tree outline</li>
                  <li className="list-element">Text</li>
                  <li className="list-element">Pink background</li>
                </ul>
              </li>
            </ol>
            <p>
              The resulting image was the correct size and vision to suit the
              desired website design. After the initial image was created, I
              then placed the text on the right of the image to simulate the
              website banner. This was done to decrease font-size and placement
              manipulation in future development. The empty banner was then used
              for mobile screen sizes, where the text was rendered with HTML The
              banner is saved for web in progressive JPEG format to decrease the
              loading size.
            </p>
          </div>
        </div>

        <div className="stroke-container">
          <div className="header-container">
            <h3 className="h3-header">
              <a
                href="https://github.com/ekladova/vd-site/blob/master/src/images/stroke.svg"
                target="_blank"
              >
                Stroke
              </a>
            </h3>
          </div>
          <div>
            <img className="stroke" src={stroke} alt="stroke" />
          </div>
          <div className="description">
            <p>
              The stroke was created in the same software using a pen tool and
              exported as SVG. <br />
              The vector graphics allow resizing without displaying the pixel
              grid, which will be extremely useful in future development, where
              the stroke will be resized to fit mobile screens. <br />
              Shape creation:
            </p>
            <ol>
              <li className="list-element">
                I first outlined the shape on a piece of paper to fully
                understand the curves I was about to create with a pen tool
              </li>
              <li className="list-element">
                Then, I started digitising my idea in Figma. I used a pen the
                tool, placed vector points and later manipulated the curves to
                achieve the shape that I've drafted before.
              </li>
              <li className="list-element">
                Finally, I saved the shape in an SVG format. I decided on the
                format considering the development process and responsiveness.
                Saving in an SVG format would preserve the image quality when I
                have to manipulate the website layout for mobile screen size.
                <br />
                As the shape was intended to be a background for the textboxes,
                resizing in a png or jpeg format could break the visual design
                and pixelate the shape.
              </li>
            </ol>
            <div className="information">
              <div className="info">
                <h3 className="h3-header">Result Size</h3>
                <p className="info-text">933 Bytes</p>
                <h3 className="h3-header">Result Dimentions</h3>
                <p className="info-text">1418x404</p>
              </div>
            </div>
          </div>
        </div>

        <div className="images-section">
          <div className="left">
            <div className="header-container">
              <h3 className="h3-header">
                <a
                  href="https://github.com/ekladova/vd-site/blob/master/src/images/pen.jpg"
                  target="_blank"
                >
                  Feather Pen
                </a>
              </h3>
            </div>
            <div>
              <img className="pen" src={pen} alt="pen" />
            </div>
            <div className="header-container">
              <h3 className="h3-header">Original</h3>
            </div>
            <div>
              <img className="pen" src={penO} alt="pen original" />
            </div>
            <div className="information">
              <div className="info">
                <h3 className="h3-header">Original Size (Pen image)</h3>
                <p className="info-text">143 KB (147,272 bytes)</p>
                <h3 className="h3-header">Original Dimentions</h3>
                <p className="info-text">2400x2400</p>
              </div>

              <div className="info">
                <h3 className="h3-header">Result Size</h3>
                <p className="info-text">70.5 KB (72,258 bytes)</p>
                <h3 className="h3-header">Result Dimentions</h3>
                <p className="info-text">642x758</p>
              </div>
            </div>
          </div>
          <div className="right ">
            <p className="description">
              I created this image in a similar way to the banner image to
              create a consistency in website design, with an exception in
              increased complexity in shape as compared to the monolithic tree,
              and a decreased contrast in the original image of the pen.
            </p>
            <ol>
              <li className="list-element">
                First, I selected the shape, holding Ctrl to select multiple
                segments of the image.
              </li>
              <li className="list-element">
                Then, I inverted the selection and made the original image
                invisible, while still preserving the selected shape.
              </li>
              <li className="list-element">
                After that, on a separate layer, I used the bucket tool to paint
                the selected area white to create the background. The result was
                a white image with a transparent feather in the middle.
              </li>
              <li className="list-element">
                I used the bucket tool to paint a new layer pink.
              </li>
              <li className="list-element">
                Then I copy-pasted placeholder text on another layer and
                selected the desired font (Pristina, matching the banner). It
                was important to keep the text layer transparent for the next
                steps to work as intended.
              </li>
              <li className="list-element">
                I created a new layer and used the bucket to paint it pink.
              </li>
              <li className="list-element">
                Then, I arranged all the layers in the hierarchy:
              </li>
              <ul>
                <li className="list-element">Pen </li>
                <li className="list-element">Text</li>
                <li className="list-element">Pink background</li>
              </ul>
              <li className="list-element">
                The resulting image was visually similar to the banner and
                distinctive at the same time. I then used the crop tool to crop
                all the surrounding white space, which will take up an
                additional place on the website.
              </li>
              <li className="list-element">
                After that, I saved the image for the web in progressive jpeg
                format. The reason I decided to use jpeg instead of png was that
                I could understand the layout of my website and know that
                transparency won't be needed in this particular case.
                Additionally, I could make use of progressive loading since
                there are a lot of visuals on the home page and it would be
                useful for them to load in a progressive way, displaying
                meaningful content as soon as possible, gradually increasing the
                image quality, instead of waiting until the whole image loads on
                the page.
              </li>
            </ol>
            <p>
              As it is visible from the homepage mockup, the stroke and the
              feather are supposed to be aligned together to create a unique
              design, reminiscent of an ink stroke from a feather pen. While
              this could create some additional difficulties in the development
              process, it was a necessary addition to create a consistent and
              visually appealing design. At first, I wanted to create a large
              image, combining the 2 images together, however, after evaluating
              possibilities decided against it in favour of an SVG shape, and a
              progressive jpeg pen image.
            </p>
          </div>
        </div>

        <div className="social-container">
          <div className="left">
            <div>
              <div className="header-container">
                <h3 className="h3-header">
                  <a
                    href="https://github.com/ekladova/vd-site/blob/master/src/images/facebook.png"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </h3>
              </div>
              <img className="social" src={facebook} alt="pen" />
            </div>
            <div className="header-container">
              <h3 className="h3-header">Original</h3>
            </div>
            <div>
              <img className="social" src={facebookO} alt="pen original" />
            </div>
            <div className="information">
              <div className="info">
                <h3 className="h3-header">Original Size</h3>
                <p className="info-text">538 KB (551,367 bytes)</p>
                <h3 className="h3-header">Original Dimentions</h3>
                <p className="info-text">1214x1214</p>
              </div>

              <div className="info">
                <h3 className="h3-header">Result Size</h3>
                <p className="info-text">5.44 KB (5,576 bytes)</p>
                <h3 className="h3-header">Result Dimentions</h3>
                <p className="info-text">150x150</p>
              </div>
            </div>
          </div>
          <div className="right description">
            <p className="">
              I created 3 social media icons in a simial visual style but for
              this project, I'm only showcasing 2 of them to display another
              image. For the Facebook icon, I have done a number of
              manipulations.
            </p>
            <ol>
              <li className="list-element">
                Firstly, I opened the original image and selected the letter "f"
                on the logo.
              </li>
              <li className="list-element">
                I made the original layer invisible while preserving the
                selection.
              </li>
              <li className="list-element">
                Then, I created a new layer and used the bucket tool to create a
                new shape.
              </li>
              <li className="list-element">
                After that, I saved the new image for the web in a PNG format in
                order to preserve the alpha-channel (transparency) for the final
                result.
              </li>
              <li className="list-element">
                I made sure to save the new image in much smaller dimensions
                than the original (150x150 for the final result). I knew that I
                would only use the images as social media icons and I didn't
                need a big image just to make it artificially smaller in the
                browser with CSS.
              </li>
              <li className="list-element">
                The result was a Facebook logo, which would later be used in the
                About page of my website as a clickable social media icon.
              </li>
            </ol>
          </div>
        </div>

        <div className="social-container">
          <div className="left">
            <div>
              <div className="header-container">
                <h3 className="h3-header">
                  <a
                    href="https://github.com/ekladova/vd-site/blob/master/src/images/INSTApng.png"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </h3>
              </div>
              <img className="social" src={insta} alt="pen" />
            </div>
            <div className="header-container">
              <h3 className="h3-header">Original</h3>
            </div>
            <div>
              <img className="social" src={instaO} alt="pen original" />
            </div>

            <div className="information">
              <div className="info">
                <h3 className="h3-header">Original Size</h3>
                <p className="info-text">182 KB (186,602 bytes)</p>
                <h3 className="h3-header">Original Dimentions</h3>
                <p className="info-text">600x600</p>
              </div>

              <div className="info">
                <h3 className="h3-header">Result Size</h3>
                <p className="info-text">15.4 KB (15,790 bytes)</p>
                <h3 className="h3-header">Result Dimentions</h3>
                <p className="info-text">150x150</p>
              </div>
            </div>
          </div>
          <div className="description">
            <p>The Instagram icon was created in a similar manner:</p>
            <ol>
              <li className="list-element">
                Firstly, I used a magic wand tool to select the shapes. As an
                Instagram icon is colourful and I wanted to be as precise as
                possible, I set the tolerance to 10-15 and clicked multiple
                times to get all the colours in the shape.
              </li>
              <li className="list-element">
                After getting all the outer colours, I made the original image
                invisible.
              </li>
              <li className="list-element">
                Then, I created a new layer and using the bucket tool filled in
                the selection with a darker pink colour.
              </li>
              <li className="list-element">
                The result was a pink outline of the Instagram logo, with
                transparent padding in the middle. I wasn't satisfied with the
                result and selected the white areas with the magic wand again.
              </li>
              <li className="list-element">
                Then, I selected another colour from the website colours, which
                was a lighter shade of pink and filled in the selection.
              </li>
              <li className="list-element">
                The result was an Instagram logo, painted in the website
                colours, fitting to the general design of the website.
              </li>
              <li className="list-element">
                I then cropped as much of the white space as possible to avoid
                unnecessary spaces around the icon.
              </li>
              <li className="list-element">
                After that, I saved the icon for the web in a PNG format,
                preserving the transparency and, once again, altering the
                dimensions to 150x150.
              </li>
            </ol>
          </div>
        </div>

        <div className="images-section">
          <div className="left">
            <div className="header-container">
              <h3 className="h3-header">
                <a
                  href="https://github.com/ekladova/vd-site/blob/master/src/images/woman.jpg"
                  target="_blank"
                >
                  Woman Photo
                </a>
              </h3>
            </div>
            <div>
              <img className="pen" src={woman} alt="pen" />
            </div>
            <div className="header-container">
              <h3 className="h3-header">Original</h3>
            </div>
            <div>
              <img className="pen" src={womanO} alt="pen original" />
            </div>
            <div className="information">
              <div className="info">
                <h3 className="h3-header">Original Size</h3>
                <p className="info-text">215 KB (221,033 bytes)</p>
                <h3 className="h3-header">Original Dimentions</h3>
                <p className="info-text">1280x960</p>
              </div>

              <div className="info">
                <h3 className="h3-header">Result Size</h3>
                <p className="info-text">42.0 KB (43,055 bytes)</p>
                <h3 className="h3-header">Result Dimentions</h3>
                <p className="info-text">700x525</p>
              </div>
            </div>
          </div>
          <div className="right ">
            <p className="description">
              For this image, my goal was to make it look "vintage" and, at the
              same time, fitting the visual design of the website.
            </p>
            <ol>
              <li className="list-element">
                Firstly, I assessed the state of the original photo. I found it
                to be a little bit boring and the visuals were plain.
              </li>
              <li className="list-element">
                I made a copy of the original "background" layer, containing the
                image.
              </li>
              <li className="list-element">
                On that layer, I applied a "motion blur" filter to create a hazy
                movement effect.
              </li>
              <li className="list-element">
                I then placed the filtered copy of the background on top of the
                original image in the hierarchy and set the opacity of the
                filter to 57%, creating a slight blur.
              </li>
              <li className="list-element">
                After that, I wanted to apply a pink tint on top of the image to
                make it fit more with the colour palette of the website.
              </li>
              <li className="list-element">
                I created a new layer and used the bucket tool to paint it pink.
              </li>
              <li className="list-element">
                Then, I placed the pink layer on top of the original image, but
                below the motion blur filter.
              </li>
              <li className="list-element">
                Then I set the opacity of the pink layer to 20%, creating a
                slight pink tint of the image.
              </li>
              <li className="list-element">
                After that, I thought that to fully create a vintage image, I
                needed some artefacts on the final picture. I selected a brush
                in the shape of "Chunky Charcoal" and set its size to the
                maximum. That gave me an enormous brush with uneven spots,
                similar to spilt liquid stains.
              </li>
              <li className="list-element">
                On a new layer, I centred the brush and clicked the mouse once,
                without moving it, painting the image with the pattern in white
                colour.
              </li>
              <li className="list-element">
                This left me with a layer with white stains on it, which I
                placed first in the hierarchy.
              </li>
              <li className="list-element">
                Then, I opened "blending options and selected "Multiply", which
                left me with subtle pink stains all over the image.
              </li>
              <li className="list-element">
                After, I decided to apply a 5% graining on the base image, just
                to create a more "vintage" effect.
              </li>
              <li className="list-element">
                Lastly, I saved the image for the web in a progressive jpeg
                format to account for the loading times for the end users.
              </li>
            </ol>
          </div>
        </div>

        <div>
          <div className="header-container">
            <h2 className="h2-header">Animated GIF</h2>
          </div>
          <div className="gifs-col">
            <div className="gif-container">
              <img className="gif" src={tweetGif} alt="pen original" />
              <img className="gif" src={tweetNonameGig} alt="pen original" />
            </div>
            <div className="gif-header-container">
              <h3 className="h3-header">
                <a
                  href="https://github.com/ekladova/vd-site/blob/master/src/images/tweet.gif"
                  target="_blank"
                >
                  Text variation
                </a>
              </h3>
              <h3 className="h3-header">
                <a
                  href="https://github.com/ekladova/vd-site/blob/master/src/images/tweet-noname.gif"
                  target="_blank"
                >
                  No-text variation
                </a>
              </h3>
            </div>
          </div>
          <div className="gif-description">
            <p>
              I created 2 variations of the gif image, depending on the context
              where it could be used. In the original vision, the gif with text
              on it would be used at a call-to-action to subscribe to the
              author's twitter, placed in a personal blog or in Instagram
              stories, which allow gif stickers. Alternatively, the gif without
              the text could be used as an image for a future update for the
              website, where a container would show up at the bottom-right
              corner of the website (similar to the chatbots on some websites)
              and display what the author has tweeted last. Although this
              functionality wasn't incorporated in the final version of the
              website, it could act as an inspiration for future development
              updates. These gifs were made in photoshop using the timeline
              feature and layered animation.
            </p>
            <ol>
              <li className="list-element">
                First, I grabbed previously made twitter icon (made in the same
                fashion as the Facebook icon with selection and a bucket tool,
                saved for web in a PNG format).
              </li>
              <li className="list-element">
                I found and similarly painted some music note images, also in
                the PNG format with transparent backgrounds.
              </li>
              <li className="list-element">
                I arranged the bird and the music notes on the canvas, according
                to how I wanted the final product to look.
              </li>
              <li className="list-element">
                After that, I made all the layers invisible, apart from the bird
                (and the text, in its variation).
              </li>
              <li className="list-element">
                I kept creating timeline frames, making a layer visible with
                each frame.
              </li>
              <li className="list-element">
                In the "text" version, I tried changing the delay times on the
                frames to make a more dynamic version, while I kept the delay
                consistent at 0.2sec in the "no-text" version.
              </li>
              <li className="list-element">
                After that, I saved the final version for the web in the GIF
                format, with no transparency to prevent the design from being
                altered by an unfitting background.
              </li>
            </ol>
          </div>
          <div className="information">
            <div className="info">
              <h3 className="h3-header">Text version</h3>
              <p className="info-text">8.06 KB (8,260 bytes)</p>
              <h3 className="h3-header">Dimentions</h3>
              <p className="info-text">400x400</p>
            </div>

            <div className="info">
              <h3 className="h3-header">No text version</h3>
              <p className="info-text">6.69 KB (6,854 bytes)</p>
              <h3 className="h3-header">Result Dimentions</h3>
              <p className="info-text">400x400</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Images;
