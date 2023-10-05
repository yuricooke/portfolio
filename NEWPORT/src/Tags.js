import React from "react";
import './Tags.css'

const Tags = () => {
    function highlightElementsOnScroll() {
        var elements = document.querySelectorAll('.highlight');
        
        elements.forEach(function(element) {
          var position = element.getBoundingClientRect();
          
          // Check if the element is in the viewport
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('highlighted');
          } else {
            element.classList.remove('highlighted');
          }
        });
      }
      
      window.addEventListener('scroll', highlightElementsOnScroll);
    return(
        <div className="tags">
            <h2>My Skills</h2>
            <h3>
            <span className="highlight highlighted">Frontend</span>&nbsp;&nbsp;
            <span className="highlight highlighted">Backend</span>&nbsp;&nbsp;
            <span className="highlight highlighted">UI</span>&nbsp;&nbsp;
            <span className="highlight highlighted">UX</span>&nbsp;&nbsp;
            <span className="highlight highlighted">Visual Design</span>&nbsp;&nbsp;
            <span className="highlight highlighted">Accessibility</span>&nbsp;&nbsp;
            <span className="highlight highlighted">Python</span>&nbsp;&nbsp;
            <span className="highlight highlighted">React</span>&nbsp;&nbsp;
            <span className="highlight highlighted">SQL</span>&nbsp;&nbsp;
            <span className="highlight highlighted">JavaScript</span>&nbsp;&nbsp;
            <span className="highlight highlighted">Css/Scss</span>&nbsp;&nbsp;
            <span className="highlight highlighted">HTML5</span>&nbsp;&nbsp;


            </h3>
        </div>
    )
}

export default Tags