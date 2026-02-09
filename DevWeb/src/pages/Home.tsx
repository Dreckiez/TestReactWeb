import Navbar from '../components/Navbar';
// import blogsData from '../data/blogs.json';
// import projectsData from '../data/projects.json';
import ProfileCard from '../components/ProfileCard';
import TerminalWindow from '../components/TerminalWindow';

const Home = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
            <Navbar />

            
            {/* Main Layout Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20">
                
                <div className="flex flex-col md:flex-row gap-8">
                
                    <ProfileCard></ProfileCard>

                    <TerminalWindow title='root@dreckiez:~/home ヾ(•ω•`)o'>
                        {/* SHORT INTRO */}
                        <div className="font-mono mb-8">
                            <div className="text-emerald-400 mb-2">
                                <span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="text-yellow-300">whoami</span>
                            </div>
                            <p className="text-xl text-[#e8eef2] leading-relaxed font-light">
                                I'm a <span className="font-bold text-white">Software Engineering Student</span> at HCMUS. 
                                I bridge the gap between <span className="text-blue-300 border-b border-blue-300/30">code</span> and <span className="text-emerald-400 border-b border-emerald-400/30">infrastructure</span>.
                                Currently exploring DevOps, Cloud, and building systems that scale.
                                <span className="block mt-4 text-gray-500 text-sm font-mono">// (｡•̀ᴗ-)✧ just trying my best</span>
                            </p>
                        </div>

                        {/* LATEST ACTIVITY */}
                        <section className="mb-10">
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
                                Latest Logs
                            </h2>
                            
                            {/* Example Blog Card 1 */}
                            <div className="group mb-4 cursor-pointer">
                                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-gray-700">
                                    <div className="text-gray-500 font-mono text-sm min-w-25">2024-05-12</div>
                                    <div>
                                        <h3 className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">
                                            Why I moved from Frontend to DevOps
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Reflecting on my lack of "color sense" and finding my true calling in system architecture...
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Example Project Card 2 */}
                            <div className="group mb-4 cursor-pointer">
                                <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-gray-700">
                                    <div className="text-gray-500 font-mono text-sm min-w-25">Project</div>
                                    <div>
                                        <h3 className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors">
                                            Hand-Crafted HTML Blog
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Building a blog without a generator. Just raw HTML, CSS, and grit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <a href="/posts" className="text-sm font-mono text-gray-500 hover:text-white transition-colors">
                                    ➜ View all posts
                                </a>
                            </div>
                        </section>

                        {/* TECH STACK */}
                        <section>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
                                System Configuration
                            </h2>
                            <div className="bg-[#1e2124] rounded-lg p-5 border border-[#2f3136] overflow-x-auto shadow-inner group hover:border-gray-600 transition-colors">
                                <pre className="font-mono text-sm leading-6">
                                    <code>
                                        <span className="text-pink-400">current_stack:</span>{'\n'}
                                        <span className="text-blue-300">  core:</span>        <span className="text-yellow-300">[</span>"C++", "Linux", "Bash"<span className="text-yellow-300">]</span>{'\n'}
                                        <span className="text-blue-300">  web:</span>         <span className="text-yellow-300">[</span>"React", "NextJS", "Tailwind"<span className="text-yellow-300">]</span>{'\n'}
                                        <span className="text-blue-300">  learning:</span>    <span className="text-yellow-300">[</span>"Jenkins", "Docker", "AWS", "CI/CD"<span className="text-yellow-300">]</span>
                                    </code>
                                </pre>
                            </div>
                        </section>
                    </TerminalWindow>
                </div>
            </div>

            <footer className='py-7 flex justify-center text-gray-600 text-sm'>
            </footer>
        </div>
    );
};

export default Home;