window.onscroll = function() {
      let btn = document.getElementById("botona");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    function subir() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }