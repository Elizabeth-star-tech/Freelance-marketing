// ===== 1. HELPER FUNCTIONS =====

function formatBudget(project) {
  return "$" + project.budgetMin + " - $" + project.budgetMax;
}

function createProjectCard(project) {
  const skillTags = project.skills
    .map(skill => `<span class="skill-tag">${skill}</span>`)
    .join("");

  return `
    <div class="project-card">
      <span class="project-category">${project.category}</span>
      <h3>${project.title}</h3>
      <p class="project-client">${project.client}</p>
      <p class="project-desc">${project.description}</p>
      <div class="skill-list">${skillTags}</div>
      <div class="project-meta">
        <span class="project-budget">${formatBudget(project)}</span>
        <span class="project-deadline">Due: ${project.deadline}</span>
      </div>
      <a href="project-details.html?id=${project.id}" class="btn btn-primary">View Details</a>
    </div>
  `;
}

function createFreelancerCard(freelancer) {
  const skillTags = freelancer.skills
    .slice(0, 3)
    .map(skill => `<span class="skill-tag">${skill}</span>`)
    .join("");

  const portfolioItems = freelancer.portfolio
    .map(item => `<li>${item}</li>`)
    .join("");

  return `
    <div class="freelancer-card">
      <img src="${freelancer.image}" alt="${freelancer.name}">
      <h3>${freelancer.name}</h3>
      <p class="freelancer-title">${freelancer.title}</p>
      <p class="freelancer-rating">★ ${freelancer.rating} (${freelancer.reviews} reviews)</p>
      <span class="level-badge">${freelancer.level}</span>
      <p class="freelancer-bio">${freelancer.bio}</p>
      <div class="skill-list">${skillTags}</div>
      <p class="portfolio-label">Portfolio samples</p>
      <ul class="portfolio-list">${portfolioItems}</ul>
    </div>
  `;
}


// ===== 2. HOMEPAGE: FEATURED SECTIONS =====

const featuredProjects = document.getElementById("featured-projects");
const featuredFreelancers = document.getElementById("featured-freelancers");

if (featuredProjects) {
  featuredProjects.innerHTML = projects
    .slice(0, 3)
    .map(createProjectCard)
    .join("");
}

if (featuredFreelancers) {
  featuredFreelancers.innerHTML = freelancers
    .slice(0, 3)
    .map(createFreelancerCard)
    .join("");
}


// ===== 3. PROJECTS PAGE: SEARCH AND FILTERS =====

const projectList = document.getElementById("project-list");

if (projectList) {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const budgetFilter = document.getElementById("budget-filter");
  const resultCount = document.getElementById("result-count");
  const noResults = document.getElementById("no-results");

  function matchesBudget(project, range) {
    if (range === "low") return project.budgetMax <= 500;
    if (range === "mid") return project.budgetMax > 500 && project.budgetMax <= 1500;
    if (range === "high") return project.budgetMax > 1500;
    return true;
  }

  function showProjects() {
    const searchText = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const budget = budgetFilter.value;

    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchText);
      const matchesCategory = category === "all" || project.category === category;
      return matchesSearch && matchesCategory && matchesBudget(project, budget);
    });

    projectList.innerHTML = filtered.map(createProjectCard).join("");
    resultCount.textContent = filtered.length + " project(s) found";
    noResults.style.display = filtered.length === 0 ? "block" : "none";
  }

  searchInput.addEventListener("input", showProjects);
  categoryFilter.addEventListener("change", showProjects);
  budgetFilter.addEventListener("change", showProjects);

  showProjects();
}


// ===== 4. FREELANCERS PAGE: SEARCH AND FILTER =====

const freelancerList = document.getElementById("freelancer-list");

if (freelancerList) {
  const freelancerSearch = document.getElementById("freelancer-search");
  const levelFilter = document.getElementById("level-filter");
  const freelancerCount = document.getElementById("freelancer-count");
  const noFreelancers = document.getElementById("no-freelancers");

  function showFreelancers() {
    const searchText = freelancerSearch.value.toLowerCase().trim();
    const level = levelFilter.value;

    const filtered = freelancers.filter(freelancer => {
      const matchesSkill = freelancer.skills.some(skill =>
        skill.toLowerCase().includes(searchText)
      );
      const matchesLevel = level === "all" || freelancer.level === level;
      return matchesSkill && matchesLevel;
    });

    freelancerList.innerHTML = filtered.map(createFreelancerCard).join("");
    freelancerCount.textContent = filtered.length + " freelancer(s) found";
    noFreelancers.style.display = filtered.length === 0 ? "block" : "none";
  }

  freelancerSearch.addEventListener("input", showFreelancers);
  levelFilter.addEventListener("change", showFreelancers);

  showFreelancers();
}


// ===== 5. PROJECT DETAILS PAGE + PROPOSAL FORM =====

const projectDetails = document.getElementById("project-details");

