var tl = anime.timeline({
    easing: 'linear',
    duration: 1000,
    loop: true,
  
  });
  
  // ---------------------------
  // group A: 2, 11, 10
  // group B: 1, 6, 7
  // group C: 3, 5, 8
  // group D: 4, 9
  // ---------------------------
  
  // ---------------------------
  // group A: 2, 11, 10
  // ---------------------------
  
  tl.add({
      targets: ['#outline-02', '#outline-11', '#outline-10'],
      opacity: 1,
      duration: 1000,
    easing: 'easeInSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-02-1', '#cube-02-2', '#cube-11-1', '#cube-11-2', '#cube-11-3', '#cube-10-1', '#cube-10-2'],
      opacity: 1,
      duration: 1400,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-02-1', '#cube-02-2', '#cube-11-1', '#cube-11-2', '#cube-11-3', '#cube-10-1', '#cube-10-2'],
    delay: function(el, i) {
        return (200 * i);
      },
    opacity: 0,
  })
  .add({
      targets: ['#outline-02', '#outline-11', '#outline-10'],
      opacity: 0.3,
      duration: 500,
    delay: function(el, i) {
        return (200 * i);
      },
  })
  // ---------------------------
  // group B: 1, 6, 7
  // ---------------------------
  
  .add({
      targets: ['#outline-01', '#outline-06', '#outline-07'],
      opacity: 1,
      duration: 1000,
    easing: 'easeInSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-01-1', '#cube-01-2', '#cube-06-1', '#cube-06-2', '#cube-07-1'],
      opacity: 1,
    duration: 1400,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-01-1', '#cube-01-2', '#cube-06-1', '#cube-06-2', '#cube-07-1'],
    opacity: 0,
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#outline-01', '#outline-06', '#outline-07'],
    opacity: 0.3,
    duration: 500,
    delay: function(el, i) {
        return (200 * i);
      },
  
  })
  
  
  // ---------------------------
  // group C: 3, 5, 8
  // ---------------------------
  
  // 03
  .add({
      targets: ['#outline-03', '#outline-05', '#outline-08'],
      opacity: 1,
      duration: 1000,
    easing: 'easeInSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-03-1', '#cube-03-2', '#cube-05-1', '#cube-05-2', '#cube-08-1', '#cube-08-2', '#cube-08-3'],
      opacity: 1,
      duration: 1400,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-03-1', '#cube-03-2', '#cube-05-1', '#cube-05-2', '#cube-08-1', '#cube-08-2', '#cube-08-3'],
    delay: function(el, i) {
        return (200 * i);
      },
    opacity: 0,
  })
  .add({
      targets: ['#outline-03', '#outline-05', '#outline-08'],
      opacity: 0.3,
      duration: 500,
    delay: function(el, i) {
        return (200 * i);
      },
  })
  
  // ---------------------------
  // group D: 4, 9
  // ---------------------------
  
  // 04
  .add({
      targets: ['#outline-04', '#outline-09'],
      opacity: 1,
      duration: 1000,
    easing: 'easeInSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-04-1', '#cube-04-2', '#cube-09-1', '#cube-09-2'],
      opacity: 1,
      duration: 1400,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutSine',
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#cube-04-1', '#cube-04-2', '#cube-09-1', '#cube-09-2'],
    opacity: 0,
    delay: function(el, i) {
        return (200 * i);
      },
  })
  .add({
      targets: ['#outline-04', '#outline-09'],
      opacity: 0.3,
      duration: 500,
    delay: function(el, i) {
        return (200 * i);
      },
  })
  