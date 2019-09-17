
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();

  var backgrounds = [ 
    "url(http://unsplash.it/1500/1000?image=881&blur=5)",
    "url(https://www.harboreast.com/wp-content/uploads/2016/11/nature-wallpapers-dowload-large-197845.jpg)",
    "url(https://wallpaperaccess.com/full/360436.jpg)",
    "url(https://wallpapers.ae/wp-content/uploads/2018/12/3d-nature-wallpaper-desktop-background-yub3o.jpg)",
    "url(https://scx2.b-cdn.net/gfx/news/hires/2019/biosphere.jpg)"
    ]

  var i = 0;

  document.addEventListener('click',changeBackground);

  function changeBackground(){
    i = i < backgrounds.length - 1 ? ++i : 0;
    document.querySelector("html").style.background = backgrounds[i];
  };