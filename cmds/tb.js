/**
 * Hint: Open table in new tab <table_name>
 * Order: 100
 */

(function () {
  const table = '$0';

  window.open(`/now/nav/ui/classic/params/target/${table}_list.do`, '_blank');
})();

/*
Some older instances
(function () {
  const table = '$0';

  window.open(`/nav_to.do?uri=%2F${table}_list.do`, '_blank');
})();
*/
