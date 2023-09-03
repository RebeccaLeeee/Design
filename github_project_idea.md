
# Freelance Graphic Designer Portfolio Generator

```typescript
import { resume } from './resume';

class PortfolioGenerator {
  constructor(private resume: Resume) {}

  generatePortfolio(): string {
    const portfolioHTML: string = `
      <!DOCTYPE html>
      <html>

      <head>
        <title>${this.resume.name}'s Portfolio</title>
        <link rel="stylesheet" href="styles.css">
      </head>

      <body>
        <header>
          <h1>${this.resume.name}'s Portfolio</h1>
          <p>${this.resume.email}</p>
          <p>${this.resume.phone}</p>
        </header>

        <main>
          <h2>About Me</h2>
          <p>${this.resume.about}</p>

          <h2>Skills</h2>
          <ul>
            ${this.resume.skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>

          <h2>Experience</h2>
          ${this.generateExperienceSection(this.resume.experience)}

          <h2>Education</h2>
          ${this.generateEducationSection(this.resume.education)}

          <h2>Projects</h2>
          ${this.generateProjectSection(this.resume.projects)}
        </main>

        <footer>
          <p>© ${new Date().getFullYear()} ${this.resume.name}</p>
        </footer>
      </body>

      </html>
    `;

    return portfolioHTML;
  }

  generateExperienceSection(experiences: Experience[]): string {
    return experiences.map(experience => `
      <div>
        <h3>${experience.position}</h3>
        <p>${experience.company}</p>
        <p>${experience.duration}</p>
        <ul>
          ${experience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  generateEducationSection(education: Education[]): string {
    return education.map(edu => `
      <div>
        <h3>${edu.degree}</h3>
        <p>${edu.institution}</p>
        <p>${edu.duration}</p>
      </div>
    `).join('');
  }

  generateProjectSection(projects: Project[]): string {
    return projects.map(project => `
      <div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p>${project.duration}</p>
        <p>${project.technologies.join(', ')}</p>
      </div>
    `).join('');
  }
}

interface Resume {
  name: string;
  email: string;
  phone: string;
  about: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

interface Experience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
}

interface Project {
  name: string;
  description: string;
  duration: string;
  technologies: string[];
}

const myResume: Resume = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  phone: '123-456-7890',
  about: 'I am a passionate graphic designer with over 5 years of experience.',
  skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Typography'],
  experience: [
    {
      position: 'Senior Graphic Designer',
      company: 'ABC Design Studio',
      duration: '2018 - Present',
      responsibilities: [
        'Collaborating with clients to create visually appealing designs.',
        'Managing multiple design projects simultaneously.'
      ]
    },
    // Add more experience entries
  ],
  education: [
    {
      degree: 'Bachelor of Fine Arts',
      institution: 'XYZ University',
      duration: '2015 - 2019'
    },
    // Add more education entries
  ],
  projects: [
    {
      name: 'Logo Redesign',
      description: 'Redesigned company logo to reflect the modern aesthetic.',
      duration: '2 weeks',
      technologies: ['Adobe Illustrator']
    },
    // Add more project entries
  ]
};

const generator = new PortfolioGenerator(myResume);
const portfolio = generator.generatePortfolio();
console.log(portfolio);
```

Please note that this is a TypeScript code snippet. To execute it, you will need to have TypeScript installed and transpile it to JavaScript using the TypeScript compiler (`tsc`) before running it with Node.js or in the browser.
