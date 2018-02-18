import Social from './social'

const Greeting = () => (
  <h2>
    <span className="p-name">Jonathan Jenne</span>
    <a href="/" rel="author" className="u-url u-uid" />
    <style jsx>{`
      h2 {
        margin: 0;
        font-family: 'Playfair Display', serif;
        font-weight: 100;
        font-size: 35px;
      }
    `}</style>
  </h2>
)

const About = () => (
  <aside className="about h-card">
    <div className="wrapper">
      <div className="flex">
        <img
          className="avatar u-photo"
          src="/static/heidelberg-2017.png"
          alt="Jonathan Jenne's Avatar"
        />
        <div className="description">
          <Greeting />
        </div>
      </div>
      <Social />
    </div>

    <style jsx>{`
      aside.about {
        padding: 30px 0;
        border-bottom: 1px solid #e8e8e8;
        overflow: auto;
      }

      .flex {
        display: flex;
        flex-wrap: no-wrap;
      }

      .avatar {
        width: 150px;
        height: 150px;
        border-radius: 5px;
        margin-right: 10px;
      }

      .tag {
        display: inline-block;
        margin-right: 5px;
        color: #333;
        font-size: 1.1rem;
      }

      .tag .hash {
        color: #888;
      }
    `}</style>
  </aside>
)

export default About
