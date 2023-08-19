import React, { useState } from "react";
import { Button, Carousel, Col, Container, Form, Image, Row } from 'react-bootstrap';
// import '../../../styles/toggles.scss';
import '../../../styles/ClassSetViewerTradingPost.scss';

import classSetsSeptember from '../../../assets/images/trading post/class sets/armour/class-sets-armour-september.png';
import classSetsOctober from '../../../assets/images/trading post/class sets/armour/class-sets-armour-october.png';
import classSetsNovember from '../../../assets/images/trading post/class sets/armour/class-sets-armour-november.png';
import classSetsDecember from '../../../assets/images/trading post/class sets/armour/class-sets-armour-december.png';

import paladinWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-paladin.png';
import priestWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-priest.png';
import rogueWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-rogue.png';
import deathKnightWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-death-knight.png';
import demonHunterWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-demon-hunter.png';
import druidWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-druid.png';
import monkWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-monk.png';
import warlockWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-warlock.png';
import warriorWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-warrior.png';
import evokerWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-evoker.png';
import hunterWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-hunter.png';
import mageWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-mage.png';
import shamanWeapons from '../../../assets/images/trading post/class sets/weapons/class-sets-weapons-shaman.png';

// used this to convert the avif images to png - https://pixelied.com/convert/avif-converter/avif-to-png/



