---
title: "Skills"
tags: []
---

<div class="skills-page">

  <!-- ===== TECHNICAL SKILLS ===== -->
  <h2 class="skills-title">Technical Skills</h2>

  <div class="skills-grid-3">
    <div class="skill-card">
      <h3>Modeling & Analytics</h3>
      <p class="skill-item"><strong>Classic ML</strong>Regression, tree models, evaluation</p>
      <p class="skill-item"><strong>NLP</strong>Text classification, RAG, embeddings</p>
      <p class="skill-item"><strong>Multimodal</strong>VQA, vision-language evaluation</p>
    </div>
    <div class="skill-card">
      <h3>Data & Systems</h3>
      <p class="skill-item"><strong>Data Engineering</strong>Pipelines, feature engineering</p>
      <p class="skill-item"><strong>Forecasting</strong>Time series modeling</p>
      <p class="skill-item"><strong>Optimization</strong>Decision & risk modeling</p>
    </div>
    <div class="skill-card">
      <h3>Tools</h3>
      <p class="skill-item"><strong>Languages</strong>Python · SQL · R</p>
      <p class="skill-item"><strong>ML</strong>PyTorch · scikit-learn · HuggingFace</p>
      <p class="skill-item"><strong>Infra</strong>AzureML · AWS · Git</p>
    </div>
  </div>

  <!-- ===== SOFT SKILLS ===== -->
  <h2 class="skills-title" style="margin-top:42px;">Soft Skills</h2>

  <div class="skills-grid-3">
    <div class="skill-card">
      <h3>Communication</h3>
      <p class="skill-item"><strong>Stakeholder-ready</strong>Clear writeups + decks</p>
      <p class="skill-item"><strong>Translation</strong>Tech → business/policy</p>
    </div>
    <div class="skill-card">
      <h3>Execution</h3>
      <p class="skill-item"><strong>Ownership</strong>Shipped end-to-end work</p>
      <p class="skill-item"><strong>Rigor</strong>Reproducible, evaluative mindset</p>
    </div>
    <div class="skill-card">
      <h3>Collaboration</h3>
      <p class="skill-item"><strong>Cross-functional</strong>PMs, researchers, ops</p>
      <p class="skill-item"><strong>Mentoring</strong>TA + team support</p>
    </div>
  </div>

  <!-- ===== COURSEWORK (TWO COLUMNS) ===== -->
  <h2 class="skills-title" style="margin-top:42px;">Coursework</h2>

  <div class="skills-grid-2">
    <!-- LEFT COLUMN -->
    <div class="skill-card">
      <h3>Applied ML, Statistics, & Decision Modeling</h3>
      <ul class="skill-list">
        <li>Optimization</li>
        <li>Decision & Risk Modeling</li>
        <li>Applied Econometrics</li>
        <li>Time Series Forecasting</li>
        <li>Exploratory Data Analysis</li>
      </ul>
    </div>
    <div class="skill-card">
      <h3>NLP, LLMs, & Generative AI</h3>
      <ul class="skill-list">
        <li>Advanced Natural Language Processing</li>
        <li>Computational Data Science</li>
        <li>Unstructured Data Analytics for Policy</li>
        <li>Generative AI Lab</li>
      </ul>
    </div>
    <!-- RIGHT COLUMN -->
    <div class="skill-card">
      <h3>Systems, Data, & Production</h3>
      <ul class="skill-list">
        <li>Database Management</li>
        <li>ML in Production</li>
        <li>Systems Synthesis</li>
      </ul>
    </div>
    <div class="skill-card">
      <h3>Policy, Governance, & Communication</h3>
      <ul class="skill-list">
        <li>AI Governance</li>
        <li>Writing for Public Policy</li>
        <li>Critical Analysis for Policy Research</li>
        <li>Strategic Presentation Skills</li>
        <li>Organizational Design & Implementation</li>
      </ul>
    </div>
    <div class="skill-card">
      <h3>Urban / Global Context</h3>
      <ul class="skill-list">
        <li>Smart Cities</li>
        <li>International Politics</li>
        <li>From Data to Action</li>
        <li>Accounting & Financial Analytics</li>
      </ul>
    </div>
  </div>

</div>

<style>
/* ===== Skills page layout ===== */
.skills-page{
  max-width:1100px;
  margin:0 auto;
}
.skills-title{
  text-align:center;
  margin:20px 0 26px;
  letter-spacing:-0.2px;
}

/* 3-column grid for skills cards */
.skills-grid-3{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:22px;
}
@media(max-width:1000px){
  .skills-grid-3{ grid-template-columns:repeat(2,1fr); }
}
@media(max-width:650px){
  .skills-grid-3{ grid-template-columns:1fr; }
}

/* 2-column grid for coursework */
.skills-grid-2{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:22px;
}
@media(max-width:900px){
  .skills-grid-2{ grid-template-columns:1fr; }
}

/* Card styling */
.skill-card{
  border:1px solid rgba(0,0,0,0.14);
  border-radius:18px;
  padding:20px 20px 16px;
  background:rgba(255,255,255,0.9);
  box-shadow:0 10px 28px rgba(0,0,0,0.06);
}
.skill-card h3{
  margin:0 0 12px 0;
  font-weight:800;
  letter-spacing:-0.2px;
}
.skill-item{
  margin:0 0 12px 0;
  line-height:1.55;
}
.skill-item strong{
  display:block;
  margin-bottom:2px;
}

/* Coursework list */
.skill-list{
  margin:0;
  padding-left:18px;
}
.skill-list li{
  margin:0 0 8px 0;
  line-height:1.5;
}
</style>

