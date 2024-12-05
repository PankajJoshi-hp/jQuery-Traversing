jQuery(function () {
  $(".parent-checkbox").on("change", function () {
    $(this)
      .closest("li")
      .find("ul")
      .children()
      .find("input.child-checkbox")
      .prop("checked", $(this).is(":checked"));
  });

  $("input.child-checkbox").on("change", function () {
    const parentLi = $(this).closest("li").parents().closest("li");

    const allUnchecked =
      parentLi.find("ul input.child-checkbox:checked").length !== 0;

    parentLi.find("input.parent-checkbox").prop("checked", allUnchecked);
  });

  $("a").on("click", function (e) {
    e.preventDefault();

    const addNew = `
     <div class="form-row">
        <div class="left-side">
          <label class="label-two" for="property-image">Property Image</label>
          <input type="file" id="property-image" />
        </div>
        <div class="right-side">
          <select class="select">
            <option value="primary">Primary Image</option>
            <option value="secondary">Secondary Image</option>
          </select>
          <button class="remove-btn">Remove</button>
        </div>
      </div>`;

    $(".form-container").append(addNew);
  });

  $(document).on("click", ".remove-btn", function () {
    $(this).closest(".form-row").remove();
  });

  $(document).on("change", ".select", function () {
    if ($(this).val() === "primary") {
      $(".select").not(this).val("secondary");
    }
  });
});
