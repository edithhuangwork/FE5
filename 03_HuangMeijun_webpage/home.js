document.addEventListener("DOMContentLoaded", () => {
    // 選擇元素
    const toggleButton = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu-items");
    
    // 檢查元素是否存在
    if (toggleButton && mobileMenu) {
        // 添加點擊事件監聽器
        toggleButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });
        
        // 點擊菜單項時關閉菜單
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");
        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
            });
        });
    }
    
    // 表單提交處理
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // 獲取表單數據
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            
            // 驗證數據
            if (name && email && message) {
                console.log("Form submitted:", { name, email, message });
                alert("Thank you for contacting us!");
                contactForm.reset();
            }
        });
    }
});