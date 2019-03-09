before(async function () {
  Object.assign(global, new (require('@dollarshaveclub/cloudworker'))(' ').context);
});