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
});
