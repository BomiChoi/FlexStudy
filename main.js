$(document).ready(function () {
  var tabs = $(".tabs").find("a");
  var panels = $(".panel");
  var lastTab = $(".tabs").find("a").filter(".on");
  var lastPanel = $(lastTab.attr("href"));

  var buttons = $(".buttons").find("button");
  var wrap = $("main");
  var boxes = $(".box");
  var firstBox = boxes.first();
  var setOrder = $(".order").find("button");
  var setShrink = $(".shrink").find("button");
  var setGrow = $(".grow").find("button");

  var order = [1, 2, 3, 4, 5];
  var shrink = [1, 1, 1, 1, 1];
  var grow = [0, 0, 0, 0, 0];

  panels.hide();
  lastPanel.show();

  tabs.click(function (event) {
    event.preventDefault();
    var thisTab = $(this);
    var thisPanel = $(thisTab.attr("href"));

    lastTab.removeClass("on");
    thisTab.addClass("on");
    lastPanel.hide();
    thisPanel.show();

    lastTab = thisTab;
    lastPanel = thisPanel;
  });

  buttons.click(function (event) {
    var thisBtn = $(this);
    var thisSection = thisBtn.parent().parent();
    thisSection.find("button").removeClass("selected");
    thisBtn.addClass("selected");

    if (thisSection.hasClass("direction")) {
      if (thisBtn.index() == 0) {
        wrap.css("flex-direction", "row");
      } else if (thisBtn.index() == 1) {
        wrap.css("flex-direction", "column");
      } else if (thisBtn.index() == 2) {
        wrap.css("flex-direction", "row-reverse");
      } else if (thisBtn.index() == 3) {
        wrap.css("flex-direction", "column-reverse");
      }
    } else if (thisSection.hasClass("wrap")) {
      if (thisBtn.index() == 0) {
        wrap.css("flex-wrap", "nowrap");
      } else if (thisBtn.index() == 1) {
        wrap.css("flex-wrap", "wrap");
      } else if (thisBtn.index() == 2) {
        wrap.css("flex-wrap", "wrap-reverse");
      }
    } else if (thisSection.hasClass("justify_content")) {
      if (thisBtn.index() == 0) {
        wrap.css("justify-content", "flex-start");
      } else if (thisBtn.index() == 1) {
        wrap.css("justify-content", "center");
      } else if (thisBtn.index() == 2) {
        wrap.css("justify-content", "flex-end");
      } else if (thisBtn.index() == 3) {
        wrap.css("justify-content", "space-around");
      } else if (thisBtn.index() == 4) {
        wrap.css("justify-content", "space-between");
      }
    } else if (thisSection.hasClass("align_content")) {
      if (thisBtn.index() == 0) {
        wrap.css("align-content", "stretch");
      } else if (thisBtn.index() == 1) {
        wrap.css("align-content", "flex-start");
      } else if (thisBtn.index() == 2) {
        wrap.css("align-content", "center");
      } else if (thisBtn.index() == 3) {
        wrap.css("align-content", "flex-end");
      } else if (thisBtn.index() == 4) {
        wrap.css("align-content", "space-around");
      } else if (thisBtn.index() == 5) {
        wrap.css("align-content", "space-between");
      }
    } else if (thisSection.hasClass("align_items")) {
      if (thisBtn.index() == 0) {
        wrap.css("align-items", "stretch");
      } else if (thisBtn.index() == 1) {
        wrap.css("align-items", "flex-start");
      } else if (thisBtn.index() == 2) {
        wrap.css("align-items", "center");
      } else if (thisBtn.index() == 3) {
        wrap.css("align-items", "flex-end");
      } else if (thisBtn.index() == 4) {
        wrap.css("align-items", "baseline");
      }
    } else if (thisSection.hasClass("align_self")) {
      if (thisBtn.index() == 0) {
        firstBox.css("align-self", "auto");
      } else if (thisBtn.index() == 1) {
        firstBox.css("align-self", "flex-start");
      } else if (thisBtn.index() == 2) {
        firstBox.css("align-self", "center");
      } else if (thisBtn.index() == 3) {
        firstBox.css("align-self", "flex-end");
      } else if (thisBtn.index() == 4) {
        firstBox.css("align-self", "baseline");
      }
    }
  });

  setOrder.click(function (event) {
    var thisBtn = $(this);
    var thisLi = thisBtn.parent().parent();
    var thisSection = thisLi.parent().parent().parent();
    console.log(thisBtn.index());
    if (thisLi.index() == 0) {
      if (thisBtn.index() == 0 && order[0] > -10) {
        order[0]--;
      } else if (thisBtn.index() == 2 && order[0] < 10) {
        order[0]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(0).css("order", order[0]);
      thisLi.find("span").html(order[0]);
    } else if (thisLi.index() == 1) {
      if (thisBtn.index() == 0 && order[1] > -10) {
        order[1]--;
      } else if (thisBtn.index() == 2 && order[1] < 10) {
        order[1]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(1).css("order", order[1]);
      thisLi.find("span").html(order[1]);
    } else if (thisLi.index() == 2) {
      if (thisBtn.index() == 0 && order[2] > -10) {
        order[2]--;
      } else if (thisBtn.index() == 2 && order[2] < 10) {
        order[2]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(2).css("order", order[2]);
      thisLi.find("span").html(order[2]);
    } else if (thisLi.index() == 3) {
      if (thisBtn.index() == 0 && order[3] > -10) {
        order[3]--;
      } else if (thisBtn.index() == 2 && order[3] < 10) {
        order[3]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(3).css("order", order[3]);
      thisLi.find("span").html(order[3]);
    } else if (thisLi.index() == 4) {
      if (thisBtn.index() == 0 && order[4] > -10) {
        order[4]--;
      } else if (thisBtn.index() == 2 && order[4] < 10) {
        order[4]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(4).css("order", order[4]);
      thisLi.find("span").html(order[4]);
    }
  });

  setShrink.click(function (event) {
    var thisBtn = $(this);
    var thisLi = thisBtn.parent().parent();
    var thisSection = thisLi.parent().parent().parent();
    if (thisLi.index() == 0) {
      if (thisBtn.index() == 0 && shrink[0] > 0) {
        shrink[0]--;
      } else if (thisBtn.index() == 2 && shrink[0] < 10) {
        shrink[0]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(0).css("flex-shrink", shrink[0]);
      thisLi.find("span").html(shrink[0]);
    } else if (thisLi.index() == 1) {
      if (thisBtn.index() == 0 && shrink[1] > 0) {
        shrink[1]--;
      } else if (thisBtn.index() == 2 && shrink[1] < 10) {
        shrink[1]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(1).css("flex-shrink", shrink[1]);
      thisLi.find("span").html(shrink[1]);
    } else if (thisLi.index() == 2) {
      if (thisBtn.index() == 0 && shrink[2] > 0) {
        shrink[2]--;
      } else if (thisBtn.index() == 2 && shrink[2] < 10) {
        shrink[2]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(2).css("flex-shrink", shrink[2]);
      thisLi.find("span").html(shrink[2]);
    } else if (thisLi.index() == 3) {
      if (thisBtn.index() == 0 && shrink[3] > 0) {
        shrink[3]--;
      } else if (thisBtn.index() == 2 && shrink[3] < 10) {
        shrink[3]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(3).css("flex-shrink", shrink[3]);
      thisLi.find("span").html(shrink[3]);
    } else if (thisLi.index() == 4) {
      if (thisBtn.index() == 0 && shrink[4] > 0) {
        shrink[4]--;
      } else if (thisBtn.index() == 2 && shrink[4] < 10) {
        shrink[4]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(4).css("flex-shrink", shrink[4]);
      thisLi.find("span").html(shrink[4]);
    }
  });

  setGrow.click(function (event) {
    var thisBtn = $(this);
    var thisLi = thisBtn.parent().parent();
    var thisSection = thisLi.parent().parent().parent();
    if (thisLi.index() == 0) {
      if (thisBtn.index() == 0 && grow[0] > 0) {
        grow[0]--;
      } else if (thisBtn.index() == 2 && grow[0] < 10) {
        grow[0]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(0).css("flex-grow", grow[0]);
      thisLi.find("span").html(grow[0]);
    } else if (thisLi.index() == 1) {
      if (thisBtn.index() == 0 && grow[1] > 0) {
        grow[1]--;
      } else if (thisBtn.index() == 2 && grow[1] < 10) {
        grow[1]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(1).css("flex-grow", grow[1]);
      thisLi.find("span").html(grow[1]);
    } else if (thisLi.index() == 2) {
      if (thisBtn.index() == 0 && grow[2] > 0) {
        grow[2]--;
      } else if (thisBtn.index() == 2 && grow[2] < 10) {
        grow[2]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(2).css("flex-grow", grow[2]);
      thisLi.find("span").html(grow[2]);
    } else if (thisLi.index() == 3) {
      if (thisBtn.index() == 0 && grow[3] > 0) {
        grow[3]--;
      } else if (thisBtn.index() == 2 && grow[3] < 10) {
        grow[3]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(3).css("flex-grow", grow[3]);
      thisLi.find("span").html(grow[3]);
    } else if (thisLi.index() == 4) {
      if (thisBtn.index() == 0 && grow[4] > 0) {
        grow[4]--;
      } else if (thisBtn.index() == 2 && grow[4] < 10) {
        grow[4]++;
      } else {
        alert("범위를 벗어났습니다.");
      }
      boxes.eq(4).css("flex-grow", grow[4]);
      thisLi.find("span").html(grow[4]);
    }
  });
});
