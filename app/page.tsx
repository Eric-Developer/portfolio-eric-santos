"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const skills = [
    "/next.svg",
    "/java.svg",
    "/sql.svg",
    "/mongodb.png",
    "/js.png",
    "/ts.png",
    "/python.webp",
    "/node.webp",
    "/html.webp",
    "/css.webp",
    "/bootstrap.webp",
    "/tailwind.webp",
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const [page, setPage] = useState(0);

  const currentSkills = skills.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <div className="hero-container">

      {/* ESQUERDA */}
      <div className="hero-left">
        <h1 className="hero-name">
          Eric <span>Santos</span>
        </h1>

        <h3 className="hero-role">FULLSTACK SOFTWARE ENGINEER</h3>
        <p className="hero-description">
          Formado em Análise e Desenvolvimento de Sistemas, atuo como desenvolvedor
          criando e aprimorando aplicações web. Tenho experiência prática com
          JavaScript, TypeScript, Node.js, Next.js, PHP, Laravel, SQL e outras
          tecnologias voltadas à construção de sistemas modernos. Ao longo da minha
          trajetória, desenvolvi habilidade em solucionar problemas, otimizar processos
          e entregar funcionalidades eficientes. Sou comprometido, aprendo rápido e
          busco sempre evoluir como programador para entregar resultados de qualidade.
        </p>


          <a
          href="/eric-curriculo.pdf"
          download="Eric-Santos-Curriculo.pdf"
          className="btn-primary"
        >
          Download CV
        </a>

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

      {/* SKILLS COM PAGINAÇÃO */}
      <div className="hero-right">
        <h3 className="skills-title">SKILLS</h3>

        <div className="skills-box icons-grid">
          {currentSkills.map((src, index) => (
            <div key={index} className="skill-icon">
              <Image src={src} width={65} height={65} alt="Skill" />
            </div>
          ))}
        </div>

        {/* PAGINAÇÃO (PONTINHOS) */}
        <div className="skills-pagination">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              className={`dot ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
            ></span>
          ))}
        </div>
      </div>

    </div>
  );
}
