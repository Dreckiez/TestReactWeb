import Navbar from '../../components/Navbar';
import NVim from '../../components/NVim';
import { Link } from 'react-router-dom';

const GameJam = () => {
    return (
        <div className='min-h-screen font-segoe text-[#e8eef2] bg-[#151719] bg-fixed' style={{ backgroundImage: 'url(../images/nnnoise.svg)' }}>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-12">
                
                <div className="mb-8">
                    <Link to="/posts" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono transition-colors group">
                        <span className="text-blue-400 group-hover:-translate-x-1 transition-transform">➜</span> cd ..
                    </Link>
                </div>

                <NVim filename='game_jam' title='First-Ever Game Jam' date='12-02-2025' time='12 mins read'>
                    
                    <p className="text-xl text-gray-400 italic leading-relaxed max-w-2xl mb-8 mx-auto">
                        36 hours. One theme. Some sleep. How my team turned the concept of an "Economic Bubble" into a functioning Godot game (and how I survived on instant noodles).
                    </p>

                    {/* Banner */}
                    <div className="mb-8 rounded-lg h-96 overflow-hidden border border-[#2f3136] shadow-lg">
                        <img src="../images/posts/GGJVN.jpg" alt="Global Game Jam VietNam" className="w-full h-full object-cover object-center" />
                    </div>

                    {/* Section 1 */}
                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Setup
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        We arrived early, mostly to secure the limited edition Game Jam t-shirts (priorities, right?). The venue was carpeted, AC-cooled, and stocked with enough instant noodles and energy drinks to kill a horse. We grabbed our spot, set up our laptops, and waited for the theme reveal.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/GGJVN_shirt.jpg" alt="Game Jam Shirt" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">Loot secured.</figcaption>
                    </figure>

                    {/* Section 2 */}
                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> The Theme: "Bubble"
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        When the theme <b>"Bubble"</b> dropped, we immediately started brainstorming. While most teams went for soap bubbles or underwater physics, we decided to be nerdy: <span className="text-emerald-400 font-bold">The Economic Bubble</span>.
                    </p>

                    <div className="my-6">
                        <p className="font-bold text-white mb-2">
                            The pitch?
                        </p>

                        <blockquote className="border-l-4 border-emerald-500/50 pl-4 py-3 mb-6 italic text-gray-300 bg-emerald-500/5 rounded-r-lg">
                            "A stock market simulator where players buy and sell to maximize their profits before the market collapses."
                        </blockquote>

                        <p>
                            Due to the 36-hour limit and our <span className="italic text-gray-500">skill issues</span>, we scoped it down from a multiplayer economy to a single-player arcade experience.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Day 1: Asset Hunting & The All-Nighter
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        I took charge of the sound design and game data. Leveraging my experience from a previous project, I scoured <b className='text-blue-400'>Itch.io</b> for audio bundles—carefully auditioning track after track to find the exact vibe that fit our economy theme.
                    </p>
                    <p className='text-pink-300 flex justify-center opacity-80'>Shoutout to the open source community ♥</p>
                    <p>
                        Then came the 'News Feed' logic. I spent the night proofing the text that gives players market hints, literally nodding off at my keyboard multiple times. It wasn't my first all-nighter, but it had been a while since I pulled one.
                    </p>
                    <p>
                        By <b>4:00 AM</b>, I finally crashed for a 2-hour power nap. I woke up at 6:00 AM and went straight back to tweaking data while my teammates headed off to school.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/LimmyWakeUp.jpg" alt="Tired Face" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">Running on 2 hours of sleep.</figcaption>
                    </figure>

                    {/* Section 4 */}
                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Day 2: The Godot Grind
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        After snoozing off for like 3 hours, since the 2-hour nap was <b><i>obviously not enough</i></b>, I woke up again around 10 AM to work on combining the music and sound effects.
                    </p>

                    <blockquote className="border-l-4 border-blue-500/50 pl-4 py-2 my-8 italic text-gray-400 bg-blue-500/5 rounded-r-lg">
                        <b>Side note:</b> If you are getting into Godot, watch <a href="https://www.youtube.com/watch?v=LOhfqjmasi0" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Brackeys' Tutorial</a>, highly recommended if you're learning the engine.
                    </blockquote>

                    <p>
                        Fast forward to the evening, the team gathered for the final stretch. My job was UI integration while my friends handled the candlestick charts and news system. Seven hours of focused coding passed before I finally merged the UI at 3:00 AM.
                    </p>

                    <p>
                        It wasn't smooth sailing, though. I hit a wall with global variables that nearly drove me mad. After some trial and error, we managed to fix the spaghetti code by refactoring the system to use <span className="text-emerald-400 font-bold">Signals</span> instead.
                    </p>

                    <p>
                        With the architecture fixed, only playtesting and debugging remained.
                    </p>

                    <figure className="my-8">
                        <img src="../images/posts/Gameplay.png" alt="Final Product" className="rounded-lg border border-[#2f3136] mx-auto max-w-full md:max-w-md" />
                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-mono italic">The Final Build: EcoBub</figcaption>
                    </figure>

                    {/* Conclusion */}
                    <div className="mt-12 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-emerald-400 text-base">##</span> Retro
                        </h2>
                        <hr className="border-gray-800 mb-6" />
                    </div>

                    <p>
                        Looking back, my first Game Jam was a chaotic success. We didn't make the next Elden Ring, but we shipped <i>something</i>.
                    </p>
                    <p>
                        It was a complete cycle: idea, design, code, panic, debug, polish. I walked away with a finished project, a deeper understanding of Godot's node system, and the confidence that I can actually build things under pressure. I'll definitely be back for the next one.
                    </p>
                </NVim>

            </div>
        </div>
    );
};

export default GameJam;