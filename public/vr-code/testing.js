var delayCreateScene = function () {
    // Create a scene.
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.White();
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Creates, angles, distances and targets the camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(3000, 3750, 3850));
    camera.attachControl(canvas, true);
    
    // Append glTF model to scene.
    // BABYLON.SceneLoader.Append("assets/", "farm-map.glb", scene, function (scene) {
    //     // Create a default arc rotate camera and light.
    //     scene.createDefaultCameraOrLight(true, true, true);
    //     // The default camera looks at the back of the asset.
    //     // Rotate the camera by 180 degrees to the front of the asset.
    //     scene.activeCamera.alpha += Math.PI;
    // });

    BABYLON.SceneLoader.ImportMesh("", "assets/", "farm-map.glb", scene, function (newMeshes, particleSystem, skeletons) {
    
    });

    var temperature = BABYLON.Mesh.CreateSphere("temperature data", 16, 2, scene);
    temperature.position.y = 1;
    var humidity = BABYLON.Mesh.CreateSphere("humidity data", 16, 2, scene);
    humidity.position = new BABYLON.Vector3(-700,1,0);
    var moisture = BABYLON.Mesh.CreateSphere("moisture data", 16, 2, scene);
    moisture.position = new BABYLON.Vector3(500,1,1250);
    
    // GUI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    //Temperature Sensor (DHT-22)
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.1;
    rect1.height = "40px";
    rect1.cornerRadius = 20;
    rect1.color = "Black";
    rect1.thickness = 4;
    rect1.background = "green";
    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(temperature);   
    rect1.linkOffsetY = -350;
    // rect1.linkOffsetX = 150;

    var label1 = new BABYLON.GUI.TextBlock();
    label1.text = "Temperature = 15";
    rect1.addControl(label1);

    var target1= new BABYLON.GUI.Ellipse();
    target1.width = "10px";
    target1.height = "10px";
    target1.color = "Black";
    target1.thickness = 4;
    target1.background = "green";
    advancedTexture.addControl(target1);
    target1.linkWithMesh(temperature);   

    var line1 = new BABYLON.GUI.Line();
    line1.lineWidth = 4;
    line1.color = "Black";
    line1.y2 = 20;
    line1.linkOffsetY = 0;
    advancedTexture.addControl(line1);
    line1.linkWithMesh(temperature); 
    line1.connectedControl = rect1;  

    //Humidity Sensor (DHT-22)
    var rect2 = new BABYLON.GUI.Rectangle();
    rect2.width = 0.1;
    rect2.height = "40px";
    rect2.cornerRadius = 20;
    rect2.color = "Black";
    rect2.thickness = 4;
    rect2.background = "green";
    advancedTexture.addControl(rect2);
    rect2.linkWithMesh(humidity);   
    rect2.linkOffsetY = -200;
    // rect2.linkOffsetX = -150;

    var label2 = new BABYLON.GUI.TextBlock();
    label2.text = "Humidity = 25";
    rect2.addControl(label2);

    var target2 = new BABYLON.GUI.Ellipse();
    target2.width = "10px";
    target2.height = "10px";
    target2.color = "Black";
    target2.thickness = 4;
    target2.background = "green";
    advancedTexture.addControl(target2);
    target2.linkWithMesh(humidity);   

    var line2 = new BABYLON.GUI.Line();
    line2.lineWidth = 4;
    line2.color = "Black";
    line2.y2 = 20;
    line2.linkOffsetY = 0;
    advancedTexture.addControl(line2);
    line2.linkWithMesh(humidity); 
    line2.connectedControl = rect2; 

    //Moisture Sensor (YL-69)
    var rect3 = new BABYLON.GUI.Rectangle();
    rect3.width = 0.1;
    rect3.height = "40px";
    rect3.cornerRadius = 20;
    rect3.color = "Black";
    rect3.thickness = 4;
    rect3.background = "green";
    advancedTexture.addControl(rect3);
    rect3.linkWithMesh(moisture);   
    rect3.linkOffsetY = -250;
    // rect3.linkOffsetX = -150;

    var label3 = new BABYLON.GUI.TextBlock();
    label3.text = "Moisture = 35";
    rect3.addControl(label3);

    var target3 = new BABYLON.GUI.Ellipse();
    target3.width = "10px";
    target3.height = "10px";
    target3.color = "Black";
    target3.thickness = 4;
    target3.background = "green";
    advancedTexture.addControl(target3);
    target3.linkWithMesh(moisture);   

    var line3 = new BABYLON.GUI.Line();
    line3.lineWidth = 4;
    line3.color = "Black";
    line3.y2 = 20;
    line3.linkOffsetY = 0;
    advancedTexture.addControl(line3);
    line3.linkWithMesh(moisture); 
    line3.connectedControl = rect3; 

    return scene;
};