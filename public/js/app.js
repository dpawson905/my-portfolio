function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const typewriter1 = ( className, string) => {
  const type1 = document.querySelector(className);
  let typewriter = new Typewriter(type1, {
    loop: false,
    delay: 75
  });
  typewriter
  .pauseFor(300)
  .typeString(string)
  .start()
}

ready(function () {
  typewriter1(".sub-heading", "is()");
});