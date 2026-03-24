const form = document.getElementById("auditForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const taskInput = document.getElementById("task");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const task = taskInput.value.trim();

    nameInput.classList.remove("input-error");
    phoneInput.classList.remove("input-error");

    let hasError = false;

    if (!name) {
      nameInput.classList.add("input-error");
      hasError = true;
    }

    if (!phone) {
      phoneInput.classList.add("input-error");
      hasError = true;
    }

    let oldMessage = document.querySelector(".form-message");
    if (oldMessage) {
      oldMessage.remove();
    }

    const message = document.createElement("div");
    message.className = "form-message";

    if (hasError) {
      message.textContent = "Заполните имя и телефон.";
      message.style.color = "#fca5a5";
      form.appendChild(message);
      return;
    }

    const whatsappNumber = "77758421417";
    const whatsappText =
      `Здравствуйте!%0A` +
      `Меня зовут: ${encodeURIComponent(name)}%0A` +
      `Телефон: ${encodeURIComponent(phone)}%0A` +
      `Задача: ${encodeURIComponent(task || "Не указана")}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    message.textContent = "Форма заполнена. Сейчас откроется WhatsApp.";
    form.appendChild(message);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);

    form.reset();
  });
}