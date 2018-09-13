var boo = false;

function pressMe() {
	$("#cir1").mousedown(function () {
		if (boo == false) {
			boo = true;
			d3.select("#cir1").transition().duration(500).attr("stroke", "#354649").attr("fill", "#ffffff");
			d3.select("#cir2").transition().duration(500).attr("stroke", "#000000").attr("fill", "#354649");
			d3.select("#cir3").transition().duration(500).attr("stroke", "#354649").attr("fill", "#ffffff");
			d3.select("#cir4").transition().duration(500).attr("stroke", "#000000").attr("fill", "#354649");
			d3.select("#connectG1").transition().duration(500).style("opacity", "0.0");
			d3.select("#connectG2").transition().duration(500).style("opacity", "1.0");
		}
		else {
			boo = false;
			d3.select("#cir1").transition().duration(500).attr("stroke", "#000000").attr("fill", "#354649");
			d3.select("#cir2").transition().duration(500).attr("stroke", "#354649").attr("fill", "#ffffff");
			d3.select("#cir3").transition().duration(500).attr("stroke", "#000000").attr("fill", "#354649");
			d3.select("#cir4").transition().duration(500).attr("stroke", "#354649").attr("fill", "#ffffff");
			
			d3.select("#connectG1").transition().duration(500).style("opacity", "1.0");
			d3.select("#connectG2").transition().duration(500).style("opacity", "0.0");
		}
    });
};
     
$(document).ready(function () {
	pressMe();

	$("#reset_over").mouseenter(function() { d3.select("#reset_circ").transition().duration(100).attr("fill", "#354649") ;});
	$("#reset_over").mouseout(function() { d3.select("#reset_circ").transition().duration(500).attr("fill", "#000000"); });
	$("#reset_over").mouseup(function() {
		boo = false;
		d3.select("#cir1").transition().attr("fill", "#354649");
		d3.select("#cir2").transition().attr("fill", "#ffffff");
		d3.select("#cir3").transition().attr("fill", "#354649");
		d3.select("#cir4").transition().attr("fill", "#ffffff");
		d3.select("#connectG1").transition().style("opacity", "1.0");
		d3.select("#connectG2").transition().style("opacity", "0.0");
	});
	$("#description_icon").mouseenter(function() { d3.select("#descr_circ").transition().duration(100).attr("fill", "#354649"); });
	$("#description_icon").mouseout(function() { d3.select("#descr_circ").transition().duration(500).attr("fill", "#000000"); });
	$("#description_icon").mouseup(function() { $("#description").css("visibility", "visible"); });
	
	$("#exit_over").mouseenter(function() { d3.select("#descr_exit_circ").transition().duration(100).attr("fill", "#354649"); });
	$("#exit_over").mouseout(function() { d3.select("#descr_exit_circ").transition().duration(500).attr("fill", "#000000"); });
	$("#exit_over").mouseup(function() { $("#description").css("visibility", "hidden"); });
});
