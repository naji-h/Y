// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Image upload functionality
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const submitBtn = document.getElementById('submit-btn');

fileInput.addEventListener('change', function() {
    previewContainer.innerHTML = '';
    
    if (this.files.length > 0) {
        submitBtn.style.display = 'inline-block';
        
        for (let i = 0; i < this.files.length; i++) {
            const file = this.files[i];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-btn';
                removeBtn.innerHTML = '&times;';
                removeBtn.addEventListener('click', function() {
                    previewItem.remove();
                    if (previewContainer.children.length === 0) {
                        submitBtn.style.display = 'none';
                    }
                });
                
                previewItem.appendChild(img);
                previewItem.appendChild(removeBtn);
                previewContainer.appendChild(previewItem);
            }
            
            reader.readAsDataURL(file);
        }
    } else {
        submitBtn.style.display = 'none';
    }
});


// Sticky navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
function showEvents() {
  // إخفاء كل الأقسام
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');

  // إظهار قسم المناسبات فقط
  const eventsSection = document.getElementById('events');
  if (eventsSection) {
    eventsSection.style.display = 'block';
    eventsSection.scrollIntoView({ behavior: 'smooth' });
  }
}
