import Image from "next/image";

export default function Home() {
  return (
    <div className="hero-container">

      {/* ESQUERDA — NOME + FUNÇÃO + BOTÃO */}
      <div className="hero-left">
        <h1 className="hero-name">
          Eric <span>Santos</span>
        </h1>

        <h3 className="hero-role">FULLSTACK SOFTWARE ENGINEER</h3>

        <button className="btn-primary">Download CV</button>

        <div className="projects-title">Projetos</div>

        <div className="projects-grid">

          {/* PROJETO 1 */}
          <a
            href="https://agendeaii.com.br/start"
            target="_blank"
            className="project-card"
          >
            <Image
              src="/agendeai.png"
              alt="Agende Aí"
              width={500}
              height={300}
              className="project-image"
            />
          </a>

          {/* PROJETO 2 */}
          <a
            href="https://aprendimais.netlify.app/"
            target="_blank"
            className="project-card"
          >
            <Image
              src="/aprendi.png"
              alt="Aprendi Mais"
              width={500}
              height={300}
              className="project-image"
            />
          </a>

        </div>
      </div>

      {/* FOTO */}
      <div className="hero-profile">
        <div className="profile-circle">
          <Image
            src="/eric.jpeg"
            alt="Foto de Eric Santos"
            width={260}
            height={260}
          />
        </div>
      </div>

      {/* SKILLS */}
      <div className="hero-right">
        <h3 className="skills-title">SKILLS</h3>

        <div className="skills-box icons-grid">
          <div className="skill-icon">
            <Image src="/next.svg" alt="Next.js" width={65} height={65} />
          </div>

          <div className="skill-icon">
            <Image src="/java.svg" alt="Java" width={65} height={65} />
          </div>

          <div className="skill-icon">
            <Image src="/sql.svg" alt="SQL" width={65} height={65} />
          </div>

          <div className="skill-icon">
            <Image src="/mongodb.png" alt="MongoDB" width={65} height={65} />
          </div>

          <div className="skill-icon">
            <Image src="/js.png" alt="JavaScript" width={65} height={65} />
          </div>

          <div className="skill-icon">
            <Image src="/ts.png" alt="TypeScript" width={65} height={65} />
          </div>
        </div>
      </div>

    </div>
  );
}
