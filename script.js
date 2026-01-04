const panels = document.querySelectorAll('.panel');
const dots = document.querySelectorAll('.dot');

panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        
        removeActiveClasses();
        
        panel.classList.add('active');
        
        dots[index].classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
}