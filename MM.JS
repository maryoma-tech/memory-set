// كلمة المرور اللي حددتيها
const correctPassword = "60702024";

// وظيفة التحقق من الباسورد
function checkPassword() {
    const input = document.getElementById("passInput").value;
    if (input === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
    } else {
        alert("ااااه ناسي تاريخ ارتباطنا وهنكد عليك❤️");
    }
}

// وظيفة فتح الفيديو
function openVideo() {
    window.open("https://vt.tiktok.com/ZSH91ewgh/", "_blank");
}

// إنشاء قلوب بتتحرك بشكل عشوائي
function createHearts() {
    const container = document.getElementById("heartContainer");
    const heartIcons = ["❤️", "💖", "💗", "💕"];
    
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heart.style.duration = (Math.random() * 3 + 2) + "s";
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// تشغيل حركة القلوب بمجرد فتح الصفحة
createHearts();
