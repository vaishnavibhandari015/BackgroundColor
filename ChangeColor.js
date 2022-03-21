function myFunction() {
      var bgcolor = new Array("#CD5C5C", "#F08080", "#FA8072", "#E9967A", "#FFA07A", "#DC143C", "#FF0000", "#B22222", "#FF1493", "#FF8C00", "#FF4500", "FFFF00");
      document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)];
    }
