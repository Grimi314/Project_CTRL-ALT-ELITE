const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"), 
  closeModalBtn: document.querySelector(".feedbacks-btn"),
  modal: document.querySelector(".feedbacks"),
  form: document.querySelector(".feedbacks-form"),
  body: document.body,
};



const openModal = () => {
  refs.modal.classList.remove("is-hidden");
  refs.body.style.overflow = "hidden"; 
  window.addEventListener("keydown", onEscKeyPress);
};

const closeModal = () => {
  refs.modal.classList.add("is-hidden");
  refs.body.style.overflow = ""; 
  window.removeEventListener("keydown", onEscKeyPress);
};

const onEscKeyPress = (e) => {
  if (e.key === "Escape") closeModal();
};



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
  const data = Object.fromEntries(formData.entries());

  try {
    
    const response = await fetch("https://sound-wave.b.goit.study/api-docs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      
      const errorResult = await response.json();
      throw new Error(errorResult.message || "Invalid data submitted.");
    }

    alert("Thank you! Your feedback has been submitted successfully.");
    refs.form.reset();
    closeModal();

  } catch (error) {
    
    console.error("Submission error:", error);
    alert(`Error: ${error.message}`);
  }
});