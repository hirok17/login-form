document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordFieldType);

    const eyeIcon = document.getElementById('eyeIcon');
    eyeIcon.setAttribute('d', passwordFieldType === 'password' ? 'M15 12h.01M12 12a3 3 0 110-6 3 3 0 010 6z' : 'M12 12a3 3 0 110-6 3 3 0 010 6zM19 12a7.977 7.977 0 00-1.57-4.66M12 19a7.977 7.977 0 01-4.66-1.57M5 12a7.977 7.977 0 011.57-4.66M12 5a7.977 7.977 0 014.66 1.57');
});
