import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss']
})
export class WorkExperiencesComponent implements OnInit {

  public workplaces = [
    {
      title: 'Business Owner at FluxSolve',
      period: 'Period: March 2023 - Present',
      list: ['Develop and maintain custom websites and web applications for clients, utilizing a variety of programming languages, frameworks, and platforms including HTML, CSS, Typescript, React, Angular, Web Builders',
        'Collaborate with clients to understand their unique needs and translate those requirements into functional web solutions that meet their goals.',
        'Implement responsive design and user experience best practices to ensure that websites and web applications are optimized for all devices and accessible to a wide range of users.',
        'Maintain clear communication with clients throughout the project lifecycle, ensuring that their feedback is heard and incorporated into the development process.',
        'Troubleshoot and resolve issues related to websites and web applications, working quickly to resolve any technical challenges and ensure that clients are satisfied with the end product.',
        'Manage project timelines and budgets to ensure that work is delivered on time and within the agreed-upon scope',
      ],
    },
    {
      title: 'Fullstack Developer at ValeoIt',
      period: 'Period: Jan 2023 - Present',
      list: ['Developed full-stack web applications using Angular 12-14 / React and .NET Core / EF Core for clients.',
        'Designed and implemented a responsive front-end with Figma / Adobe XD then implementing with Angular Material / React MUI or Tailwind components and custom CSS styling',
        'Design and implement AI models using Spark, SKLearn and integrate them into production pipelines to enhance the functionality of applications.',
        'Configured and secured the back-end with JWT authentication, role-based authorization, and HTTPS.',
        'Implemented data access layer using Entity Framework Core and SQL Server, and utilized LINQ for querying and filtering data',
        'Leveraged Azure DevOps for CI/CD pipeline, code version control, and automated testing'],
    },
    {
      title: 'Frontend Developer at ValeoIt',
      period: 'Period: Aug 2022 - Jan 2023',
      list: ['Collaborated with cross-functional teams to develop and maintain web applications using Angular and React.',
        'Designed and developed front-end interfaces using Angular, NgRx, and RxJs, HTML, CSS, and TypeScript',
        'Worked closely with back-end developers to integrate front-end components with RESTful APIs and microservices',
        'Utilized Git for version control and worked with Jenkins for CI/CD pipeline',
        'Worked in Agile teams, participated in daily stand-ups, sprint planning, and retrospective meetings',
        'Contributed to code reviews and mentored junior developers.'],
    },
    {
      title: 'Mthree Collaboration with Morgan Stanley',
      period: 'Period: June 2021 - Aug 2022',
      list: ['Execute full software development life cycle (SDLC), based on the requirements of the shareholders. (The cycles start point is the trader, who is included in all phases, including testing)',
        'Plan out the timeline, the risk assessment and create a regular feedback loop with the clients',
        'Document and maintain software functionality, by examining the codebase of the application, re-factoring the code and adding new functionality through modern APIs',
        'Reduce the load of the application by improving algorithms, and moving our individual services on dedicated hosts provided by the company',
        'Mentored peer engineers on development and best practices (Regular knowledge share sessions within the team)',
        'Technologies: C++, Python, Scala, Perl, Git, Jenkins, Bash, Unix'],
    },
    {
      title: 'OSF Academy Internship (Node.js Project)',
      period: 'Period: May 2021',
      list: ['Short list of learned aspects:', 'JavaScript +HTML + CSS Basics, jQuery library, AJAX, Bootstrap, Node.js, Express, Mongo and REST APIs', 'Objective: Using given endpoints, create a dynamic ecommerce type website'],
    },
    {
      title: 'Financial Consultant at OVB Allfinanz',
      period: 'Period: October 2020 - May 2021',
      list: [
        'Identifying sales opportunities for all the products and services of OVB Romania, oriented towards individuals',
        'Offering a consultancy to the client, concerning their main objectives and needs and advising for a specific financial tool',
        'Increasing the client portofolio and the volume of business together with a direct sales team',
        'Collecting information and documentation related to the products offered',
        'Maintaining a close connection with the clients throughout the whole collaboration',
        'Participation in different social projects and activities',
        'Participation in professional and personal development courses'],
    },
    {
      title: 'Design Engineer at Multimetal Technologies',
      period: 'Period: November 2020 - April 2021',
      list: [
        'Creating the conceptual design, the preliminary design and the prototype for different metal structures and/or equipment',
        'Coordinating the existing teams of production and organizing them by efficiency and procedure',
        'Optimization of projects, FEM and CFD analysis for a safety scope, improvement of costs and used material',
        'Efficient communication within the workforce to speed up the processes',
        'Creating technical drawings in SolidWorks and AutoCAD in an organized manner',
        'Organizing the projects and innovating the existing systems',
      ],
    },
    {
      title: 'Siemens Internship (C++ Focused)',
      period: 'Period: March 2019 - May 2019',
      list: [
        'Working together with a task-force team to creeate a control-access system',
        'Using a set of developing tools including Microsoft Visual Studio (Using C++)',
        'Creating an virtual interface using a cross-platform software (Qt)',
        'Focusing on Object Oriented Programming',
        'Creating and maintaining the connection between the main program and a database made with MySQL',
        'Porting the application on a tablet for ease of use and security reasons',
      ],
    },
    {
      title: 'University: Universitatea Transilvania Brasov, Aerospace Engineering',
      period: 'Period: October 2016 - June 2020',
      list: [
        'Bachelor\'s Thesis - Software and hardware design of a rescue drone',
        'The thesis was offered the support of the university through project funding',
        'Creating and using simulating the networking of the drone using network tools (OPNET)',
        'Programming the active components of the drone and control module (NodeMCU) using coding languages (Arduino)',
        'Designing, analyzing, testing and 3D printing original components, including a tested aerodynamical case (using SolidWorks, Ansys, AAA, etc.)',
        'Testing the created hexacopter in different conditions and loads',
      ],
    },
  ];
  public lastItemIndex!: number;
  constructor() { }

  ngOnInit(): void {
    this.lastItemIndex = this.workplaces.length - 1;
  }

}
