import React from 'react';
import '../App.css';
import '../styles/hobbies.css';
/*Hobbies section is made up of a main hobbies container which contqains wrappers for each player description. Each description has an image preceding it */

function Hobbies() {
  return (
    // Main hobbies container
    <div id="hobbies">
      {/* Main title on hobbies section */}
      <h1 className="hobbiesTitle">Hobbies and Interests</h1>
      {/* Hobbies intro just below the title */}
      <h2 className="hobbiesDesc">In my spare time, I enjoy watching and playing a multitude of sports.</h2>

      {/* Image for Robert Lewandowski, the soccer player */}
      <img className="soccer" src="/lewa.jpg" alt="Lewandowski Picture" />
      {/* Give each hobby its own wrapper div */}
      <div className="hobbiesWrapper">
        {/*P tag representing the player description  */}
        <p className="playerDesc">
          {/* Put the team name in a span in order to make it a different color from the rest of the text */}
          <span className="lewaColor">Bayern Munich</span> is my favorite soccer team. Rober Lewandowski, who plays as a striker, is my favorite player from that team. Prior to the start of the 2014–15 Bundesliga season, Lewandowski agreed to join Bayern Munich on a free transfer. In Munich, he has won the Bundesliga title in each of his first seven seasons. Lewandowski was integral in Bayern's UEFA Champions League win in 2019–20 as part of a treble. He is one of only two players, alongside Johan Cruyff, to achieve the European treble, while being the top scorer in all three competitions. In 2020, Lewandowski won the Best FIFA Men's Player Award and the UEFA Men's Player of the Year Award. He has been named to the UEFA Team of the Year twice and the UEFA Champions League Squad of the Season four times, and is the third-highest goalscorer in the history of the competition. Lewandowski has been named the VDV Bundesliga Player of the Season a record five times. He has scored over 270 goals in the Bundesliga.
        </p>

      </div>

    {/* Image for RJ Barret, the basketball player */}
      <img className="basketball" src="/rj.jpg" alt="RJ Barret Picture" />
      <div className="hobbiesWrapper">
        <p className="playerDesc">
          <span className="knicksColor">The Knicks</span> are my favorite basketball team. RJ Barret is my favorite Knicks player. Born in Toronto as the son of former basketball player Rowan Barrett, Barrett shone at St. Marcellinus Secondary School in Mississauga, Ontario, before transferring to Montverde Academy in Montverde, Florida. He was a five-star recruit and the consensus top recruit in the 2018 class, earning Naismith Prep Player of the Year and Gatorade National Player of the Year accolades in his final high school season whilst playing as a shooting guard a majority of the season. He was ranked the top player in his class by all recruiting services and was the first player since LeBron James to sweep all major awards in high school and win the national championship.
        </p>
      </div>

      {/* Image for Saquon Barkley, the American football player*/}
      <img className="football" src="/saquon.jpg" alt="Saquon Barkley Picture" />
      <div className="hobbiesWrapper">
        <p className="playerDesc">
          <span className="giantsColor">The Giants</span> are my favorite American football team. Saquon Barkley is my favorite Giants player. He plays as a running back. His electric runs that stop defenders from tackling him are what sparked my interest in him. As a rookie during the 2018 NFL season Barkley set numerous league and franchise records while on his way to a 1,300+ yard rushing season and a Pro Bowl nod. In 2018, Barkley set multiple league records, one of which was recording the most receptions by a rookie running back. Barkley also set three franchise records for rookies: most rushing touchdowns, most rushing yards, and most total touchdowns.
        </p>
      </div>




    </div>
  );
}

export default Hobbies;
