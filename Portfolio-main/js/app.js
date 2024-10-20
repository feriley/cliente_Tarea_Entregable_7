function filterProjects(tech) {
    // Obtiene todas las cards
    let cards = document.querySelectorAll('.card');
  
    // Recorre todas las cards
    cards.forEach(card => {
      
      if (tech === 'all') {
        card.hidden = false;
      } else {
        if (card.classList.contains(tech)) {
          card.hidden = false; 
        } else {
          card.hidden = true; 
        }
      }
    });
  }
  