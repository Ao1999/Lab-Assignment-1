/**
 * File Name: project.jsx
 * Student's Name: AOZENG
 * StudentID: 301173375
 * Date: 2024/05/26
 */
import project1Image from '../public/project1.png'; 
import project2Image from '../public/project2.png'; 
import project3Image from '../public/project3.png'; 
export default function Project() {
        return (
          <>
            <h2>My Projects</h2>
        <div>
            <h3>Project1</h3>
            <img src={project1Image} alt="project1Image" width={200} height={150} />
            <p>description: It takes two</p>
            <p>Role: Cody</p>
            <p>Outcome: Cleared</p>
        </div>
        <div>
            <h3>Project2</h3>
            <img src={project2Image} alt="project2Image" width={200} height={150} />
            <p>description: Halo</p>
            <p>Role: master chief</p>
            <p>Outcome: Not Cleared</p>
        </div>
        <div>
            <h3>Project3</h3>
            <img src={project3Image} alt="project3Image" width={200} height={150} />
            <p>description: Battlefield 5</p>
            <p>Role: Jake</p>
            <p>Outcome: Cleared</p>
        </div>
            
            
         </>
        );
      }
    