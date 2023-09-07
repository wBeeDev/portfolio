"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .move(-11)
  .type("Faithful ")
  .pause(1000)
  .move(null, { to: "END" })
  .delete()
  .type("Front-end Engineer")
  .pause(3000)
  .delete()
  .go();
