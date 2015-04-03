#pragma strict

var angle : float = 60;

function Start () {

}

function Update () {

	if (Input.GetKeyUp(KeyCode.RightArrow)) {
		
		transform.localScale.y = 0.3;
		
		//yield WaitForSeconds(1);
		GameObject.Find ("Panel").transform.Rotate(angle * Vector3.forward * Time.deltaTime, Space.Self);
	}
}

function PressButton () {
	
	transform.localScale.y = 0.1;
	
	GameObject.Find ("Panel").transform.Rotate(angle * Vector3.back * Time.deltaTime, Space.Self);
	
}