import React from 'react'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import FeatureCard3 from '../components/feature-card3'
import PlaceCard from '../components/place-card'
import FeatureCard4 from '../components/feature-card4'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Hot_Hares</title>
        <meta property="og:title" content="Hot_Hares" />
      </Helmet>
      <div className="landing-page-top-container">
        <nav data-role="Header" className="landing-page-navbar">
          <img
            alt="image"
            src="/playground_assets/1-700h.png"
            className="landing-page-image"
          />
          <div className="landing-page-right-side">
            <a href="#main-section" className="landing-page-link">
              <SolidButton button="Discord"></SolidButton>
            </a>
          </div>
          <div data-type="BurgerMenu" className="landing-page-burger-menu">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-type="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side1">
                <div className="landing-page-links-container">
                  <span className="landing-page-text">Home</span>
                  <span className="landing-page-text01">About</span>
                  <span className="landing-page-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="landing-page-link1">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="landing-page-follow-container">
              <span className="landing-page-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="landing-page-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link2"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link3"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link4"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="landing-page-hero">
          <div className="landing-page-content-container">
            <h1 className="landing-page-text05 heading">Hot Hares</h1>
            <h2 className="landing-page-subheading subheading">
              <span>Celebrating the</span>
              <br></br>
              <span>2nd coming of Ethereum</span>
            </h2>
            <span className="landing-page-text09">
              <span>Hodlers, Hardhats &amp; Handsome hares with</span>
              <br></br>
              <span>a hardon for happy go lucky lyrical magic</span>
            </span>
            <SolidButton button="Twitter"></SolidButton>
          </div>
        </div>
      </div>
      <div className="landing-page-features">
        <h1 className="landing-page-text13">Hottest Album of Metaverse</h1>
        <span className="landing-page-text14">
          <span>
            6666 Hares are here to hype up Eth 2.0 by dropping bars on discord
            &amp; converting it into a dope music video album of 4 songs.
          </span>
          <br></br>
          <span>
            All holders will own the commercial copyrights to the music
          </span>
        </span>
        <div className="landing-page-container01">
          <FeatureCard3
            title="HotHeads"
            description="&amp; then the first hare said - Let there be hype"
            rootClassName="rootClassName"
          ></FeatureCard3>
          <FeatureCard3
            title="MergeMania"
            description="Wake me up when September comes"
            rootClassName="rootClassName3"
          ></FeatureCard3>
          <FeatureCard3
            title="ProofOfDrake"
            description="God's Jam"
            rootClassName="rootClassName5"
          ></FeatureCard3>
          <FeatureCard3
            title="HashedPotatoes"
            description="Based song. No really based on mashed, smashed &amp; bigbashed potatoes."
            rootClassName="rootClassName1"
          ></FeatureCard3>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <h1 className="landing-page-text18">We All Gonna Be Hare</h1>
        <span className="landing-page-text19">
          Hello from the hotheads behind the project
        </span>
        <div className="landing-page-cards-container">
          <PlaceCard
            city="Wendys Warhol🗑️🎨🖌️"
            image="/playground_assets/10-300h.png"
            description="Doodler since 1st Grade.\nProject made in fond memory of Pebbles"
          ></PlaceCard>
          <PlaceCard
            city="Third Eye🧿"
            image="/playground_assets/2-300h.png"
            description="Got a taste for talent. Cofounder &amp; Crypto Degen. Solid in solidity &amp; drunk in Pina Coladas. Also moonlights as Twitter Shitposter"
          ></PlaceCard>
          <PlaceCard
            city="HypeHead💽🎧"
            image="/playground_assets/30-300h.png"
            description="Got music on my mind &amp; my mind on references across popcultural spacetime. Will make beats for ETH"
          ></PlaceCard>
          <PlaceCard
            city="Gordono🍌🍕"
            image="/playground_assets/9-300h.png"
            description="Unpaid intern in chief &amp; chef extranoobordinary.\nDiscord Mod &amp; Fast food eater. Probably gonna die from choking on the 690th popcorn pizza."
          ></PlaceCard>
          <PlaceCard
            city="Discord Horde👹"
            image="/playground_assets/31-300h.png"
            description="Community extraordinaire. As Harry McHare said 👉You complete us👈"
          ></PlaceCard>
          <PlaceCard
            city="Twitteratis🐦"
            image="/playground_assets/24-300h.png"
            description="Hyper in Chief. Love all those who spread our word to the faraway degentralands. we❤️you. Even the auto🤖s."
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-banner">
        <h1 className="landing-page-text20">Wat Utility?</h1>
        <span className="landing-page-text21">
          <span>
            <span>
              &amp; we thought you&apos;d never ask. Well apart from being
              hotter than their cooler counterparts, Hares are adept at
              surviving any crypto winters &amp; hyped up heatwaves. Hot Hares
              are here for the long run giving you commercial rights over music
              &amp; art. &amp; Grammarly is giving us a Friendly, confident
              &amp; informal rating to our text. Vibe with us.
            </span>
          </span>
          <span></span>
        </span>
        <div className="landing-page-btn-group">
          <button className="landing-page-button button">Discord</button>
          <button className="landing-page-button1 button">Twitter</button>
        </div>
      </div>
      <div className="landing-page-steps">
        <h1 className="landing-page-text25">
          <span>MusicMap for our RoadTrip</span>
        </h1>
        <span className="landing-page-text27">
          <span>Also known as Roadmap but we wanted to be kewl</span>
          <br></br>
          <span></span>
        </span>
        <div className="landing-page-container02">
          <div className="landing-page-step">
            <div className="landing-page-container03">
              <div className="landing-page-line"></div>
              <div className="landing-page-container04">
                <svg viewBox="0 0 1024 1024" className="landing-page-icon11">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="landing-page-line1"></div>
            </div>
            <div className="landing-page-container05">
              <h1 className="landing-page-text30">
                <span>Ideate</span>
              </h1>
              <span className="landing-page-text32">
                <span>
                  1st step has already begun as we ideate. Are you up for the
                  journey Matey?
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="landing-page-step1">
            <div className="landing-page-container06">
              <div className="landing-page-line2"></div>
              <div className="landing-page-container07">
                <svg viewBox="0 0 1024 1024" className="landing-page-icon13">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="landing-page-line3"></div>
            </div>
            <div className="landing-page-container08">
              <h1 className="landing-page-text35">
                <span>Design</span>
              </h1>
              <span className="landing-page-text37">
                <span>
                  25% of the budget goes towards the artistic render of our look
                  &amp; feel
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="landing-page-step2">
            <div className="landing-page-container09">
              <div className="landing-page-line4"></div>
              <div className="landing-page-container10">
                <svg viewBox="0 0 1024 1024" className="landing-page-icon15">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="landing-page-line5"></div>
            </div>
            <div className="landing-page-container11">
              <h1 className="landing-page-text40">
                <span>Develop</span>
              </h1>
              <span className="landing-page-text42">
                <span>
                  25% goes to actually making it. Lemme introduce you to the 90
                  90 rule of development
                </span>
              </span>
            </div>
          </div>
          <div className="landing-page-step3">
            <div className="landing-page-container12">
              <div className="landing-page-line6"></div>
              <div className="landing-page-container13">
                <svg viewBox="0 0 1024 1024" className="landing-page-icon18">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="landing-page-line7"></div>
            </div>
            <div className="landing-page-container14">
              <h1 className="landing-page-text44">
                <span>WorldWideVibe</span>
              </h1>
              <span className="landing-page-text46">
                <span>
                  Promote our video towards mainstream music enthusiasts
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-pricing">
        <div className="landing-page-container15">
          <div className="landing-page-container16">
            <h1 className="landing-page-text49">Wen Mint?</h1>
            <span className="landing-page-text50">
              <span>
                <span>
                  HypeList will be available to the most hardcore hares.
                </span>
              </span>
              <br></br>
              <span>
                Grab your HypeList role by hyping us in the twitter, discord
                &amp; insta socials. Hypelist is also given to the hottest, most
                fun, even the coolest of hotheads in our channels &amp; engaging
                individuals who participate in the various meme events, rap
                disses &amp; drop bars in the music video section
              </span>
            </span>
          </div>
          <div className="landing-page-container17">
            <div className="landing-page-container18">
              <span className="landing-page-text55">HypeList</span>
              <span className="landing-page-text56">Ξ0.01</span>
              <span className="landing-page-text57">
                <span className="landing-page-text58">666 WL</span>
              </span>
              <span className="landing-page-text59">
                <span className="landing-page-text60">2mints/wallet</span>
              </span>
              <span className="landing-page-text61">
                <span className="landing-page-text62">1st August</span>
              </span>
              <span className="landing-page-text63">
                <span className="landing-page-text64">12pm EDT</span>
              </span>
              <button className="landing-page-button2 button">
                Join Discord for HLs updates
              </button>
            </div>
            <div className="landing-page-container19">
              <span className="landing-page-text65">PublicLaunch</span>
              <span className="landing-page-text66">Ξ0.02</span>
              <span className="landing-page-text67">
                <span className="landing-page-text68">6000 public mints</span>
              </span>
              <span className="landing-page-text69">
                <span className="landing-page-text70">10mints/wallet</span>
              </span>
              <span className="landing-page-text71">
                <span className="landing-page-text72">2nd August</span>
              </span>
              <span className="landing-page-text73">
                <span className="landing-page-text74">12pm EDT</span>
              </span>
              <button className="landing-page-button3 button">
                Follow Twitter for Launch Updates
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-features1">
        <h1 className="landing-page-text75">
          <span>Wut rarity</span>
        </h1>
        <h1 className="landing-page-text77">
          <span>100+ layers, 10million+ combinations, 100% hot</span>
        </h1>
        <h1 className="landing-page-text79">
          <span>
            We&apos;ll update the full rarity chart here alongside the
            percentage 10mins after Public Sale
          </span>
        </h1>
        <div className="landing-page-separator"></div>
        <div className="landing-page-container20">
          <div className="landing-page-container21">
            <FeatureCard4
              title="Hare"
              description="8 unique breeds of hares - from household to Arctic"
              rootClassName="rootClassName1"
            ></FeatureCard4>
            <FeatureCard4
              title="Face"
              description="32 expressions capturing the mood - ranging from Thug Lyfe to Tundra Life"
              rootClassName="rootClassName4"
            ></FeatureCard4>
            <FeatureCard4
              title="Hat"
              description="Hats maketh Hares - Harey hart. Hardhats maketh us hard. We reference all the people who make crypto space a better experience - from coders to detectives, from magicians to yoloers"
              rootClassName="rootClassName3"
            ></FeatureCard4>
            <FeatureCard4
              title="Shirt"
              description="Clothes make the metaverse. Naked NFTs have little or no influence in society. Onboard the twain train. From Athletic Bibs to Zootopian donuts, we got it all."
              rootClassName="rootClassName2"
            ></FeatureCard4>
          </div>
          <img
            alt="image"
            src="/playground_assets/1-500h.gif"
            className="landing-page-image1"
          />
        </div>
      </div>
      <div className="landing-page-hero1">
        <h1 className="landing-page-text81">Let&apos;s keep things Hyped</h1>
        <span className="landing-page-text82">2.0</span>
        <div className="landing-page-btn-group1">
          <button className="landing-page-button4 button">wait for it</button>
          <button className="landing-page-button5 button">
            Seriously you gotta wait for it
          </button>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>HotHares</h1>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text83">
              Links, links &amp; more links. Soon even more links
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link5"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon20"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link6"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon22"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
