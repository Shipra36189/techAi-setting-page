document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
          e.preventDefault();
          const targetTab = this.getAttribute('data-tab');

          // Hide all tab contents
          tabContents.forEach(content => {
              content.classList.remove('active');
          });

          // Show the selected tab content
          document.getElementById(targetTab).classList.add('active');

          // Optionally, you can add active class to the clicked tab
          tabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
      });
  });
});


//to make toggle buttun

document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('content');
  
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '80px';
    } else {
        mainContent.style.marginLeft = '300px';
    }
  });

// document.getElementById('toggle-btn').addEventListener('click', function() {
//     const sidebar = document.getElementById('sidebar');
//     sidebar.classList.toggle('collapsed');
// });