if (projectDetails) {
  const params = new URLSearchParams(window.location.search);
  const projectId = Number(params.get("id"));
  const project = projects.find(p => p.id === projectId);

  if (project) {
    document.title = project.title + " - FreelanceHub";

    const skillTags = project.skills
      .map(skill => `<span class="skill-tag">${skill}</span>`)
      .join("");

    projectDetails.innerHTML = `
      <div class="details-layout">

        <div class="details-main">
          <span class="project-category">${project.category}</span>
          <h1>${project.title}</h1>

          <h3>Project Description</h3>
          <p>${project.description}</p>

          <h3>Required Skills</h3>
          <div class="skill-list">${skillTags}</div>
        </div>

        <aside class="details-sidebar">
          <h3>Project Overview</h3>
          <ul>
            <li><span>Budget</span><strong>${formatBudget(project)}</strong></li>
            <li><span>Deadline</span><strong>${project.deadline}</strong></li>
            <li><span>Status</span><strong>${project.status}</strong></li>
          </ul>

          <h3>About the Client</h3>
          <p>${project.client}</p>
        </aside>

      </div>
    `;

    const proposalForm = document.getElementById("proposal-form");
    const proposalSuccess = document.getElementById("proposal-success");

    function setError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const error = document.getElementById(fieldId + "-error");
      error.textContent = message;
      field.classList.toggle("invalid", message !== "");
      return message === "";
    }

    proposalForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("proposal-name").value.trim();
      const email = document.getElementById("proposal-email").value.trim();
      const budget = Number(document.getElementById("proposal-budget").value);
      const letter = document.getElementById("proposal-letter").value.trim();

      const nameOk = setError(
        "proposal-name",
        name.length < 3 ? "Please enter your full name (at least 3 characters)." : ""
      );
      const emailOk = setError(
        "proposal-email",
        /^\S+@\S+\.\S+$/.test(email) ? "" : "Please enter a valid email address."
      );
      const budgetOk = setError(
        "proposal-budget",
        budget > 0 ? "" : "Please enter your expected budget."
      );
      const letterOk = setError(
        "proposal-letter",
        letter.length < 50 ? "Your cover letter must be at least 50 characters." : ""
      );

      if (!(nameOk && emailOk && budgetOk && letterOk)) {
        return;
      }

      const saved = JSON.parse(localStorage.getItem("proposals")) || [];
      saved.push({
        projectId: project.id,
        projectTitle: project.title,
        name: name,
        email: email,
        budget: budget,
        letter: letter,
        date: new Date().toLocaleDateString(),
        status: "Pending"
      });
      localStorage.setItem("proposals", JSON.stringify(saved));

      proposalForm.reset();
      proposalForm.style.display = "none";
      proposalSuccess.style.display = "block";
    });

  } else {
    projectDetails.innerHTML = `<p class="no-results">Project not found.</p>`;
    document.getElementById("proposal-section").style.display = "none";
  }
}
// ===== 6. DASHBOARD PAGE =====

const dashboardStats = document.getElementById("dashboard-stats");

if (dashboardStats) {
  const savedProposals = JSON.parse(localStorage.getItem("proposals")) || [];

  function statusClass(status) {
    return "status-" + status.toLowerCase().replace(" ", "-");
  }

  // Summary numbers
  const openCount = projects.filter(p => p.status === "Open").length;
  const progressCount = projects.filter(p => p.status === "In Progress").length;
  const completedCount = projects.filter(p => p.status === "Completed").length;

  dashboardStats.innerHTML = `
    <div class="stat-card"><h3>${projects.length}</h3><p>Posted Projects</p></div>
    <div class="stat-card"><h3>${openCount}</h3><p>Open</p></div>
    <div class="stat-card"><h3>${progressCount}</h3><p>In Progress</p></div>
    <div class="stat-card"><h3>${completedCount}</h3><p>Completed</p></div>
    <div class="stat-card"><h3>${savedProposals.length}</h3><p>Proposals Sent</p></div>
  `;

  // Profile
  document.getElementById("profile-card").innerHTML = `
    <img src="${currentUser.image}" alt="${currentUser.name}">
    <h2>${currentUser.name}</h2>
    <p class="profile-role">${currentUser.role}</p>
    <p class="profile-bio">${currentUser.bio}</p>
    <ul>
      <li><span>Email</span><strong>${currentUser.email}</strong></li>
      <li><span>Location</span><strong>${currentUser.location}</strong></li>
      <li><span>Member since</span><strong>${currentUser.memberSince}</strong></li>
    </ul>
  `;

  // Posted projects table
  document.getElementById("posted-projects").innerHTML = projects
    .map(project => `
      <tr>
        <td><a href="project-details.html?id=${project.id}">${project.title}</a></td>
        <td>${project.category}</td>
        <td>${formatBudget(project)}</td>
        <td><span class="status-badge ${statusClass(project.status)}">${project.status}</span></td>
      </tr>
    `)
    .join("");

  // Submitted proposals table
  const noProposals = document.getElementById("no-proposals");

  if (savedProposals.length === 0) {
    noProposals.style.display = "block";
  } else {
    document.getElementById("submitted-proposals").innerHTML = savedProposals
      .map(proposal => `
        <tr>
          <td><a href="project-details.html?id=${proposal.projectId}">${proposal.projectTitle}</a></td>
          <td>$${proposal.budget}</td>
          <td>${proposal.date}</td>
          <td><span class="status-badge status-pending">${proposal.status}</span></td>
        </tr>
      `)
      .join("");
  }
}
// ===== 7. MOBILE MENU AND ACTIVE LINK =====

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
}