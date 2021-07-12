import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styles/projects.css';


function Projects() {
  /*Create an image array to loop over during the map in the projectList div. This will give each repo a picture with the corresponding index in the array. */
  let imgArr = ["/guessnumber.png", "restaurant.png", "tictac.png", "/zorkington.png"]
  /*gitHubData is the array of repos and setGitHubData is our updater function to change state. 
  Later in the projectList div, gitHubData is looped over using map and each repo in that array will print out its name and description using p tags */
  const [githubData, setGithubData] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/manofshad97/repos", {
      /*Github said they strongly recommend using this line for headers before using its API */
      headers: {
        accept: "application/vnd.github.v3+json"
      }
    })
    
      .then((res) => res.json())
      .then((data) => setGithubData(data))
  }, [])

  return (
    <div id="projects">
      
      <p className="projectTitle">My Projects</p>
      
      <div className="projectList">
        {githubData.map((repo, index) => (
          <div className="repo">
            
            <p className="repoName">
              {repo.name}
            </p>

            <p className="repoDescription">
              {repo.description}

            </p>

            <a href={"https://github.com/" + repo.full_name} target="_blank" className="repoLink">
              Link
            </a>

            <img className="projImg" src={imgArr[index]} alt="Project Picture" />
          </div>
        ))}
      </div>


    </div>
  );
}

export default Projects;
