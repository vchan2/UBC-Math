<!-- Directives -->
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
    
    
<!DOCTYPE html>
<html>
<head>
<!-- Style sheet -->
<link href="../css/style.css" rel="stylesheet" type="text/css">
<title>Welcome Page</title>
</head>
<body>
<h1>Welcome Page</h1>
<div id="wrapper" class="shadow">

<!-- Next activity recommendation -->

<div id="nextActivity">
	<p>
		Hello $Student_Name!
	</p>
	<p>
		We suggest you work next on:
	</p>
	<p>
		<span>(Some Page)</span> in <span>(Some Topic)</span>
	</p>
</div>

<!-- Visual progression of the course -->
<h2>Progress</h2>
<div id="container" class="block">
<div id="progression">
	<div id="left_box">
		<div id="numbers" class="info_box">
		Numbers
		</div>
		<div id="functions" class="info_box">
		Functions
		</div>
	</div>
	<div id="prog_visual" class="shadow">
		
		
		<table class="visual_table">
			<tr>
				<td>
					<div id="numbers" class="visual_box">
						I
					</div>
				</td>
				<td>
					<div id="algebra" class="visual_box">
						II
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div id="functions" class="visual_box">
						III
					</div>
				</td>
				<td>
					<div id="equations" class="visual_box">
						VI
					</div>
				</td>
			</tr>
		</table>
	</div>
	<div id="right_box">
		<div id="algebra" class="info_box">
		Algebra
		</div>
		<div id="equations" class="info_box">
		Equations
		</div>
	</div>
</div>
</div>

<!-- General Recommendation Visual -->
<h2> Recommendations</h2>
<div id="recommendations">
	<div id="numbers" class="info_box">
		Topic I: Numbers
	</div>
	<div id="algebra" class="info_box">
		Topic II: Algebra
	</div>
	<div id="functions" class="info_box">
		Topic III: Functions
	</div>
	<div id="equations" class="info_box">
		Topic VI: Equations
	</div>
</div>

</div>

</body>
</html>