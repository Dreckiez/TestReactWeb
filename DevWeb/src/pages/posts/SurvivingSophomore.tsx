import Navbar from '../../components/Navbar';

const SurvivingSophomore = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(images/nnnoise.svg)' }}>
            <Navbar />

            {/* Main Container: Centered, Reading Width, No Sidebar */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
                
                {/* 1. Navigation: The "Back" Command */}
                <div className="mb-8">
                    <a href="/posts" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono transition-colors group">
                        <span className="text-blue-400 group-hover:-translate-x-1 transition-transform">➜</span> cd ..
                    </a>
                </div>

                {/* 2. The "VIM" Window */}
                <div className="w-full shadow-2xl">
                    
                    {/* Window Header */}
                    <div className="bg-[#1e2124] rounded-t-xl border-x border-t border-[#2f3136] p-2 flex justify-between items-center px-4 select-none">
                        <span className="text-xs text-gray-500 font-mono">nvim surviving_sophomore.md</span>
                        <span className="text-xs text-gray-600 font-mono">Read Only</span>
                    </div>

                    {/* Content Area */}
                    <article className="bg-[#151719]/90 border-x border-b border-[#2f3136] rounded-b-xl p-8 md:p-12 backdrop-blur-sm">
                        
                        {/* Post Header */}
                        <header className="mb-10 border-b border-gray-800 pb-8 text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                Surviving Sophomore Year
                            </h1>
                            <div className="flex justify-center items-center gap-4 text-sm font-mono text-gray-500">
                                <span>25-09-2025</span>
                                <span>•</span>
                                <span>10 min read</span>
                            </div>
                        </header>

                        {/* Post Body - Typography Styles */}
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            
                            {/* Main Banner Image */}
                            <div className="mb-8 rounded-lg overflow-hidden border border-[#2f3136] shadow-lg">
                                <img src="images/posts/Sep.jpg" alt="Travel Pic" className="w-full h-auto object-cover" />
                            </div>

                            <p>
                                Looking back at sophomore year, I can honestly say that it was a rollercoaster ride of events that pushed me well beyond my comfort level and eventually to the determination of what would become my academic path. From trying out an unexpected salesman job to deep-diving into frontend development frameworks and getting submerged in math projects, this year taught me much about myself and what I want to do.
                            </p>

                            {/* Section 1 */}
                            <div className="mt-12 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-emerald-400 text-base">##</span> First Semester: The Unlikely Salesman
                                </h2>
                                <hr className="border-gray-800 mb-6" />
                            </div>

                            <p>
                                Anyone who studies in my program knows the beauty of first-semester subjects: they tend to go easy on you, which means I have more spare time. But instead of using it to binge Netflix or gatekeeping Valorant gold lobby, I decided to do something completely out of character for me—I got a part-time job as a salesman.
                            </p>
                            <p>
                                I still don't know what possessed me to choose sales when I'm such an introvert. Maybe I needed the money and the opportunity came just right in time. Yeah, I was short on money, so there I was, trying to convince people to buy products while having no idea what I'm doing.
                            </p>
                            <p>
                                The job itself was decent, I'll give it that, my coworkers were absolutely amazing. They were friendly, patient with my clumsiness, and incredibly helpful in showing me the ropes. The problem wasn't the people or even the work environment; it was the commission system that killed my motivation.
                            </p>

                            {/* Inline Image */}
                            <figure className="my-8">
                                <img src="images/posts/stonks.jpg" alt="Stonks meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                                <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">1$/h was OK? I guess</figcaption>
                            </figure>

                            <p>
                                Instead of getting a percentage of sales (which would make total sense, right?), we got a fixed rate of about $2-4 per item sold. No matter if you sold a $300 item or a $1000 item, the commission was the same. But what really broke the camel's back was having to advertise on Facebook. As someone who prefers to be a ghost on social media rather than actively interact with it, this was pure torture for me.
                            </p>
                            <p>
                                After five months of forcing myself through uncomfortable sales pitches and Facebook posts, I finally called it quits. It wasn't a bad experience overall, but it definitely confirmed that sales isn't my calling.
                            </p>

                            {/* Section 2 */}
                            <div className="mt-12 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-emerald-400 text-base">##</span> Second Semester: The Calm Before the Storm
                                </h2>
                                <hr className="border-gray-800 mb-6" />
                            </div>

                            <p>
                                Honestly, not much of anything was going on in second semester. It was one of those periods where things just happened. I attended classes, did some assignments, went to work (the semester start a month before I quit the job), and spent too much time playing games or sleeping. Little did I know that a storm was approaching.
                            </p>
                            
                            <figure className="my-8">
                                <img src="images/posts/StormsComing.jpeg" alt="Storm Vergil Meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                            </figure>

                            {/* Section 3 */}
                            <div className="mt-12 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-emerald-400 text-base">##</span> Third Semester: Welcome to Hell
                                </h2>
                                <hr className="border-gray-800 mb-6" />
                            </div>

                            <p>
                                It comes and says: "お前はもう死んでいる", then proceeds to destroy us. That's the characteristic of the third semester, it's like: "Okay, I've been nice long enough. Now go to hell!! Hahahahahahahaa...".
                            </p>
                            <p>
                                This term also had me dive into frontend development for the first time correctly. While I've played around with HTML, CSS, and JavaScript before, this was when I finally explored the frameworks that actually power modern web development: <span className="text-blue-300">React, Next.js, Tailwind, TypeScript</span>—all the things that used to intimidate me now made sense as I worked on a fairly <i>well</i> <b>big</b> web project.
                            </p>

                            <figure className="my-8">
                                <img src="images/posts/ModernFE.webp" alt="Frontend Meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                            </figure>

                            <p>
                                But here's where things got really intense: my <i><b>"Applied Maths and Statistics for IT"</b></i> course. Every week brought new homework assignments (which were manageable) and projects (which weren't). I found myself implementing matrix operations and eigenvector algorithms. My brain broke, honestly.
                            </p>

                            {/* Section 4 */}
                            <div className="mt-12 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-emerald-400 text-base">##</span> The Big Decision: Choosing My Specialty
                                </h2>
                                <hr className="border-gray-800 mb-6" />
                            </div>

                            <p>
                                One of the unique things about my IT program is that we spend the first two years on general subjects before choosing our specialty based on our GPA. It's both terrifying and exciting.
                            </p>
                            <p>
                                The options were diverse: Software Engineering, Cybersecurity, Data Science, Computer Vision, AI. Despite a lot of slip ups, I managed to get into <span className="text-emerald-400 font-bold">Software Engineering</span>—which, let's be honest, was always going to be my first choice.
                            </p>

                            {/* Highlight Box for the Conclusion */}
                            <blockquote className="border-l-4 border-blue-500/50 pl-4 py-2 my-8 italic text-gray-400 bg-blue-500/5 rounded-r-lg">
                                "Coding is what I'm actually good at, and it's what brings me genuine satisfaction when seeing the app that I built... Works."
                            </blockquote>

                            <figure className="my-8">
                                <img src="images/posts/sweat.png" alt="Fate Meme" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                            </figure>

                            {/* Final Section */}
                            <div className="mt-12 mb-6">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-emerald-400 text-base">##</span> Looking Forward
                                </h2>
                                <hr className="border-gray-800 mb-6" />
                            </div>

                            <p>
                                I'm now planning on specializing in <span className="text-emerald-400 font-bold">DevOps</span> during my third year and beyond. I'm planning to dive deep into the DevOps ecosystem—learning about Docker, Kubernetes, Jenkins, and AWS.
                            </p>
                            <p>
                                Here's to junior year—may it bring clarity, growth, and the confidence that comes from knowing you're on the right path.
                            </p>

                        </div>

                        {/* Footer / EOF */}
                        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                            <span className="inline-block px-3 py-1 bg-gray-800 rounded text-xs text-gray-500 font-mono">
                                EOF
                            </span>
                        </div>

                    </article>
                </div>

            </div>
        </div>
    );
};

export default SurvivingSophomore;