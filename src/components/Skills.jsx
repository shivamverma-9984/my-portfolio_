import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const SkillItem = ({ name, iconUrl }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all cursor-pointer aspect-square"
    >
      <img src={iconUrl} alt={name} className="w-10 h-10 mb-3" />
      <span className="text-xs font-semibold text-gray-600 text-center">
        {name}
      </span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            My Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-text-main">
            Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
              <SkillItem
                name="Next.js"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
              <SkillItem
                name="React"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <SkillItem
                name="Redux"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <SkillItem
                name="TypeScript"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <SkillItem
                name="JavaScript"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <SkillItem
                name="Tailwind"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
              <SkillItem
                name="Material UI"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
              <SkillItem
                name="Bootstrap"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <SkillItem
                name="CSS3"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <SkillItem
                name="HTML5"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-3">
              <span className="w-2 h-8 bg-green-500 rounded-full"></span>
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillItem
                name="Node.js"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <SkillItem
                name="Express"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <SkillItem
                name="Nest.js"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
              />
              {/* <SkillItem name="GraphQL" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" /> */}
              <SkillItem
                name="FastAPI"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
              />
            </div>
          </motion.div>

          {/* Database Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Database
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <SkillItem
                name="MongoDB"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <SkillItem
                name="PostgreSQL"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
              <SkillItem
                name="MySQL"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              />
              <SkillItem
                name="Redis"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
              />
            </div>
          </motion.div>

          {/* Tools Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-3">
              <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
              DevOps & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <SkillItem
                name="AWS"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              />
              <SkillItem
                name="Docker"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              />
              <SkillItem
                name="Git"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              />
              <SkillItem
                name="Github"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <SkillItem
                name="Bitbucket"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg"
              />
              <SkillItem
                name="VS Code"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
              <SkillItem
                name="Postman"
                iconUrl="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              />
              <SkillItem
                name="Jira"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
              />
              <SkillItem
                name="Netlify"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
              />
              <SkillItem
                name="Vercel"
                iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
              />
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
