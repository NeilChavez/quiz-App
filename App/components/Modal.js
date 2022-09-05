export function Modal(counter, totalQuestions) {

  document.addEventListener("click",(e) => {

      if (e.target.matches(".btn-close") || e.target.matches(".modal:not(.modal-article)"))
      document.querySelector(".modal").remove();
    }, { once: true}
  );

  return `
    <dialog class="modal" open>     
        <article class="modal-article">
            <h2>You answered ${counter} out of ${totalQuestions} questions correctly!</h2>
            <i class="fa-solid fa-x btn-close"></i>
        </article>
    </dialog>
    `;
}
