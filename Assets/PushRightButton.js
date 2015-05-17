#pragma strict

var angle : float = -60;
var canRotate : boolean = true;

function Start () {

}

function Update () {

	if (canRotate && Input.GetKeyDown(KeyCode.RightArrow)) {
		PressButton();
	}
	
	if (Input.GetKeyUp(KeyCode.RightArrow)) {
		ReleaseButton();
	}
}

function PressButton () {
	canRotate = false;
	
	transform.localScale.y = 0.1;
	
	var panels = GameObject.Find("Panels");
	var arrivedAtAngle = false;
	
	while (!arrivedAtAngle) {
		for (var panel : Transform in panels.transform) {
			panel.rigidbody.MoveRotation(panel.rigidbody.rotation * Quaternion.Euler(angle * Vector3.forward * Time.deltaTime));
			if (panel.transform.eulerAngles.z < angle)
				arrivedAtAngle = true;
				
		}
		
		yield;
	}
	
	for (var panel : Transform in panels.transform)
		panel.transform.eulerAngles.z = angle;
	
}

function ReleaseButton() {

	transform.localScale.y = 0.3;

	var panel = GameObject.Find("Panel");
	
	while (panel.transform.eulerAngles.z > 0) {
		panel.transform.Rotate(-angle * Vector3.forward * Time.deltaTime, Space.Self);
		yield;
	}
	
	//panel.transform.eulerAngles.z = 0;
	
	var panels = GameObject.Find("Panels");
	for (var p : Transform in panels.transform)
		p.transform.eulerAngles.z = 0;
		
	canRotate = true;

}