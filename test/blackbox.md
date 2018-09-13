#Bug list

**Documentation:**

* Remote Debugging: 
	- [Remote Debugging on Android Devices](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en)
	- [Remote Debugging on FireFox- Mobile](https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging)
	- [Remote Debugging on Safari - Mobile](https://docs.brightcove.com/en/perform/concepts/mobile-debugging/mobile-debugging.html)
* Additonal Information:
	- In order to access the hashes call. `graph.vertices`, `graph.edges`, `graph.undo_stack`, and `graph.redo_stack` in the console.
	- Please refer to this video for additional help.

1. Feature: my feature title.

	* Step one to test the feature.
	* Step two to test the feature.
	* Nth step to test the feature.
	* Verify: first result to verify.
	* Verify: second result to verify.
	* Verify: nth result to verify.

2. Feature: delete a Vertex.

	* Draw a Vertex by clicking the play area.
	* Draw a second Vertex.
	* Highlight the first Vertex by clicking it and then click the second Vertex to connect them with an Edge.
	* Highlight the first Vertex and click it again.
	* Verify: The Vertex graphic is gone.
	* Verify: The connected Edge graphic is gone.
	* Verify: The Vertex does not appear in the Graph.vertices hash.
	* Verify: The connected Edge does not appear in the Graph.edges hash.
	
3. Feature: reset.
	* Populate the graph.
	* Press/Click Reset.
	* Verify: vertices do not exist in the vertices hash on graph.
	* Verify: edges do not exist in the edges hash on graph.
	
4. Feature: undo.
	* Populate a bicolored graph. (Note the names of edges and vertices)
	* Press/Click “Undo” to revert the previous action.
	* Repeat 1,2 until graph is cleared.
	* Verify: vertex/edge or appearance change is reflected in the code.

5. Feature: redo.
	* Follow 1-2 from “Feature: Undo”.
	* Press/Click “R”.
	* Verify: vertex/edge or appearance change is reflected in the code.

6. Feature: color change.
	* Press/Click the play area. Note the color of the vertex.
	* Press/Click “Color”.
	* Press/Click the play area. Note the color of the vertex.
	* Verify: vertex colors are different.

7. Feature: play.
	* Create a simple bi-colored graph.
	* Press/Click build.
	* Press/Click the vertices.
	* Verify: Vertex states have changed.
	* Verify: Edges have been removed from edges hash.

8. Feature: "COLOR" text changes when pressed.
	* Press/Click the color button. 
	* Draw a vertex.
	* Press/Click COLOR and draw a second vertex.
	* Press/Click COLOR and draw a third vertex.
	* Press/Click undo twice.
	* Press/Click redo twice.
	* Press/Click reset and retest above steps.
	* Verify: "color_text" change from #000000 to #ffffff and it correspond with text color.
	* Verify: Vertex color correspond with text's color.
	* Verify: COLOR text changes properly when undo and redo is pressed.

9. Fix: Highlighting issue.
    * Open program in windows Chrome.
    * Switch to developer tools.
    * Select mobile device emulator on top tool bar.
    * Verify all buttons do not highlight blue.

10. Feature: Undo Stacks
	* Undo (Vertex)
		- Click to create Vertex
		- Press Undo
		- Verify: 1st Vertex Dissapear
		- Press Redo
		- Verify: 1st Vertex reappear
	* Undo (Edge)
		- Click to create Vertex
		- Click to create 2nd Vertex
		- Click 1st Vertex to Highlight
		- Click 2nd Vertex to create edge between the two
		- Press Undo
		- Verify: Edge Dissapear and highlight comesback for the 1st Vertex
		- Press Redo
		- Verify: Highlight Dissapear for 1st Vertex and Edge reappear between the two Vertex
	* Undo (Highlight)
		- Click to create Vertex
		- Click on the Vertex to highlight it
		- Press Undo
		- Verify: Highlight dissapear
		- Press Redo
		- Verify: Highlight reappear
	* Undo (Color Button)
		- Click Color button
		- Press Undo
		- Verify: Color button turn from White to Black
		- Press Redo
		- Verify: Color button turn from Black to White
	* Undo (Play Button)
		- Click BUILD button
		- Press Undo
		- Verify: Change from PLAY button to BUILD button
		- Press Redo
		- Verify: Change from BUILD button to PLAY button

11. Feature: Jump (When pressing PLAY button while in PLAY mode)
	* Click to create Vertex
	* Click to create 2nd Vertex
	* Click 1st Vertex to Highlight
	* Click 2nd Vertex to create edge between the two
	* Verify: Type graph.undo_index in console, and it return 3
	* Press BUILD button to go into Play mode
	* Click any Vertex to change both Vertex into White Vertex
	* Press PLAY Button to jump back to the state before going to play mode
	* Verify: Type graph.undo_index in console, and it return 3 AND both Vertex turns Black and the Edge reappear.

12. Landscape orientation lock. 
	* Open the application in web browser.
	* Download the application to home screen.
	* Open the application on home screen.
	* Verify: Application is in landscape mode(Will not work as intended on iOS)

13. Feature: Vertex Number
    * Appear
        - Click to create Vertex
        - Verify: a small number 1 appears in the center of the vertex
        - Click to create another Vertex
        - Verify: a small number 2 appears in the center of the vertex
    * Delete (Single)
        - Click to create Vertex
        - Double Click on the vertex to delete it
        - Verify: Number dissapear with vertex
    * Delete (Chain Effect)
        - Click to create Vertex
        - Click to create a 2nd Vertex
        - Click to create a 3rd Vertex
        - Double Click the 2nd Vertex
        - Verify: the number for 2nd Vertex dissapear 
        - Verify: The number for 3rd Vertex change to 2
    * UndoRedo
        - Click to create Vertex
        - Click to create another Vertex
        - Press undo button
        - Verify: 2nd Vertex dissapear with the number
        - Press undo button
        - Verify: 1st Vertex dissapear with the number
        - Press redo button
        - Verify: 1st Vertex reappear with the number
        - Press redo button
        - Verify: 2nd Vertex reappear with the number

14. Delete edges on click.
	* Create two vertices.
	* Click the first vertex and second vertex to create an edge.
	* Click on the edge to highlight it. Ensure that the mouse is on the edge.
	* Click on highlighted edge.
	* Verify: The edge has been deleted from the UI.
	* Verify: Edge does not appear in the graph.edges hash.
	* Verify: Edges are removed from the edges hash on the two vertices.

15. Feature: Pressing Sequence
	* Click to create Vertex
	* Click to create a 2nd Vertex
	* Click BUILD button to enter play mode
	* Click the 2nd vertex
	* Verify: Type graph.pressing_sequence in console, and it returns [2]
	* Click the 1st Vertex
	* Verify: Type graph.pressing_sequence in console, and it returns [2, 1]
	* Click undo button
	* Verify: Type graph.pressing_sequence in console, and it returns [2]
	* Click redo button
	* Verify: Type graph.pressing_sequence in console, and it returns [2, 1]
	* Click RESET button
	* Click to create Vertex
	* Verify: SEQUENCE should be greyed out and disabled at this point (no vertex pressed)
	* Click BUILD button to enter play mode
	* Click the 1st Vertex
	* Verify: SEQUENCE button turns light grey, and shows pressing sequence on overlay when clicked
	* Click UNDO button
	* Verify: SEQUENCE button greys out and is disabled
	* Click REDO button
	* Verify: SEQUENCE button turns light grey, and shows pressing sequence on overlay when clicked
	* Click RESET button
	* Create at least 22 Vertices
	* Click BUILD button to enter play mode
	* Press all Vertices
	* Click on SEQUENCE button
	* Verify: presses greater than 21 (in order, not value) should return to new line on overlay 

16. Adjacency Matrix
	* Draw two black vertices and one white vertex. 
	* Connect all three vertex with edges.
	* Open console log and type in "graph.adjacency_matrix();".
	* Open array 0, 1 and 2.
	* Verify: Both black vertex output "1" on itself, the white vertex output "0".
	* Verify: The connected vertex output "1", the nonconnect output "0".
	* Type in "graph.vertices" inside the console.
	* Find each vertex's vertexNum inside attrs.
	* Verify: The vertex number matches their vertexNum.
	* Delete the black vertex connected to the other two vertex.
	* Type "graph.adjacency_matrix();" inside console log again and reopen the arrays.
	* Verify: The black vertex output "1" on itself and the white vertex output "0".
	* Verify: Both vertex output "0" on the second index. 

17. Feature: Color Change
	* Create a black vertex 
	* Highlight the black vertex
	* Verify: Color Button changes to white
	* Click Color button
	* Verify: Black Vertex becomes white and Color button returns to black
	* Click Undo Button
	* Verify: Vertex becomes black again in the highlighted state and Color button becomes white
	* Click Redo Button
	* Verify: Black Vertex becomes white and Color button returns to black
	* Change Global Color to White
	* Create a white Vertex
	* Highlight the white vertex
	* Verify: Color Button changes to black
	* Click Color button
	* Verify: White Vertex becomes black and Color button returns to white
	* Click Undo Button
	* Verify: Vertex becomes white again in the highlighted state and Color button becomes black
	* Click Redo Button
	* Verify: White vertex becomes black and Color button returns to white.
	* Highlight the White Vertex
	* Verify: Color Button changes to black
	* Connect to Black Vertex
	* Verify: Color Button changes to white and Vertices are connected
	* Click Undo Button
	* Verify: White Vertex is in the highlighted state and Color button becomes black
	* Click Redo Button
	* Verify: Color Button changes to white and Vertices are connected
	* Change to Play mode
	* Click black vertex
	* Verify: Vertices are now disconnected and the Vertex 2 has become white, Vertex 1 should become black.
	* Click the black Vertex
	* Verify: Both Vertices are white
	* Change to build mode
	* Verify: Vertex 1 is Black, Vertex 2 is white, both are connected to each other. 
	
18. Feature: Verify Correct Re-creation of Stashed Vertices and Edges
	* Draw three vertices.
	* Add edges to the vertices in this order: 3 -> 1, 3 -> 2, 2 -> 1.
	* Highlight vertex 1.
	* Press the Color button to change it to white.
	* Click the Undo button twice.
	* Verify that all the vertices and edges look like they did at the end of step 18.2; especially, verify that all edges still exist.

19. Feature: g for Text and Vertex
	* Draw one vertex.
	* Look in the elements tab in the console
	* Open SVG tag and under it, there should be a vertex_group
	* open the vertex_group and you'll find a vertex and a number under it

20. Feature: New UI
	* Opening Tab
		- Click on Red bar on left side of screen (we call this a tab bar)
		- Verify Red bar minimize
		- All buttons appear on screen tab
	* Closing Tab
		- Click on Red bar (or any space on the Menu Tab, not the actual buttons)
		- Verify the tab  becomes a red large bar on the left size of the screen.
		- All buttons desapear from the screen leaving only the red tab bar
	* Build/Play Button
		- Click Build Button
		- verify: buttons change to play and tab bar becomes green.
		- Click play Button
		- verify: button change to build  mode and tab bar becomes red. 
		
	* Undo/Redo
		- Create a vertex
		- Verify: click undo and vertex disappear from screen. 
		- Create two vertices with an edge
		- Click Undo
		- Verify: edge disappears between both vertices. 
		- Create a vertex
		- Verify click undo and vertex disappear from screen.
		- Verify redo makes vertex reappear on scren 
		- Create two vertexes with and edge
		- Verify edge disappears betwen both vertices. 
		- Verify edge redo appears on screen.
	* Color
		- Click Color 
		- Verify highlight
		- Create a vertex
		- Verify vertex color change to white
		- Click Reset
		- Create a vertex and highlight
		- Click Color 
		- Verify vertex color change of vertex

	* Reset
		- Any object on the screen will disappear after clicking the reset button. 
		- Check undo redo stack 
	* Mouse Over
		- Hover over button menu will hightlighted buttons. 
	* Matrix
		- Create two vertices
		- Click on the matrix button and open console log
		- Verify that the console log print a hash of the arrays of the vertices adjacency matrix.

21. Feature: Edge highlight and delete 
	IN BUILD MODE:
	* Draw 2 vertices
	* Connect with an edge
	* Click edge, edge should highlight red
	* Click any where on the background
	* Edge should turn back to white
	* Remake an edge and click twice
	* Edge should delete
	* Undo and edge should come back red
	* Undo again and edge should turn white
	* Redo and make sure edge acts accordingly
	IN PLAY MODE:
	* Click edge -- it should not change color

22. Feature: Random
	- Click random button.
	- Verify: The amount of vertices generated is between five and thirteen.
	- Verify: The amount of white vertices is less than or equal to a quarter of total vertices.
	- Verify: Each vertex have at least one edge connected to another vertex.
	- Repeat these tests at least ten times.

23. Feature: Unclickable Number and Text
	* Number
		- Create a vertex
		- Attempt to click on the number on the vertex.
		- Vertify: The vertex being highlighted due to not being able to click on number.
	* Text
		- Open the Menu on the left
		- Attempt to click on the Build Text (or any of the other Text)
		- Vertify: The button being click instead.

24. Feature: Matrix Drag
	- Check Matrix button is DISABLED (with 0 Vertices created)
	- (Vertical Drag) Create 1 to 13 Vertices, Check Matrix cannot be dragged from #'s 13 or less
	- (Vertical Drag) Create 16 or more Vertices, Check Matrix can be dragged from #'s 16 or more
	- (Horizontal Drag) Create 1 to 26 Vertices, Check Matrix cannot be dragged from #'s 26 or less
	- (Horizontal Drag) Create 28 or more Vertices, Check Matrix can be dragged from #'s 28 or more

25. Feature: Copy Matrix
    - Create a matrix with at least 10 vertices.
    - Click matrix button.
    - Click copy button and verify it turns green, then fades back to original gray color.
    - Paste into any document and verify matrix was copied properly.

26. Vertex Click & Drag
	In BUILD Mode:
	- Click to create Vertex
	- Verify: Clicking anywhere on vertex and dragging moves location of Vertex.
	- Verify: Vertex center location DOES NOT jump to mouse position.
	- Verify: Distance between mouse pointer position and Vertex center remains the same. 
	- Click to create 2nd Vertex
	- Create edge betweem Vertices.
	- Verify: Clicking and dragging vertex DOES NOT cause egde ends to jump to mouse location.
	In PLAY Mode:
	- Verify: Clicking anywhere on vertex and dragging moves location of Vertex.
	- Verify: Vertex center location DOES NOT jump to mouse position.
	- Verify: Distance between mouse pointer position and Vertex center remains the same. 

27. Feature: Local Storage
	- Create a random matrix
	- Reload the page
	- Vertify: The same matrix still exist
	- Open a new tab on the browser, and open the same file
	- Vertify: The same matrix still exist
	- Close the browser and all instance of it (if you have multiple tabs open)
	- Reopen the browser
	- Vertify: the matrix dissapeared and you should have a new fresh copy

28. Fix: Clicking twice on a vertex in play mode should only add one new state to the undo stack
 	* Create a vertex in build mode
 	* Click play mode
 	* Click vertex one time 
 	* Verify vertex turning white
    * Verify in console by typing graph.undo_index that it returns 2
 	* Click vertex one more time 
 	* Verify in console by typing graph.undo_index that it returns 2 again

29. Fix: Dragging a vertex in build / play mode should not leave play area
	* Create a vertex in build mode
	* Click and drag on the vertex
	* Drag vertex to the Left of play area, make sure it cannot be dragged off
	* Drag vertex to the Right of play area, make sure it cannot be dragged off
	* Drag vertex to the Top of play area, make sure it cannot be dragged off
	* Drag vertex to the Bottom of play area, make sure it cannot be dragged off
	

 	
