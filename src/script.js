// function responseScript() {
//   const windowWeight = $(window).width();
//   const navItem = $(".nav-item");
  
//   const handleNavTab = (callback, event) => {
//     if (!callback) return;
  
//     const current = $(event.currentTarget)
//       .find(".dropdown-menu");
  
//     callback(current)
//   }
  
//   if (windowWeight <= 700) {
//     navItem.off();
//     return;
//   }
//   if (windowWeight > 700) {
    
//     navItem.on("mouseenter", (e) => handleNavTab((tab) => {
//       tab.show()
//     }, e))
    
//     navItem.on("mouseleave", (e) => handleNavTab((tab) => {
//       tab.hide()
//     }, e))

//     return;
//   }
// }
// $(window).on("resize", () => responseScript())
// $(document).ready(() => responseScript())