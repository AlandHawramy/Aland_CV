  // Track if we're in the main screen
  let isMainScreen = true;

  // Modal functions
  function openModal(modalId) {
    isMainScreen = false;
    document.body.classList.add('modal-open');
    document.getElementById(modalId).style.display = 'block';
    history.pushState({ modal: modalId, isModal: true }, null, `#${modalId}`);
  }
  
  function closeModal(modalId) {
    isMainScreen = true;
    document.body.classList.remove('modal-open');
    document.getElementById(modalId).style.display = 'none';
    history.replaceState({ isMainScreen: true }, null, window.location.pathname);
  }
  // Function to open the specific work modal based on category
  function openWorkModal(modalId) {
   
    document.body.classList.add('modal-open');
    document.getElementById(modalId).style.display = 'block';
    history.pushState({ modal: modalId, isModal: true }, null, `#${modalId}`);
  }
  
  // Function to activate the clicked button and deactivate others
  function activateButton(button) {
    const buttons = document.querySelectorAll('.work-examples-categories button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }
  
  // Handle back button and history navigation
  window.onpopstate = function(event) {
    const modals = document.querySelectorAll('.modal');
    let anyModalOpen = false;
    
    modals.forEach(modal => {
        if (modal.style.display === 'block') {
            anyModalOpen = true;
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            isMainScreen = true;
        }
    });
  
    // If we're in the main screen and back button is pressed, exit
    if (isMainScreen && !anyModalOpen) {
        window.close(); // Try to close the window
        // Some mobile browsers might not support window.close()
        // So we can add a fallback
        window.location.href = "about:blank";
    }
  };
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.classList.remove('modal-open');
        isMainScreen = true;
        history.replaceState({ isMainScreen: true }, null, window.location.pathname);
    }
  };
  
        
        // Animate language bars on scroll
        function animateLanguageBars() {
            const languageBars = document.querySelectorAll('.language-progress');
            const windowHeight = window.innerHeight;
            
            languageBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                
                if (barPosition < windowHeight - 50) {
                    bar.style.width = bar.parentElement.querySelector('.language-progress').style.width;
                }
            });
        }
  
        // Initial animation check
        document.addEventListener('DOMContentLoaded', animateLanguageBars);
        // Check on scroll
        window.addEventListener('scroll', animateLanguageBars);