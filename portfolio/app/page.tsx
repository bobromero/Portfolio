import GetCards, { CardType } from '@/public/GetCards'
import React from 'react'
import InfoCard from '@/components/InfoCard'


export default function Page() {
  return (
    <div >
      <div className='grid grid-cols-2'>
        <div className='summary-box'>

          <InfoCard Title="About me">
            <p>
              Hello, my name is Robert John Romero, and I am a software engineer. I love developing software systems especially, but I am extremely interested in all things computer related. My goal is to consistently create robust software that aids in making people’s lives better. 
              My initial interest in learning about computers started when I found out about video game mods. When I was young computers and software seemed mysterious, and something which I only interacted with. Video games like Minecraft seemed no different until I found out about software that could be downloaded to make my favorite game even better. This software was not created by a mysterious all-powerful developer, but by a member of the game’s community, someone like me. The idea of being able to interact with computers in a way that allowed me to craft my own experience sparked an interest in learning about computers that has still not died down and has only grown stronger as I have gotten older.        
              In my sophomore year of High School, I was given the opportunity to try programming by taking an elective for computer science. This sparked my interest in game development, as it naturally was a project idea that interested me. I tried diving headfirst into game development on my own with unity and C#, but with no experience before this, it was extremely hard to follow what was going on. I was not deterred, and I decided to take a step back and focus on the basics, html, CSS, and JavaScript. These were the languages taught in my first class, and after being introduced to react, I was able to create my first full game. This taught me that with enough time, patience, and effort, I could develop anything. The momentum did not stop there, and before I knew it, I was heading to college. 
              The start of college was interesting for me, as I knew a lot of the material ahead of time, so I decided to investigate other ways I could challenge myself. I started with heading back to my roots and looking into game mods development. A game called Valheim released that was notable because of its indie developers. It was made by a small studio and blew up in popularity. The game was made in Unity, which is known for being easy to mod, and subsequently received plenty of mods from the community. I had the idea to try game development in C# again and decided that I was going to make a mod no matter how difficult it was or what I had to do. It was an arduous process, but after a couple of weeks of scouring the internet and asking questions, I learned how to make my very own Valheim mod. 
              I was able to apply this knowledge of Unity C# game modding to introduce another one of my favorite games Slapshot Rebound to the modding scene. I created a discord server and instruction set to help others develop their own games, doing what I could to point those trying to learn in the right direction. After doing this and creating my own mods for the game, the developers recognized my efforts and offered me a position at the company. I had come full circle, starting out my journey as a young kid trying to download mods for my favorite game, to being the developer of one of my favorite games. 
              I continue to learn and develop interesting ideas pushing myself because I know from experience that putting in effort consistently yields results. 
            </p>  
          </InfoCard>

          

        </div>

        <div className='grid grid-rows-2'>

          <div className='summary-box'>
            <h3 className='section-head'>Education</h3>
            <div className='educationDiv'>
              {/* <img src=""></img> */}
              <h4 className='text-xl'>Florida State University</h4>
              <p>January 2022 - December 2025</p>
              <p>Bachelor of Computer Science B.A. </p>
            </div>
            <div className='educationDiv'>
              {/* <img src=""></img> */}
              <h4 className='text-xl'>Christopher Columbus High School</h4>
              <p>August 2017 - June 2021</p>
            </div>
            <div className='educationDiv'>
              {/* <img src=""></img> */}
              <h4 className='text-xl'>Eagle Scout</h4>
              <p>August 2010 - December 2020</p>
              <p>Troop 816</p>
            </div>
          </div>

          <div className='summary-box'>
            <h3 className='section-head'>Skills</h3>
            <div>
              <h4>Web Dev(Html, Css, Javascript)</h4>
              <p>I am familiar with Html, Css, and Javascript and have made extensive use of React and NodeJS.</p>
            </div>
            <div>
              <h4>C# and .Net</h4>
              <p>I have spent a whole lot of time in Visual Studio working with .Net and C#, developing everything from video games to management services.</p>
            </div>
            <div>
              <h4>Game Dev(Unity, Godot)</h4>
              <p>I have spent a lot of time developing games and mods and find it enjoyable to do in my spare time.</p>
            </div>
            <div>
              <h4>Databases(PostgreSQL, MongoDB)</h4>
              <p>Data is the most important part of any tech business, and being proficient in the leading technologies is required.</p>
            </div>
          </div>
        </div>

      </div>

      <div>
        {GetCards(CardType.Card)}
      </div>

    </div>
  )
}
