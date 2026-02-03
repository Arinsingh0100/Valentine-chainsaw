let noClickCount = 0;

function moveNo() {
  const noBtn = document.getElementById('no');
  noClickCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';

  if(noClickCount === 8){
    alert("Prerna, in a world full of choices, my heart chose you without a second thought. 💖");
  }
}

function yes(){
  alert("Yayyy Prerna!!! 💖");
}
