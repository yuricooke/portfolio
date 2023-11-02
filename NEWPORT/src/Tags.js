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
            <h3>Skills</h3>
            <hr/> 
            
            <h4>
            Frontend<br/>
            Backend<br/>
            UI<br/>
            UX<br/>
            Visual Design<br/>
            A11Y<br/>
            </h4>
            <h4>
            Python<br/>
            React<br/>
            SQL<br/>
            JavaScript<br/>
            Css/Scss<br/>
            HTML5
            </h4>


        </div>
    )
}

export default Tags