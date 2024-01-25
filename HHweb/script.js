document.addEventListener('DOMContentLoaded', (event) => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        // 简单的表单验证
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            alert('请填写所有字段。');
            event.preventDefault(); // 阻止表单提交
        }
    });
});
