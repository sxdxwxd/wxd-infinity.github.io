document.querySelectorAll('a[href^="#"]').forEach(anchor => {   
    anchor.addEventListener('click', function(e) {   
        e.preventDefault();   
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });   
    });  
});  

document.getElementById('contactForm').addEventListener('submit', function(event) {   
    event.preventDefault();   
    const name = document.getElementById('name').value;   
    const email = document.getElementById('email').value;   
    const message = document.getElementById('message').value;   
    if (name && email && message) {   
        alert(`谢谢您的留言, ${name}!\n我们会尽快通过 ${email} 与您联系。`);   
        this.reset();  
    } else {   
        alert('请填写所有字段。');   
    }  
});  

const cards = document.querySelectorAll('.card');  
cards.forEach(card => {  
    card.addEventListener('mouseover', () => card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)');  
    card.addEventListener('mouseout', () => card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)');  
});  

// Adding fade-in effect  
window.addEventListener('scroll', () => {  
    document.querySelectorAll('.fade-in').forEach(element => {  
        if (isElementInViewport(element)) {  
            element.classList.add('visible');  
        }  
    });  
});  

function isElementInViewport(el) {  
    const rect = el.getBoundingClientRect();  
    return (  
        rect.top >= 0 &&  
        rect.left >= 0 &&  
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&  
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)  
    );  
}