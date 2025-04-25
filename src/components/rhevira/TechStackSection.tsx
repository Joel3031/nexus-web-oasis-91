
import React from 'react';

const techCategories = [
  {
    title: "Develop",
    tools: [
      { name: "GitHub", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "GitLab", icon: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" },
      { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" }
    ]
  },
  {
    title: "Test",
    tools: [
      { name: "Jest", icon: "https://jestjs.io/img/jest.png" },
      { name: "Selenium", icon: "https://selenium.dev/images/selenium_logo_square_green.png" },
      { name: "JUnit", icon: "https://junit.org/junit5/assets/img/junit5-logo.png" }
    ]
  },
  {
    title: "Security",
    tools: [
      { name: "SonarQube", icon: "https://pbs.twimg.com/profile_images/1644654631327268864/uJTEjK0x_400x400.jpg" },
      { name: "Veracode", icon: "https://www.veracode.com/sites/default/files/styles/blog_post_resize_960/public/2020-03/veracode-blue-icon.jpg" },
      { name: "OWASP", icon: "https://owasp.org/assets/images/logo.png" }
    ]
  },
  {
    title: "Config & Deploy",
    tools: [
      { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" },
      { name: "Kubernetes", icon: "https://kubernetes.io/images/favicon.png" },
      { name: "Jenkins", icon: "https://www.jenkins.io/images/logos/jenkins/jenkins.png" }
    ]
  },
  {
    title: "Operate",
    tools: [
      { name: "Grafana", icon: "https://grafana.com/static/img/menu/grafana2.svg" },
      { name: "Prometheus", icon: "https://prometheus.io/assets/prometheus_logo_grey.svg" },
      { name: "Splunk", icon: "https://www.splunk.com/content/dam/splunk-blogs/images/2017/02/splunk-logo.png" }
    ]
  }
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Built on the Best. Powered for More
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {techCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center text-primary">{category.title}</h3>
              <div className="flex flex-col items-center space-y-6">
                {category.tools.map((tool, toolIdx) => (
                  <div key={toolIdx} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                    </div>
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
