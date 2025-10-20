document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const alertPlaceholder = document.getElementById("alertPlaceholder");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            alertPlaceholder.innerHTML = "";

            if (name === "") {
                showAlert("يرجى إدخال الاسم", "danger");
                return;
            } else if (email === "") {
                showAlert("يرجى إدخال البريد الإلكتروني", "danger");
                return;
            } else if (message === "") {
                showAlert("يرجى إدخال الرسالة", "danger");
                return;
            } else if (!email.endsWith("@gmail.com")) {
                showAlert("يرجى كتابة البريد الالكتروني بالصيغة الصحيحة example@gmail.com", "danger");
                return;
            } else {
                showAlert("تم إرسال الرسالة بنجاح ", "success");
                contactForm.reset();
            }
        });

        function showAlert(message, type) {
            const alertDiv = document.createElement("div");
            alertDiv.className = `alert alert-${type} alert-dismissible show`;
            alertDiv.role = "alert";
            alertDiv.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
            alertPlaceholder.append(alertDiv);
        }
    }

    const filterForm = document.getElementById("filter-form");
    const searchInput = document.getElementById("search");
    const categorySelect = document.getElementById("category");
    const events = document.querySelectorAll("#events-container .col-4");

    if (filterForm) {
        filterForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const searchText = searchInput.value.trim().toLowerCase();
            const selectedCategory = categorySelect.value;

            events.forEach((event) => {
                const title = event.getAttribute("data-title").toLowerCase();
                const category = event.getAttribute("data-category");

                const matchesSearch = title.includes(searchText);
                const matchesCategory = selectedCategory === "all" || category === selectedCategory;

                event.style.display = matchesSearch && matchesCategory ? "block" : "none";
            });
        });
    }
});
const switchBtn = document.getElementById("darkModeSwitch");
const html = document.documentElement;

switchBtn.addEventListener("change", function () {
    if (this.checked) {
        html.setAttribute("data-bs-theme", "dark"); // تفعيل الوضع الداكن
    } else {
        html.setAttribute("data-bs-theme", "light"); // رجوع للوضع الفاتح
    }
});
