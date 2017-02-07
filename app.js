function onHover(crayon, text) {
  //when the crayon is hovered over -
  $(crayon).hover(
    function() {
      //the text is shown
      $(text).css("display", "inline");
    }, function() {
      //when the user hovers out - display goes away
      $(text).css("display", "none");
    }
  );
}

//first arg: the id of the crayon; 2nd arg: the text class to display
onHover("#apricot", ".apricot");
onHover("#asparagus", ".asparagus");
onHover("#bittersweet", ".bittersweet");
onHover("#black", ".black");
onHover("#blue", ".blue");
onHover("#blue-green", ".blue-green");
onHover("#blue-violet", ".blue-violet");
onHover("#brick-red", ".brick-red");
onHover("#brown", ".brown");
onHover("#burnt-orange", ".burnt-orange");
onHover("#burnt-sienna", ".burnt-sienna");
onHover("#cadet-blue", ".cadet-blue");
onHover("#carnation-pink", ".carnation-pink");
onHover("#cerulen", ".cerulen");
onHover("#chesnut", ".chesnut");
onHover("#cornflower", ".cornflower");
onHover("#dandelion", ".dandelion");
onHover("#forest-green", ".forest-green");
onHover("#gold", ".gold");
onHover("#goldenrod", ".goldenrod");
onHover("#granny-smith-apple", ".granny-smith-apple");
onHover("#gray", ".gray");
onHover("#green", ".green");
onHover("#green-yellow", ".green-yellow");
onHover("#indigo", ".indigo");
onHover("#lavender", ".lavender");
onHover("#macoroni-and-cheese", ".macoroni-and-cheese");
onHover("#magenta", ".magenta");
onHover("#mahogany", ".mahogany");
onHover("#mauvelous", ".mauvelous");
onHover("#melon", ".melon");
onHover("#olive-green", ".olive-green");
onHover("#orange", ".orange");
onHover("#orchid", ".orchid");
onHover("#pacific-blue", ".pacific-blue");
onHover("#peach", ".peach");
onHover("#perwinkle", ".perwinkle");
onHover("#plum", ".plum");
onHover("#purple-mountain-majesty", ".purple-mountain-majesty");
onHover("#raw-sienna", ".raw-sienna");
onHover("#red", ".red");
onHover("#red-orange", ".red-orange");
onHover("#red-violet", ".red-violet");
onHover("#robins-egg-blue", ".robins-egg-blue");
onHover("#salmon", ".salmon");
onHover("#scarlett", ".scarlett");
onHover("#sea-green", ".sea-green");
onHover("#sepia", ".sepia");
onHover("#silver", ".silver");
onHover("#sky-blue", ".sky-blue");
onHover("#spring-green", ".spring-green");
onHover("#tan", ".tan");
onHover("#tickle-me-pink", ".tickle-me-pink");
onHover("#timberwolf", ".timberwolf");
onHover("#tumbleweed", ".tumbleweed");
onHover("#turquiose-blue", ".turquiose-blue");
onHover("#violet", ".violet");
onHover("#violet-red", ".violet-red");
onHover("#white", ".white");
onHover("#wild-strawberry", ".wild-strawberry");
onHover("#wisteria", ".wisteria");
onHover("#yellow", ".yellow");
onHover("#yellow-green", ".yellow-green");
onHover("#yellow-orange", ".yellow-orange");
