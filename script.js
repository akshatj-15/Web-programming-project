// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name.length < 2 || !/^[a-zA-Z\s]+$/.test(name)) {
            alert('Enter a valid name with at least 2 characters.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Enter a valid email address.');
            return;
        }
        if (subject.length < 5) {
            alert('Subject must be at least 5 characters long.');
            return;
        }
        if (message.length < 10) {
            alert('Message must be at least 10 characters long.');
            return;
        }

        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        setTimeout(() => window.location.href = 'index.html', 1500);
    });
}

// Social Media Redirect Alerts
const socialLinks = document.querySelectorAll('.social a');
socialLinks.forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault();
        const platform = this.href.split('.')[1];
        alert(`Redirecting to ${platform}...`);
        setTimeout(() => window.open(this.href, '_blank', 'noopener,noreferrer'), 500);
    });
});

const amazon=document.querySelector("#amaz");
amazon.addEventListener("click",function(e){
    e.preventDefault();
    window.open(this.href,'_blank');
});

