  
      var iso = new Isotope( '.masonry-grid', {
        itemSelector: '.item_work',
        percentPosition: true,
        layoutMode: 'packery',
        transitionDuration: '0.2s',

        packery: {
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
        }
      })

