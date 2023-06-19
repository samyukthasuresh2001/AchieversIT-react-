import angular from '../../../assets/images/angular-img.png'
import reactCourse from '../../../assets/images/reactCourse-img.png'
import meanStack from '../../../assets/images/mean-img.jpg'
import mernStack from '../../../assets/images/mern-img.jpg'
import webDev from '../../../assets/images/web-dev-img.jpeg'
import digitalMarket from '../../../assets/images/digital_marketing.jpg'
import reactNative from '../../../assets/images/reactCourse-img.png'
import ionic from '../../../assets/images/ionic-img.png'

const Card1 = () =>{
    return(
        <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" >
              <img src={reactCourse} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Achievers IT React JS Certification Course in Bangalore. We taught you in detailed explanations of what React JS is, why we use React JS, What is JSX, Unidirectional data flow, React Components, React Hooks and React Router, etc. .</p>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="card" >
              <img src={angular} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Angular is popular for making dynamic applications and its information official and reliance infusion includes altogether lessen the measure of code that should be composed. It is being utilized broadly by devlopers for building web, mobile and other applications. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={meanStack} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">"MEAN Stack Front To Back". In this course we will build an in depth full stack social network application using Angular, Express, React, Redux and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full stack application.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={mernStack} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">"MERN Stack Front To Back". In this course we will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+. We will start with a blank text editor and end with a deployed full stack application.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="col-sm-3">
          <div className="card" >
              <img src={webDev} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">We are one of the top web training institutes in Bangalore offering advanced web development courses to our students. Students will get Trained from Professional Experts , who share their experience with you and learn HTML5, CSS3, JavaScript to get Hands-on experience in Web Development Course</p>
              </div>
            </div>

          </div>
          <div className="col-sm-3">
          <div className="card" >
              <img src={digitalMarket} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">The Digital Marketing program from Achieversit will enable you to understand digital customer behavior, build digital marketing strategies, and identify in-demand metrics to effectively measure and optimize ROI..of Web Development Courseof Web Development Course</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
          <div className="card" >
              <img src={reactNative} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">"React Native has created a lot of excitement in the IT industry because of its cross-platform nature Developers can reuse the code between Android, iOS with minimal effort. AchieversIT institute brings you the opportunity to master React Native and embark on a career that will be the demand of the future.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
          <div className="card" >
              <img src={ionic} class="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">In Our course, you will master tips and best practices for Ionic 4 & Ionic 5 that you can immediately implement to build high quality apps. Our course covers a wide variety of topics from increasing app performance, to building custom native plugins, to securing your apps. It's a practical, hands-on experience that will take your app-building skills to the next level.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card1;