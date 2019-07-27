module.exports = {
  install: function(less, pluginManager, functions) {
    functions.add("rem", function(num) {
      return (num.value / 75).toFixed(5) + "rem";
    });
    functions.add("vw", function(num) {
      return (num.value / 3.75).toFixed(5) + "vw";
    });
  },
};
