export default function About() {
  return (
    <section>
      <header>About me</header>
    <div className="about-image">
      <img src="./images/me.jpeg" alt="Profile" 
      style={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover'
      }} />
    </div>
    <div className="page-content">
      <p> Hi, I'm Nicholas, an aspiring full-stack software developer on a journey to expand my skills and build impactful applications. 
        I have a strong foundation in web development, having learned HTML, CSS, JavaScript, and TypeScript, and I’m comfortable working with frameworks like React and Vite. 
        On the back-end side, I’ve gained experience with Node.js and SQL.</p>
      
      <p>
      As I continue to grow in my development career, I’m excited to dive deeper into NoSQL databases, master the MERN stack, and explore Python. 
      I’m passionate about coding, solving complex problems, and creating software that makes a difference.
      </p>

      <p>
      In my free time I love to play video games, golf, work on my cars and spend time with friends and family. Some games that I enjoy playing are Valorant, CSGO,
      Rocket League and Call of Duty. My favorite golf course that I've ever played has been Lookout Mountain Golf Club in Phoenix, Arizona.
      </p>

      <p>
      Thanks for stopping by my portfolio, and I look forward to connecting and learning more with the developer community and more!      
      </p>
    </div>
  </section>
    );
};
  