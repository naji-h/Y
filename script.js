<style>
  /* تأثير عند تحريك الصور */
  .preview-item {
      position: relative;
      display: inline-block;
      margin: 10px;
      transition: transform 0.3s ease;
  }

  .preview-item:hover {
      transform: scale(1.05);
  }

  .preview-item img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s;
  }

  .remove-btn {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: crimson;
      border: none;
      color: white;
      font-size: 18px;
      border-radius: 50%;
      cursor: pointer;
      width: 25px;
      height: 25px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      transition: background-color 0.3s;
  }

  .remove-btn:hover {
      background-color: darkred;
  }

  #submit-btn {
      display: none;
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s, box-shadow 0.3s;
  }

  #submit-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  nav {
      transition: all 0.3s ease;
      background: white;
  }
</style>

<script>
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Image upload preview
  const fileInput = document.getElementById('file-input');
  const previewContainer = document.getElementById('preview-container');
  const submitBtn = document.getElementById('submit-btn');

  fileInput.addEventListener('change', function () {
      previewContainer.innerHTML = '';

      if (this.files.length > 0) {
          submitBtn.style.display = 'inline-block';

          [...this.files].forEach(file => {
              const reader = new FileReader();
              reader.onload = function (e) {
                  const previewItem = document.createElement('div');
                  previewItem.className = 'preview-item';

                  const img = document.createElement('img');
                  img.src = e.target.result;

                  const removeBtn = document.createElement('button');
                  removeBtn.className = 'remove-btn';
                  removeBtn.innerHTML = '&times;';
                  removeBtn.addEventListener('click', function () {
                      previewItem.remove();
                      if (previewContainer.children.length === 0) {
                          submitBtn.style.display = 'none';
                      }
                  });

                  previewItem.appendChild(img);
                  previewItem.appendChild(removeBtn);
                  previewContainer.appendChild(previewItem);
              };
              reader.readAsDataURL(file);
          });
      } else {
          submitBtn.style.display = 'none';
      }
  });

  // Sticky navigation on scroll
  window.addEventListener('scroll', function () {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
          nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
          nav.style.backgroundColor = '#ffffffee';
      } else {
          nav.style.boxShadow = 'none';
          nav.style.backgroundColor = 'white';
      }
  });

  // Show specific section (events)
  function showEvents() {
      document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');

      const eventsSection = document.getElementById('events');
      if (eventsSection) {
          eventsSection.style.display = 'block';
          eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
</script>
