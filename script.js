
/* script.js */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Simple profile personalization helper (optional)
function personalize(details){
  // details: {name, aboutText, whatsapp, linkedin, email}
  if (details.name) document.getElementById('person-name').textContent = details.name;
  if (details.aboutText) document.getElementById('about-text').textContent = details.aboutText;
  if (details.whatsapp) document.querySelectorAll('a[href^="https://wa.me"]').forEach(a=>{a.href = details.whatsapp; a.textContent = 'WhatsApp'});
  if (details.linkedin) document.querySelectorAll('#linkedin, a[href*="linkedin.com"]').forEach(a=>{a.href = details.linkedin});
  if (details.email) document.querySelector('a[href^="mailto:"]')?.setAttribute('href','mailto:'+details.email);
}

// Example usage (uncomment and edit to set values programmatically)
// personalize({name:'Jane Doe', aboutText:'Studied Biology Education. ...', whatsapp:'https://wa.me/2347012345678', linkedin:'https://www.linkedin.com/in/janedoe', email:'jane@example.com'});
