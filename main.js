let btn = document
  .getElementById("btnClick")
  .addEventListener("click", getACuteDogPhoto);
let image = document.getElementById("image");

async function getACuteDogPhoto() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        image.src = result.message;
      });
  } catch (error) {
    console.log(err);
  }
}
