#Bug list

1. Highlight does not disappear once user enters play mode.
	* Create a simple graph.
	* Click/Press a vertex.
	* Enter play-mode.
	
2. Edge Bug Tested by Jonathan Alicea
	* Make a octagon with all sides connected
	* Make one more vertex in the center and connect all other vertices 
	* Enter Build mode
	* Select the vertex in the center 
	* Begin pulling apart all other vertices.
	* Edges will begin to "deattach" from other vertices.
	* see screenshots
	* Recreated on FireFox, Edge, and Chrome using Windows 10.
	---------------------------------------------------
	Update
	* We were able to reproduce the bug on OSX and IOS.
	* We have uploaded two videos of the bug being reproduced.
	* The bug seems to happen when you move a vertex to a corner and then move it to a new location.
	Update 
	* Upon futher investigation the bug seems to happen when the mouse goes off the canvas while being held down and is released out of bounds.
	* Can be replicated by 
		* Making 2 vertices.
		* Connect them.
		* Drag Vertex A to the corner release the mouse off the screen.
		* Drag Vertex B to the corner release the mouse off the screen.
		* Pull vertex A, the edge should detach.
	* See video attached. 
3. Iphone Tested by Kenny, Gabe, Brian, Tamanda. 
	*No bugs in 9.3.4 or 9.1 safari.
	
4. Android test by Sean and Tony
	*Chrome undo/redo button is highlighted when clicked.
	*Play mode in chrome sometimes allows vertices to be made. 
	*Firefox had no bugs
	
5. Highlight after color change causes fill to temporarily change.
	* _Initially bug occured when users were capable of exiting playmode without jump feature and reselecting the vertex in build_
	* On Gabriel's branch create a default vertex.
	* Highlight vertex.
	* Press color
	* Reselect vertex in build mode.
![ScreenShot](https://s12.postimg.org/b0bit31v1/ezgif_3640558919.gif)
