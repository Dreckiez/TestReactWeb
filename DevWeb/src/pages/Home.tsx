import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Card from '../components/Card';
import blogsData from '../data/blogs.json';
import projectsData from '../data/projects.json';
import contactsData from "../data/contacts.json";

const Home = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719]' style={{backgroundImage: 'url(images/nnnoise.svg)'}}>
            <Navbar />
            <div className="min-h-37"></div>

            {/* <div className='flex flex-col grow m-auto px-32 w-5xl box-content'> */}
            <div className='flex flex-col grow mx-auto box-border w-full max-w-7xl px-6 md:px-12 lg:px-32'>
                <main className="flex flex-col grow">
                    {/* Profile Section */}
                    {/* <div className="block"> */}
                        {/* <article className="flex flex-col h-full items-center justify-center text-center w-5xl mx-auto"> */}
                        <article className="flex flex-col items-center justify-center text-center">
                            <img src="images/6854_ORmr1H8w.png" alt="Dreckiez" className="w-36 h-36 mb-2 rounded-[9999px]" />
                            <h1 className="font-extrabold text-3xl sm:text-[2.25rem] leading-10 color-[#e8eef2] m-0">Dreckiez</h1>
                            <h2 className="font-bold text-[rgba(238,240,244,0.7)] sm:text-[1.25rem] text-lg leading-7 m-0">An IT major student trying to tackles DEADLINES</h2>
                            <div className="mt-1">
                                <ul className="m-0 p-0 flex list-none">
                                    {contactsData.map((contact, idx) => (
                                        <li key={idx} className="contactli px-1 text-2xl opacity-55 duration-150 hover:color-[#e8eef2] hover:opacity-100 transition hover:duration-300 hover:-translate-y-1.25">
                                            <a className='color-[#e8eef2] text-decoration-none' href={`${contact.href}`} title={`${contact.title}`} target="_blank">
                                                <i className={`${contact.class}`} style={{color: `${contact.color}`}}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    {/* </div> */}

                    {/* Blog Section */}
                    <section>
                        <div className="blogs-block">
                            <blockquote className="pt-[0.1px] my-[19.2px]">
                                <div className="mb-10 color-[#e8eef2] font-extrabold text-2xl leading-8 flex">
                                    <div className="flex flex-col leading-[3.3rem]">
                                        <span className="text-3xl sm:text-[2.8rem] font-extrabold tracking-wider">My</span>
                                        <span className="text-5xl sm:text-[4.16rem] font-bold">Thoughts</span>
                                    </div>
                                    <div className="grow h-[1.2px] bg-white mt-[4.15rem] sm:mt-[5.4rem] md:mt-24 sm:ml-[1.4rem] ml-4"></div>
                                </div>
                            </blockquote>

                            <div className="grid gap-4 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                            <blockquote className="pt-[0.1px] my-[19.2px] mt-[1.7rem]">
                                <div className="mb-10 color-[#e8eef2] font-extrabold text-2xl leading-8 flex">
                                    <div className="grow h-0.5 bg-white sm:mt-[2.15rem] md:mt-[2.4rem] mt-[1.85rem] sm:mr-[1.4rem] mr-3"></div>
                                    <div className="flex flex-col leading-[3.3rem]">
                                        <span className="text-5xl sm:text-[4.16rem] font-bold">Projects</span>
                                    </div>
                                </div>
                            </blockquote>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
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
            </div>
            <footer className='py-7 flex justify-center'></footer>
        </div>
    );
};

export default Home;