function ClassSetViewerTradingPost(props) {
  const [showContent, setShowContent] = useState(false);
  const [contentShown, setContentShown] = useState('false');
  const [index, setIndex] = useState(0);
  let screenSize = window.innerWidth;

  const contentGroups = {
    armour: { classSetsSeptember, classSetsOctober, classSetsNovember, classSetsDecember },
    weapons: { paladinWeapons, priestWeapons, rogueWeapons, deathKnightWeapons, demonHunterWeapons, druidWeapons, monkWeapons, warlockWeapons, warriorWeapons, evokerWeapons, hunterWeapons, mageWeapons, shamanWeapons },
    september: { classSetsSeptember, paladinWeapons, priestWeapons, rogueWeapons },
    october: { classSetsOctober, deathKnightWeapons, demonHunterWeapons, druidWeapons },
    november: { classSetsNovember, monkWeapons, warlockWeapons, warriorWeapons },
    december: { classSetsDecember, evokerWeapons, hunterWeapons, mageWeapons, shamanWeapons },
  }

  const headerRowProps = {
    showContent: showContent,
    setShowContent: setShowContent,
    contentShown: contentShown,
    setContentShown: setContentShown,
    contentGroups: contentGroups,
  }

  const viewerProps = {
    showContent: showContent,
    setShowContent: setShowContent,
    contentShown: contentShown,
    setContentShown: setContentShown,
    contentGroups: contentGroups,
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // return (
  //   <>
  //     {
  //       screenSize < 768 ?
  //         <DesktopScreen {...viewerProps} /> :
  //         <DesktopScreen {...viewerProps} />
  //     }
  //   </>
  // )

  return (
    <div className={`class-set-viewer -large-screen ${showContent ? 'p-2 pt-1' : 'px-2 py-1'}`}>
      <HeaderRow {...headerRowProps} />
      <ImageViewer {...viewerProps} />
    </div>
  )
}

// function PhoneScreen(props) {
//   const { showContent, setShowContent } = props;

//   return (
//     <div className='class-set-viewer -small-screen'>
//       <a className='button-row' href='https://worldofwarcraft.blizzard.com/en-us/news/23985777/new-class-sets-coming-to-the-trading-post'>
//         see the sets!
//       </a>
//     </div>
//   )
// }

// function DesktopScreen(props) {
//   const { showContent, setShowContent } = props;

//   return (
//     <div className={`class-set-viewer -large-screen ${showContent ? 'p-2 pt-1' : 'px-2 py-1'}`}>
//       <HeaderRow showContent={showContent} setShowContent={setShowContent} />
//     </div>
//   )
// }


const HeaderRow = (props) => {
  const { showContent, setShowContent, contentShown, setContentShown, contentGroups } = props;
  // let openClose = showContent ? 'mb-2' : 'mb-2';
  //${openClose}

  function generateButtons(contentGroups, contentShown, setContentShown) {
    return Object.keys(contentGroups).map((key, index) => (
      <Col>
        <Button
          key={index}
          variant={contentShown === key ? 'primary' : 'secondary'}
          className={`viewer-toggle-button align-self-stretch my-1`}
          onClick={() => {
            if (!showContent) {
              setShowContent(true)
              // setContentShown(key)
            }
            else if (showContent) {
              // setContentShown(key)
              // setShowContent(false);
            }
            setContentShown(key)
          }}>
          {key}
        </Button>
      </Col>
    ));
  }

  return (
    <div className={`header-row d-flex flex-row p-0 gap-2`}>
      <h1>view sets</h1>

      <div>
        <Row className='view-button-row m-auto d-flex gap-2'>
          {generateButtons(contentGroups, contentShown, setContentShown)}

          <Col className=''>
            <Button
              variant={showContent ? 'danger' : 'secondary'}
              className={`viewer-toggle-button align-self-stretch my-1`}
              onClick={() => {
                setShowContent(!showContent)
                // setContentShown(false);
                if (!showContent) {
                  setContentShown(contentShown);
                }
              }}>
              {showContent ? 'close' : 'open'}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

function ImageViewer(props) {
  const { showContent, contentShown, contentGroups } = props;
  let openClose = showContent ? 'mt-1' : 'd-none';

  function generateCarouselItems(contentGroups) {
    console.log("Selected content group:", contentGroups);
    return Object.keys(contentGroups).map((key, index) => (
      <Carousel.Item key={index}>
        <img className="d-block" src={contentGroups[key]} alt="..." />
      </Carousel.Item>
    ));
  }

  console.log("Content shown:", contentShown);
  const selectedContentGroup = contentGroups[contentShown];
  console.log("Selected content:", selectedContentGroup);

  if (!selectedContentGroup) return null;

  return (
    <Carousel className={`item-carousel ${openClose}`} interval={null}>
      {generateCarouselItems(selectedContentGroup)}
    </Carousel>
  );
}

export default ClassSetViewerTradingPost;



// const functionSnippet = () => {
//   return (
//     <Row>
//       <Col>
//         <Button
//           variant={showContent ? 'danger' : 'secondary'}
//           className={`viewer-toggle-button align-self-stretch my-1`}
//           onClick={() => setShowContent(!showContent)}>
//           {/* {showContent ? 'close' : 'open'} */}
//           armour
//         </Button>
//       </Col>
//       <Col>
//         <Button
//           variant={showContent ? 'danger' : 'secondary'}
//           className={`viewer-toggle-button align-self-stretch my-1`}
//           onClick={() => setShowContent(!showContent)}>
//           weapons
//         </Button>
//       </Col>
//       <Col>
//         <Button
//           variant={showContent ? 'danger' : 'secondary'}
//           className={`viewer-toggle-button align-self-stretch my-1`}
//           onClick={() => setShowContent(!showContent)}>
//           september
//         </Button>
//       </Col>
//       <Col>
//         <Button
//           variant={showContent ? 'danger' : 'secondary'}
//           className={`viewer-toggle-button align-self-stretch my-1`}
//           onClick={() => setShowContent(!showContent)}>
//           october
//         </Button>
//       </Col>
//       <Col>
//         <Button
//           variant={showContent ? 'danger' : 'secondary'}
//           className={`viewer-toggle-button align-self-stretch my-1`}
//           onClick={() => setShowContent(!showContent)}>
//           november
//         </Button>
//       </Col>
//       <Col>
//         <Button
//           variant={showContent ? 'danger' : 'secondary'}
//           className={`viewer-toggle-button align-self-stretch my-1`}
//           onClick={() => setShowContent(!showContent)}>
//           december
//         </Button>
//       </Col>
//     </Row>
//   )
// }