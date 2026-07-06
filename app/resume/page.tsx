import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0F0A1F] px-4 md:px-10 py-6">
      {/* top bar */}
      <div className="flex items-center justify-between mb-8 font-mono text-sm">
        <Link href="/" className="flex items-center gap-2 text-[#6D28D9] hover:text-[#C4B5FD] transition-colors">
          <span>←</span> cd ~/home
        </Link>
        <span className="hidden md:flex items-center gap-2 text-[#6D28D9]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
          Patrick_Walshak_Resume
        </span>
        
          <a href="/resume.pdf"
          download
          className="flex items-center gap-2 border border-[#5EEAD4]/60 text-[#5EEAD4]
                     px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#5EEAD4]/10 transition-colors"
        >
          ↓ Download PDF
        </a>
      </div>

      {/* window card */}
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-[#6D28D9]/35 shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1E1440] border-b border-[#6D28D9]/35">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EE6A5F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5BD4F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#61C554]" />
          <span className="font-mono text-xs text-[#6D28D9] ml-2">resume — Patrick Walshak</span>
        </div>

        <div className="bg-white text-[#1F2430] px-6 md:px-12 py-10">

          {/* header */}
          <div className="flex justify-between items-start gap-6 border-b-2 border-[#1F2430] pb-5 mb-8">
            <div>
              <h1 className="font-mono font-bold text-3xl md:text-4xl tracking-tight">
                Patrick Walshak
              </h1>
              <p className="text-[#6D28D9] font-semibold mt-1 mb-3">
                Full-Stack Software Engineer
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-600">
                <span>📍 Plateau State, Nigeria</span>
                <span>📞 +234 813 607 0069</span>
                <span>📧 patrickwalshak1@gmail.com</span>
                <span>🐙 github.com/WallexCoder</span>
                <span>💼 linkedin.com/in/patrick-walshak-33b3583a2</span>
                <span>🐦 x.com/wallex002</span>
              </div>
            </div>

   
          </div>

          {/* two-column body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* MAIN COLUMN */}
            <div className="md:col-span-2 space-y-8">

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Professional Summary
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Passionate and detail-oriented Full-Stack Software Engineer with hands-on
                  experience designing, developing, and deploying modern web applications
                  using React, Next.js, TypeScript, Node.js, Express.js, Prisma ORM, and PostgreSQL.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  I enjoy transforming ideas into production-ready software by combining clean
                  architecture, scalable backend systems, responsive frontend interfaces, and
                  thoughtful user experiences — building complete web applications from concept
                  to deployment.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Throughout my software engineering journey, I have built responsive websites,
                  authentication systems, RESTful APIs, and full-stack applications while
                  continuously improving my understanding of software design principles,
                  database management, API integration, and modern development workflows.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I believe software engineering is more than writing code — it requires
                  problem-solving, collaboration, continuous learning, and attention to detail.
                  Currently seeking opportunities to contribute to innovative engineering teams,
                  continue expanding my technical expertise, and build software that solves
                  meaningful real-world problems.
                </p>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Professional Experience
                </h2>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-sm">Freelance Web Developer</h3>
                  <span className="text-xs text-gray-400">2025 — Present</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  Designed and developed websites tailored to client requirements, with a
                  strong focus on usability, responsiveness, and performance.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                  <li>Built responsive websites for clients, converting UI designs into functional web applications</li>
                  <li>Developed reusable and maintainable frontend components</li>
                  <li>Optimized websites for desktop and mobile devices</li>
                  <li>Collaborated with clients to understand business requirements</li>
                  <li>Delivered projects within agreed timelines</li>
                  <li>Maintained clean and organized project structures using Git</li>
                </ul>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Software Engineering Training
                </h2>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-sm">Web 2 Advanced Software Engineering Program</h3>
                  <span className="text-xs text-gray-400">2023 — 2026</span>
                </div>
                <p className="text-xs text-[#6D28D9] font-semibold mb-2">Blockfuse Labs</p>
                <p className="text-sm text-gray-700 mb-3">
                  Completed intensive hands-on training covering modern full-stack software
                  engineering concepts, including frontend development, backend development,
                  authentication systems, databases, API development, deployment, and
                  software engineering best practices.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
                    "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Git", "GitHub", "REST APIs", "JWT Authentication"].map((t) => (
                    <span key={t} className="text-[10px] font-mono font-semibold bg-[#EEF2FF] text-[#6D28D9] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Projects
                </h2>
                <h3 className="font-bold text-sm mb-1">NovaFit — Fashion E-Commerce Platform</h3>
                <p className="text-sm text-gray-700 mb-2">
                  NovaFit is a modern fashion and streetwear e-commerce platform designed to
                  provide users with a smooth online shopping experience.
                </p>
                <p className="text-xs font-semibold text-gray-600 mb-1">Key Features</p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4 mb-3">
                  <li>Product browsing and shopping cart functionality</li>
                  <li>Responsive user interface with a modern UI built on Next.js</li>
                  <li>Scalable project architecture with database integration via Prisma ORM</li>
                  <li>Optimized performance across devices</li>
                </ul>
                <p className="text-xs font-semibold text-gray-600 mb-1">My Contributions</p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4 mb-3">
                  <li>Designed and developed the frontend, built reusable React components</li>
                  <li>Structured scalable project architecture and integrated Prisma ORM</li>
                  <li>Implemented responsive layouts, optimized performance across multiple devices</li>
                </ul>
                <div className="flex gap-2 flex-wrap mb-2">
                  {["Next.js", "TypeScript", "Prisma ORM"].map((t) => (
                    <span key={t} className="text-[10px] font-mono font-semibold bg-[#EEF2FF] text-[#6D28D9] px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#6D28D9] font-semibold">
                  github.com/WallexCoder/novafit · novafit-indol.vercel.app
                </p>
              </section>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-8">
              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Technical Skills
                </h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <b>Frontend</b>
                    <p className="text-gray-600 text-xs">HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript, React.js, Next.js, Responsive Web Design</p>
                  </div>
                  <div>
                    <b>Backend</b>
                    <p className="text-gray-600 text-xs">Node.js, Express.js, REST API Development, JWT Authentication, Bcrypt, Prisma ORM</p>
                  </div>
                  <div>
                    <b>Database</b>
                    <p className="text-gray-600 text-xs">PostgreSQL</p>
                  </div>
                  <div>
                    <b>Version Control</b>
                    <p className="text-gray-600 text-xs">Git, GitHub</p>
                  </div>
                  <div>
                    <b>Tools</b>
                    <p className="text-gray-600 text-xs">VS Code, Postman, Vercel, npm</p>
                  </div>
                  <div>
                    <b>Core Skills</b>
                    <p className="text-gray-600 text-xs">API Integration, Authentication &amp; Authorization, Database Design, Problem Solving, Debugging, Clean Code Principles, Component-Based Architecture, Testing Fundamentals</p>
                  </div>
                </div>
              </section>

          

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Areas of Interest
                </h2>
                <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                  <li>Full-Stack Software Engineering</li>
                  <li>Frontend Architecture</li>
                  <li>Backend Development</li>
                  <li>Web Performance</li>
                  <li>Software Design</li>
                  <li>AI Automation</li>
                  <li>Cloud Technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Soft Skills
                </h2>
                <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Continuous Learning</li>
                  <li>Time Management</li>
                  <li>Adaptability</li>
                  <li>Attention to Detail</li>
                  <li>Critical Thinking</li>
                </ul>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Languages
                </h2>
                <p className="text-xs text-gray-600">English</p>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  Availability
                </h2>
                <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                  <li>Full-Time Roles</li>
                  <li>Graduate Programs</li>
                  <li>Remote Opportunities</li>
                  <li>Hybrid Opportunities</li>
                  <li>Freelance Projects</li>
                </ul>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold tracking-widest text-[#6D28D9] uppercase border-b border-gray-200 pb-1 mb-3">
                  References
                </h2>
                <p className="text-xs text-gray-600">Available upon request.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}