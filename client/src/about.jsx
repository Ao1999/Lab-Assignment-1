/**
 * File Name: about.jsx
 * Student's Name: AOZENG
 * StudentID: 301173375
 * Date: 2024/05/26
 */
import myImage from '../public/photo.jpg'
export default function About() {
      return (
        <>
          <h2>About Me</h2>
        <p>Hi, I am AOZENG, an international student from China. I am studying Software Engineering program at centennial college. This is my third semester, and I hope to make more friends </p>
        <h3>I love photography, and this is one of my works</h3>
        <div>
      <img src={myImage} alt="my image" width={600} height={450} />
        </div>
        <a href="https://drive.google.com/file/d/1bbeMi33SwLROkZHgxe0_64GWc9CtAtQP/view?usp=sharing" target="_blank" rel="">View My Resume</a>
        
        </>
      );
    }
    