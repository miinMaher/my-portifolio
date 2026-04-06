const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement; 
const profileImage = document.getElementById('profile-pic'); 

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');

    // 1. Fade out the image immediately upon click
    profileImage.classList.add('fade-out');

    // 2. Wait 300 milliseconds (0.3 seconds) for the fade to finish, THEN swap themes
    setTimeout(() => {
        if (currentTheme === 'blue') {
            // Switch to Red Team
            rootElement.setAttribute('data-theme', 'red');
            themeToggleBtn.textContent = 'Switch to Blue Team';
            profileImage.src = 'images/attackerMe.jpg'; 
            profileImage.alt = 'Mina - Red Team';
        } else {
            // Switch to Blue Team
            rootElement.setAttribute('data-theme', 'blue');
            themeToggleBtn.textContent = 'Switch to Red Team';
            profileImage.src = 'images/defenderMe.jpg';
            profileImage.alt = 'Mina - Blue Team';
            document.querySelector('.project-list').innerHTML = '<p>NOTHING YET😊</p>';
        }

        // 3. Remove the fade-out class so the new image fades back in
        profileImage.classList.remove('fade-out');
        
    }, 200); // This 300ms matches the 0.3s delay in your CSS
});