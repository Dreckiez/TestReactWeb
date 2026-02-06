import Navbar from '../components/Navbar';
import styles from '../css/About.module.css';

const About = () => {
    return (
        <>
            <Navbar />
            <div className={styles.emptytop}></div>

            <main className={styles.mainpage}>
                <div className={styles.homepage}>
                    <article className={styles.blogcontent}>
                        <header>
                            <h1>About Me ヾ(•ω•`)o</h1>
                        </header>

                        <section>
                            <hr />
                            {/* We move the complex gradient style to CSS class 'about-banner' */}
                            <div className={styles.banner} style={{
                                background: "url(/images/grainy.svg), linear-gradient(-20deg, rgba(255,255,255,0.15), #4909a2), linear-gradient(45deg, #3cfa16, #93f87e 80%)",
                                height: "354.57px",
                                borderRadius: "20px"}}>
                            </div>
                            
                            <div className={`${styles.content} ${styles.textcontent}`}>
                                <blockquote className={styles.title}>
                                    <h2>Backstory</h2>
                                    <hr />
                                </blockquote>
                                <p>
                                    こんにちは, my name is Dreckiez. I'm a Software Engineering major at Ho Chi Minh University of Science (HCMUS) working to build a career in coding. I'm especially interested in DevOps and front-end development, and I'd like to learn more about the two as I continue. I find myself confused at times wondering how to remain motivated and what to learn next. There are times when I feel like I have hit a dead end and I do not know what to do next.
                                </p>
                                <p>
                                    I've tried web development, but kept stalling as I'm not very creative and color-sensitive, and it was difficult to create handsome-looking websites. I also had this issue when I tried dabbling in game development — even though I was enthusiastic about the venture, I couldn't come up with any new or interesting game concepts. Lack of ability to be inspired left me clueless, wondering if I was truly cut out for this profession.
                                </p>
                                <p>
                                    In spite of these shortcomings, I'm not giving up. That's why I've gone ahead and created this website — not only to teach myself web development, but also as a way of sharing my experiences and anecdotes with you guys. Plus, it adds a nice touch to my resume!
                                </p>

                                <ul>
                                    <li><b>Languages</b></li>
                                    <ul>
                                        <li>Most Comfortable: C++</li>
                                        <li>Mucking about: Python, React, TypeScript, JavaScript, GDScript,...</li>
                                    </ul>
                                    <li><b>Game</b>: Indie games (occasionally AAA games)</li>
                                    <li><b>Music</b>: Jazz but I listen to Pop more</li>
                                    <li><b>Sport</b>: Badminton, Volleyball, Soccer,...</li>
                                    <li><b>Books</b>: Detective and Light Novels</li>
                                </ul>

                                <blockquote className={styles.title}>
                                    <h2>About This Site</h2>
                                    <hr />
                                </blockquote>
                                <p>
                                    This website's theme and style were greatly inspired by <a href="https://n9o.xyz/" target="_blank" rel="noreferrer">Nuno Coração's</a> <a href="https://blowfish.page/" target="_blank" rel="noreferrer">Blowfish theme</a>, whereas the blog layout in Markdown style was inspired by <a href="https://vinhphamthanh.dev/" target="_blank" rel="noreferrer">@vinhphamthanh</a> - my senpai from my school.
                                </p>
                                <p>
                                    While making this website, I researched Hugo — a static site generator that basically takes Markdown content and converts it into a complete website with layouts and templates. But since I was still learning JavaScript and CSS, I found it too complicated to use. I therefore resorted to the ancient method: hand-crafting an HTML file for every blog post (# `-_ゝ-)
                                </p>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default About;