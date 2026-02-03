import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Card from '../components/Card';
import blogsData from '../data/blogs.json';
import projectsData from '../data/projects.json';
import contactsData from "../data/contacts.json";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="empty-top"></div>

            <main className="main-page">
                {/* Profile Section */}
                <div className="home-page">
                    <article className="PF">
                        <img src="images/6854_ORmr1H8w.png" alt="Dreckiez" className="PFP" />
                        <h1 className="PFP-name">Dreckiez</h1>
                        <h2 className="PFP-line">An IT major student trying to tackles DEADLINES</h2>
                        <div className="PFP-contact">
                            <ul className="contacts">
                                {contactsData.map((contact, idx) => (
                                    <li key={idx} className="contactli">
                                        <a href={`${contact.href}`} title={`${contact.title}`} target="_blank">
                                            <i className={`${contact.class}`} style={{color: `${contact.color}`}}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </div>

                {/* Blog Section */}
                <section>
                    <div className="blogs-block">
                        <blockquote className="blogtitle">
                            <div className="blogs-block-text">
                                <div className="heading">
                                    <span className="subheading">My</span>
                                    <span className="mainheading">Thoughts</span>
                                </div>
                                <div className="line"></div>
                            </div>
                        </blockquote>

                        <div id="blogs-posts-cards">
                            {blogsData.slice(0,6).map((post) => (
                                <Card 
                                    key={post.id}
                                    title={post.title}
                                    date={post.date}
                                    banner={post.banner}
                                    summary={post.content}
                                    link={post.link}
                                    isExternal={false}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section>
                    <div className="projects-block">
                        <blockquote className="projtitle">
                            <div className="blogs-block-text">
                                <div className="projline"></div>
                                <div className="heading">
                                    <span className="mainheading">Projects</span>
                                </div>
                            </div>
                        </blockquote>

                        <div id="projects-posts-cards">
                            {projectsData.slice(0,6).map((proj) => (
                                <Card 
                                    key={proj.id}
                                    title={proj.title}
                                    // date={proj.date}
                                    banner={proj.banner}
                                    summary={proj.content}
                                    link={proj.link}
                                    isExternal={true}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </>
    );
};

export default Home;