---
title: "Projects"
tags: []
---

<style>
.track-tabs{display:flex;gap:10px;flex-wrap:wrap;margin:10px 0 24px 0;}
.track-tabs button{
  padding:8px 14px;border-radius:999px;border:1px solid rgba(0,0,0,0.18);
  background:#fff;cursor:pointer;font-weight:600;
}
.track-tabs button.active{border-color:#000;}
.project-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
@media(max-width:1100px){.project-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:700px){.project-grid{grid-template-columns:1fr;}}
.proj{border:1px solid rgba(0,0,0,0.12);border-radius:16px;padding:18px;background:#fff;}
.proj h3{margin:0 0 8px 0;}
.proj .meta{opacity:.75;margin:0;}
</style>

<div class="track-tabs">
  <button class="active" onclick="filterTrack('all', this)">All</button>
  <button onclick="filterTrack('ml', this)">Applied ML</button>
  <button onclick="filterTrack('nlp', this)">NLP & LLMs</button>
  <button onclick="filterTrack('cj', this)">Criminal Justice</button>
  <button onclick="filterTrack('climate', this)">Climate & Energy</button>
  <button onclick="filterTrack('finance', this)">Finance & Risk</button>
  <button onclick="filterTrack('data', this)">Data Eng</button>
</div>

<div class="project-grid">
  <div class="proj" data-track="ml nlp cj">
    <h3>ML Policy Lab</h3>
    <p class="meta">Bias audit + model selection + temporal evaluation.</p>
  </div>

  <div class="proj" data-track="nlp data">
    <h3>ANLP RAG System</h3>
    <p class="meta">Scraping + retrieval/reranking + EM/F1 evaluation.</p>
  </div>

  <div class="proj" data-track="nlp">
    <h3>ANLP VQA</h3>
    <p class="meta">Oracle trajectories + fine-tuning + multimodal evaluation.</p>
  </div>

  <div class="proj" data-track="cj nlp ml">
    <h3>Capstone VSG System</h3>
    <p class="meta">NLP override reasons + regression + scaling CJ workflows.</p>
  </div>

  <div class="proj" data-track="nlp data">
    <h3>Amazon Reviews Classifier (AzureML)</h3>
    <p class="meta">Classic NLP sentiment + AzureML deployment/debugging.</p>
  </div>

  <div class="proj" data-track="finance ml data">
    <h3>Revenue Anomaly Detection</h3>
    <p class="meta">Production analytics monitoring + automation.</p>
  </div>
</div>

<script>
function filterTrack(tag, btn){
  document.querySelectorAll('.track-tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.proj').forEach(card=>{
    const tracks = (card.getAttribute('data-track') || '');
    card.style.display = (tag === 'all' || tracks.includes(tag)) ? 'block' : 'none';
  });
}
</script>
