**Documentation:**

#This allows you to change how many vertex to create when you press "RANDOM" in the HUD.#

1. type pwd into terminal. you must be in the dev directory.
	Wilson-ENT3320-Fall2017-PressingGame/dev

2. type mate pressing-game. Pressing game should open 
   Open dev/pressing-game/graph.js

3. go to the graph.js and find "this.random".

4. change the varible "max_random_vertices = 13" to how many vertex you want to create when random is pressed. it should look like this
   var max_random_vertices = 99; 

5. find the varible "number_of_vertex" and take away subtract_vertex; it should look like this 
	ex var number_of_vertex = all_coordinates.length;

6. go to termial and start a server. Type this into termial.
   python -m SimpleHTTPServer

7. go to Chrome broswer and Type this into URL bar.
   localhost:8000

8. You should see 99 VERTICES.
