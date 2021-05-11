import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Components
import Technology from "../aComponents/Technology";
import AnchorLinkBtn from "../../buttons/AnchorLinkBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
      <p>A huge part of a band these days is to have a place online to engage listeners, followers and promoters. The aim of this site, which was created for a family member, was a place for the band to show video clips and photos of previous shows,  tour dates, who the band are and an easy method for contacting them.</p>
      {/* <img className="page-img"src="../../images/works/dirt/page@2x.jpg" alt="Page spread"/> */}
      <StaticImage
          src="../../../images/works/dirt/page@2x.jpg"
          alt="Dirt full page"
          className="page-img"
          placeholder="blurred"
        />
      <p>When designing the site I had to think of 3 different users: promoters, existing fans and people coming across the band for the first time.</p>
      <p>The band had a great catalogue of photography and videos I wanted to use to interest all 3 users.</p>
      <p>Straight away as you land on the site you are presented with a high-quality image of the band in action showing who they are, letting the user know they are a live performing 4 piece band.</p>
      <p>A play bar at the bottom of the screen allows the user to hear them with ease, which is great for someone wanting a taste of their sound. There is also a video component to the top right of the page enticing the user to click and watch the band perform live.</p>
      <p>All in the first few seconds of being introduced to the site the user knows who they are, what they do and get a great example of what they sound like without having to scroll or look through the site for information.</p>
      <p>The site is a single-page website. I made this decision as the band wanted a simple navigation system where the user wouldn’t get lost in pages.</p> 
      <p>The natural flow of the site goes from an introduction, when they are playing and then on to a better understanding of the band through videos, photography and a bio.</p>
      <p>The site finishes off with a contact component which includes a contact form, social media links and contact details, which is perfect for anyone interested in booking the band for a gig or just wanting to say hello.</p>
      <p>The style of the site has a grunge feel to it which stems from the band’s roots (Alice in Chains, a key member of the Seattle grunge movement).</p>
      <p>The font used is ‘Lacquer’ which brings the grunge feel, paired with a white, black and orange colour scheme.</p>
      <p>Components are positioned and styled on the page to resemble a gig poster, clearly demonstrated through the tour dates and `The Band` components.</p>
      <p>I wanted the site itself to feel like it was part of the band by taking on the band’s style and influence and I believe I achieved this.</p>
      <h4>Technical</h4>
      <p>As this project was my first complete site build, I wanted to keep the technology simple. The front-end is built with simple HTML and CSS. JavaScript is used to add functionality to components for example when toggling and changing the videos. </p>
      <p>To display the videos on the site I had to think of the best method to host and store them because if they were stored locally the site size would be very large and slow down the whole site. To overcome this issue I decided to host the videos on YouTube setting the privacy to private and using the domain as the video src which when selected played using an iframe.</p>
      <p>Using Node.js and Express, I created a server so I could host the site on Heroku. Looking back I would not have done this and used another provider like Netlify to host the site to keep the file size down and slightly speed up the site.</p>
      <h4>Conclusion</h4>
      <p>To review, I believe the project turned out well. The initial aims were met, using imagery and videos to keep fans interested in the band while they are not touring and also acting as a nice introduction to the band for new listeners or promoters.</p>
      <p>All desired elements were included such as gig dates, contact form and a bio and were presented in a way that suits the band and matches their style. I wanted the site to feel like theirs and be a part of them and I feel I have achieved this through the font, style of elements and the positioning of components.</p>
      <p>I do have improvements with the technology used. I want to split the site into components because I believe it is a more organised method of developing and is how I like to develop. This can be done with Gatsby as JavaScript is my strongest language and I believe Gatsby has some great features for a fast and SEO friendly site. Using gatsby would mean there was no need for an express server, so I would remove it and host the site on Netlify.</p>
    <AnchorLinkBtn color="blue" url="/work/#my-works" text="See other projects"/>
    <Technology tech={['HTML', 'Node.js', 'SASS', 'Express', 'JavaScript' , 'Youtube']}/>
    </div>
  )
}

export default Info;