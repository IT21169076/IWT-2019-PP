<!DOCTYPE html>
<html>
  <head>
    <script>
      function drawTable() {
        var num = document.getElementById("inputTxt_l").value;
        num = parseInt(num);

        document.write("<table border='5'>");
        document.write("<tr>");

        for (i = 1; i <= num; i++) {
          document.write("<td>~~~~~" + i);
          document.write("~~~~~</td>");
        }
        document.write("</tr>");
        document.write("</table>");
      }
    </script>
  </head>
  <body>
    Input a number 1:
    <input type="text" id="inputTxt_l" /><br />
    <input type="button" value="DRAW TABLE" onclick="drawTable()" />
  </body>
</html>
