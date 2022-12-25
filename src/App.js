import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container" id="content">    
<div id="header"> 
<header>
<h2>some book suggestions from 3RI Technologies</h2>
</header>
</div>

<div className="container">
 <img src ={require('./assets/images/1 paper.jpeg')}/>
<h6>Sarah Horton and whitney Quesenbery</h6>
<a href="https://www.amazon.in/Web-Everyone-Designing-Accessible-Experiences/dp/1933820977">A Web for Everyone: Designing Accessible User Experiences</a>
<p className="author">Rosenfield Media</p>
<p className="s"> January 2014</p>
<p className="s">ISBN:1933820977</p>
</div>

<div className="container">
<img src ={require('./assets/images/2 paper.jpeg')}/>
<h6>David Sawyer mcfarland</h6>
<a href="https://www.amazon.in/Wikipedia-Missing-Manual-John-Broughton/dp/0596515162">The Missing Manual</a>
<p className="author">Rosenfield Media</p>
<p className="s"> August 2015</p>
<p className="s">ISBN:1491918055</p>
</div>

<div className="container">
<img src ={require('./assets/images/3 paper.jpeg')}/>
<h6>steve krug</h6>
<a href="https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515">Don't Make Me think, Revisited A Common Sense Approach To Web Usability</a>
<p className="author">Rosenfield Media</p>
<p className="s"> January 2014</p>
<p className="s">ISBN:0239165515</p>

</div>
<div className="container">
<img src ={require('./assets/images/4 paper.jpeg')}/>
<h6>john duckett</h6>
<a href="https://www.amazon.in/HTML-CSS-Design-Build-Websites/dp/1118008189">HTML & CSS: Design and Build Web Sites</a>
<p className="author">Rosenfield Media</p>
<p className="s"> November 2011</p>
<p className="s">ISBN:1118008189</p>

</div>
<div className="container">
<img src ={require('./assets/images/5 paper.jpeg')}/>
<h6>david sawyer mcfarland</h6>
<a href="https://www.amazon.in/JavaScript-jQuery-David-Sawyer-McFarland/dp/9351108074">JavaScript & jQuery: The Missing Manual( Missing Manuals )</a>
<p className="author">Rosenfield Media</p>
<p className="s"> October 2014</p>
<p className="s">ISBN:1491947071</p>
</div>

</div>
    
  );
}

export default App;
