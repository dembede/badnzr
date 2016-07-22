<!DOCTYPE html>
<html lang="en-US" ng-app="badenizerApp">
<link href="style.css" rel="stylesheet"/>
<body>
	<h2>Chasing Shadows</h2>
	<div id="CustScreen" ng-controller="Customerobj">
			Customer Name: <input ng-model="CustomerName" type="text" id="CustomerName" /><br/>
			Customer Code: <input ng-model="CustomerCode" type="text" id="CustomerCode" /><br/>
			<!-- Making use of expressions to display data -->
			<!-- <div id="divCustomerName">{{CustomerName + (CustomerCode)}}</div><br/> -->

			<input type="button" name="Submit" ng-click="Submit()" value="Submit"></input>
			<!-- <div class="error" ng-model="error">{{error}}</div>
			<div class="success" ng-model="success">{{success}}</div> -->
	</div>
	<script src="angular.min.js"></script>
	<script src="script.js"></script>
</body>
</html>
