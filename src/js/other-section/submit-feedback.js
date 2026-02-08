import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"), 
  closeModalBtn: document.querySelector(".feedbacks-modal-btn"),
  modal: document.querySelector(".feedbacks-modal"),
  form: document.querySelector(".feedbacks-modal-form"),
  submitBtn: document.querySelector(".feedback-modal-submit"),
  body: document.body,
};


const validateForm = () => {
  if (!refs.form) return;

  const isFormValid = refs.form.checkValidity();
  

  const isRatingSelected = refs.form.querySelector('input[name="rating"]:checked') !== null;
  
  const isValid = isFormValid && isRatingSelected;

  refs.submitBtn.disabled = !isValid;
  
  if (!isValid) {
    refs.submitBtn.style.opacity = "0.5";
    refs.submitBtn.style.cursor = "not-allowed";
  } else {
    refs.submitBtn.style.opacity = "1";
    refs.submitBtn.style.cursor = "pointer";
  }
};

const openModal = () => {
  refs.modal.classList.remove("is-hidden");
  refs.body.style.overflow = "hidden"; 

  document.addEventListener("keydown", onEscKeyPress);
  validateForm(); 
};

const closeModal = () => {
  refs.modal.classList.add("is-hidden");
  refs.body.style.overflow = ""; 
  document.removeEventListener("keydown", onEscKeyPress);
  
  refs.form.reset();
  validateForm();
};

const onEscKeyPress = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};


refs.form.addEventListener("input", validateForm);
refs.form.addEventListener("change", validateForm);

refs.closeModalBtn.addEventListener("click", closeModal);

refs.modal.addEventListener("click", (e) => {
  if (e.target === refs.modal) closeModal();
});

if (refs.openModalBtn) {
  refs.openModalBtn.addEventListener("click", openModal);
}


refs.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get("name").trim(),
    rating: Number(formData.get("rating")), 
    descr: formData.get("message").trim()   
  };

  try {
    const response = await fetch("https://sound-wave.b.goit.study/api/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResult = await response.json();
      throw new Error(errorResult.message || "Something went wrong.");
    }

    if (typeof iziToast !== "undefined") {
      iziToast.success({
        title: 'Success',
        message: 'Thank you for your feedback!',
        position: 'topRight'
      });
    }

    closeModal();

  } catch (error) {
    if (typeof iziToast !== "undefined") {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight'
      });
    } else {
      alert("Error: " + error.message);
    }
  }
});