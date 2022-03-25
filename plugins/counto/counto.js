(function ($){
    $.fn.counter = function() {
      const $this = $(this),
      numberFrom = parseInt($this.attr('data-from')),
      numberTo = parseInt($this.attr('data-to')),
      delta = numberTo - numberFrom,
      deltaPositive = delta > 0 ? 1 : 0,
      time = parseInt($this.attr('data-time')),
      changeTime = 10;
      
      let currentNumber = numberFrom,
      value = delta*changeTime/time;
      var interval1;
      const changeNumber = () => {
        currentNumber += value;
        //checks if currentNumber reached numberTo
        (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
        this.text(parseInt(currentNumber));
        currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
      }
  
      interval1 = setInterval(changeNumber,changeTime);
    }
  }(jQuery));
  
  $(document).ready(function(){
  
    $('.count-up').counter();
    $('.count1').counter();
    $('.count2').counter();
    $('.count3').counter();
    $('.count4').counter();
    
    new WOW().init();
    
    setTimeout(function () {
      $('.count5').counter();
    }, 3000);
  });





  // counto jquery library
(function (factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
      define(['jquery'], factory);
  } else if (typeof exports === 'object') {
      // CommonJS
      factory(require('jquery'));
  } else {
      // Browser globals
      factory(jQuery);
  }
}(function ($) {
var CountTo = function (element, options) {
  this.$element = $(element);
  this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
  this.init();
};

CountTo.DEFAULTS = {
  from: 0,               // the number the element should start at
  to: 0,                 // the number the element should end at
  speed: 1000,           // how long it should take to count between the target numbers
  refreshInterval: 100,  // how often the element should be updated
  decimals: 0,           // the number of decimal places to show
  formatter: formatter,  // handler for formatting the value before rendering
  onUpdate: null,        // callback method for every time the element is updated
  onComplete: null       // callback method for when the element finishes updating
};

CountTo.prototype.init = function () {
  this.value     = this.options.from;
  this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
  this.loopCount = 0;
  this.increment = (this.options.to - this.options.from) / this.loops;
};

CountTo.prototype.dataOptions = function () {
  var options = {
    from:            this.$element.data('from'),
    to:              this.$element.data('to'),
    speed:           this.$element.data('speed'),
    refreshInterval: this.$element.data('refresh-interval'),
    decimals:        this.$element.data('decimals')
  };

  var keys = Object.keys(options);

  for (var i in keys) {
    var key = keys[i];

    if (typeof(options[key]) === 'undefined') {
      delete options[key];
    }
  }

  return options;
};

CountTo.prototype.update = function () {
  this.value += this.increment;
  this.loopCount++;

  this.render();

  if (typeof(this.options.onUpdate) == 'function') {
    this.options.onUpdate.call(this.$element, this.value);
  }

  if (this.loopCount >= this.loops) {
    clearInterval(this.interval);
    this.value = this.options.to;

    if (typeof(this.options.onComplete) == 'function') {
      this.options.onComplete.call(this.$element, this.value);
    }
  }
};

CountTo.prototype.render = function () {
  var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
  this.$element.text(formattedValue);
};

CountTo.prototype.restart = function () {
  this.stop();
  this.init();
  this.start();
};

CountTo.prototype.start = function () {
  this.stop();
  this.render();
  this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
};

CountTo.prototype.stop = function () {
  if (this.interval) {
    clearInterval(this.interval);
  }
};

CountTo.prototype.toggle = function () {
  if (this.interval) {
    this.stop();
  } else {
    this.start();
  }
};

function formatter(value, options) {
  return value.toFixed(options.decimals);
}

$.fn.countTo = function (option) {
  return this.each(function () {
    var $this   = $(this);
    var data    = $this.data('countTo');
    var init    = !data || typeof(option) === 'object';
    var options = typeof(option) === 'object' ? option : {};
    var method  = typeof(option) === 'string' ? option : 'start';

    if (init) {
      if (data) data.stop();
      $this.data('countTo', data = new CountTo(this, options));
    }

    data[method].call(data);
  });
};
}));