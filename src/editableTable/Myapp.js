import React from "react";
import SampleTable from "./SampleTable";
import $ from "jquery";

var Mydata = (function() {
  var obj = [];
  $.ajax({
    async: false,
    global: false,
    dataType: "json",
    type: "GET",
    url: "http://jsonplaceholder.typicode.com/posts",
    success: function(data) {
      for (var i = 0; i < 3; i++) {
        obj[i] = {
          id: i + 1,
          name: data[i].title,
          desc: data[i].body
        };
      }
    }
  });
  return obj;
})();

const App = () => {
  return (
    <div style={{ padding: 30 }}>
      <SampleTable tableRow={Mydata} />
    </div>
  );
};

export default App;
