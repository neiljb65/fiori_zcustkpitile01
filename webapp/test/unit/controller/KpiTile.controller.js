/*global QUnit*/

sap.ui.define([
	"zcustkpitile01/controller/KpiTile.controller"
], function (Controller) {
	"use strict";

	QUnit.module("KpiTile Controller");

	QUnit.test("I should test the KpiTile controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});