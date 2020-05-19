import { h } from 'preact';
import style from './style';
import Header from "../../components/header.js";
import Menu from "../../components/menu.js";
import Footer from "../../components/footer.js";

const Home = () => (
  <div id="wrapper">
  <Header/>
  <Menu/>
  <div id="main">
    <div className="inner">
      <header>
        <h1>This is Phantom, a free, fully responsive site<br/>
          template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
        <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
      </header>
      <section className="tiles">
        <article className="style1">
									<span className="image">
										<img src="../../assets/images/pic01.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Magna</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style2">
									<span className="image">
										<img src="../../assets/images/pic02.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Lorem</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style3">
									<span className="image">
										<img src="../../assets/images/pic03.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Feugiat</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style4">
									<span className="image">
										<img src="../../assets/images/pic04.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Tempus</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style5">
									<span className="image">
										<img src="../../assets/images/pic05.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Aliquam</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style6">
									<span className="image">
										<img src="../../assets/images/pic06.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Veroeros</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style2">
									<span className="image">
										<img src="../../assets/images/pic07.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Ipsum</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style3">
									<span className="image">
										<img src="../../assets/images/pic08.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Dolor</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style1">
									<span className="image">
										<img src="../../assets/images/pic09.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Nullam</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style5">
									<span className="image">
										<img src="../../assets/images/pic10.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Ultricies</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style6">
									<span className="image">
										<img src="../../assets/images/pic11.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Dictum</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
        <article className="style4">
									<span className="image">
										<img src="../../assets/images/pic12.jpg" alt=""/>
									</span>
          <a href="#">
            <h2>Pretium</h2>
            <div className="content">
              <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
            </div>
          </a>
        </article>
      </section>
    </div>
  </div>
  <Footer/>
</div>
);

export default Home;
