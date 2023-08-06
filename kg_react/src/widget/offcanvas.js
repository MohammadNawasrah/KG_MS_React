export default function offcanvas(offcanvasTitle, body, id) {
  return (
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id={id}
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body small" dir="rtl">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          {offcanvasTitle}
        </h5>
        {body}
      </div>
    </div>
  );
}
