import React, { forwardRef, memo, useMemo } from 'react';
import './Skills.css';

const Skills = memo(forwardRef<HTMLDivElement>((props, ref) => {
  const skillCategories = useMemo(() => [
    {
      category: 'Programming Languages',
      skills: ['Java', 'C#', 'SQL']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'ASP.NET Core', 'Entity Framework', 'Unity', 'React']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Docker', 'Kubernetes', 'Git', 'AWS', 'GCP', 'Postman', 'Swagger', 'xUnit', 'jUnit', 'JDBC', 'JWT', 'OAuth 2.0', 'Datadog']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'NoSQL', 'MongoDB', 'SQL Server', 'H2']
    },
    {
      category: 'Development Tools',
      skills: ['VS Code', 'IntelliJ', 'Rider', 'DataGrip', 'Figma', 'Jira', 'Unix/Linux', 'Terminal/CLI']
    }
  ], []);

  return (
    <section className="skills-section" ref={ref}>
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-showcase">
          {skillCategories.map((category, index) => (
            <div key={category.category} className="skill-category-wrapper">
              <div className="category-header">
                <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{category.category}</h3>
              </div>
              <div className="skills-flow">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className={`skill-item skill-item-${skillIndex}`}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}));

Skills.displayName = 'Skills';

export default Skills;