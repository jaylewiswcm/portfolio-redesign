import React from 'react'
import PhotoGallery from "./PhotoGallery";

const Bio = () => {
  return (
    <div className="bio-container">
      <p>My name’s Jay, I’m from the lovely town of Chepstow, a little place on the border of Wales sat nicely between Cardiff and Bristol. The town itself doesn’t offer much apart from pubs, hairdressers and of course the castle but being along the wye valley is the real beauty with nature all around the natural sights and walks are amazing and I recommend to anyone who hasn’t been before to see for themselves.</p>
      <img className="map" src="../../images/me/map@2x.jpg" alt="Map of Chepstow"/>
      <p>My love for web development comes from the element of building something, being creative and solving problems. I love how these three factors intertwine each day as you develop, it really does make me want to go to my laptop and start coding. The feeling once you’ve conquered a problem that you’ve been challenged by for some time is amazing but also paired with shame from realising the problem was created by you the whole time is just a wonderful add on.</p>
      <p>I love music, I couldn’t live without it whether it’s any kind of rock, disco, liquid DNB, reggae or hip-hop; whatever I’m feeling in the moment is reflected in the music I listen to. My all-time favourite musician though is Jimi Hendrix when I listen to him I’m in constant awe of how good he plays the guitar, he is the greatest. My love of music developed into wanting to create music so I started to teach myself the guitar and 7 years on I use it as a type of mediation for myself where I can express my feelings through it.</p>
      <p>I like to be somewhat conscious about being fit and healthy so I try to keep my fitness up with walks and occasional runs. I like to be in nature so that’s why I choose walks over running because I like to take in the environment and make the most of it. I stopped eating meat in 2020 for a couple of reasons but my health was one of them. I also want to do my part in helping the environment and now I do find eating meat a strange concept but I’m not going to preach it. </p>
      <p>Travelling is another love of mine, I love exploring new places, new cultures, different architecture and tasting new food. I love the freedom travelling brings being somewhere you’ve never been before, not being able to speak the language, have all your possessions in one backpack but being a place you wouldn’t even dream exists when coming from a town like Chepstow. I’ve backpacked Europe a couple of times now, most recently Italy and Turkey which was incredible. Looking back at the memories is amazing and gets me through some days. Photography comes hand in hand when travelling and has developed my love for taking photos, organising them and looking back through them. My goal and longtime dream is to get a camper van where I can just set off and go anywhere I want, mainly the coast near the beach somewhere and stay there feeling like I’m in my own little home. </p>
      <PhotoGallery />
    </div>
  )
}

export default Bio;