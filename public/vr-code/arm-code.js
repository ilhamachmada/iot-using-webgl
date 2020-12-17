var createScene = function() {
    //=======================================================================
//=================SCENE==================================
var scene = new BABYLON.Scene(engine);
scene.enablePhysics();
//=========================================================


//=================CAMERA===============
var camera = new BABYLON.VRDeviceOrientationFreeCamera("camera", new BABYLON.Vector3(0, 1.6, -7), scene);
camera.speed = 0.4
camera.checkCollisions = true;
//camera.applyGravity
camera.attachControl(canvas, true);
scene.gravity = new BABYLON.Vector3(0, -0.5, 0);
//=========================================================

//================LIGHTS===============
var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    light1.intensity = 1;
//=========================================================

//================SHADOW==============================
/*var shadowGenerator = new BABYLON.ShadowGenerator(1024, light1);
        shadowGenerator.getShadowMap().renderList.push(base);
        shadowGenerator.getShadowMap().renderList.push(sphereL);
        shadowGenerator.getShadowMap().renderList.push(armL);
        shadowGenerator.getShadowMap().renderList.push(sphereH);
        shadowGenerator.getShadowMap().renderList.push(armH);
        shadowGenerator.useVarianceShadowMap = true;
        ground.receiveShadows = true;*/
//=======================================================


//=================GROUND===============
var ground = BABYLON.Mesh.CreateGround("ground", 20, 20, 20, scene);
ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.PlaneImpostor, {mass: 0, friction: 0.5, restitution: 0.7}, scene);
var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("assets/ground/ground.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 6;
    groundMaterial.diffuseTexture.vScale = 6;
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ground.material = groundMaterial;
    ground.receiveShadows = true;
    ground.checkCollisions = true;
    
// Skybox
var skybox = BABYLON.Mesh.CreateBox("wall", 20, scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("wall", scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/wall/wall", scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;
        skybox.checkCollisions = true;

// generate random boxes and its position
var box1 = BABYLON.Mesh.CreateBox("box1", 1, scene);
    box1.position = new BABYLON.Vector3(5, 0.5, 0);
    box1.physicsImpostor = new BABYLON.PhysicsImpostor(box1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    box1.checkCollisions = true;
var box2 = BABYLON.Mesh.CreateBox("box2", 1, scene);
    box2.position = new BABYLON.Vector3(-5, 0.5, 0); 
    box2.physicsImpostor = new BABYLON.PhysicsImpostor(box2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene); 
    box2.checkCollisions = true;  
var box3 = BABYLON.Mesh.CreateBox("box3", 1, scene);
    box3.position = new BABYLON.Vector3(0, 0.5, 5);  
    box3.physicsImpostor = new BABYLON.PhysicsImpostor(box3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    box3.checkCollisions = true;     
var box4 = BABYLON.Mesh.CreateBox("box4", 1, scene);
    box4.position = new BABYLON.Vector3(0, 0.5, -5);   
    box4.physicsImpostor = new BABYLON.PhysicsImpostor(box4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    box4.checkCollisions = true;
var boxx1 = BABYLON.Mesh.CreateBox("boxx1", 1, scene);
    boxx1.position = new BABYLON.Vector3(-9, 0.5, -9);   
    boxx1.physicsImpostor = new BABYLON.PhysicsImpostor(boxx1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx1.checkCollisions = true;
var boxx2 = BABYLON.Mesh.CreateBox("boxx1", 1, scene);
    boxx2.position = new BABYLON.Vector3(-9, 1, -9);   
    boxx2.physicsImpostor = new BABYLON.PhysicsImpostor(boxx2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx2.checkCollisions = true;
var boxx3 = BABYLON.Mesh.CreateBox("boxx3", 1, scene);
    boxx3.position = new BABYLON.Vector3(-9, 3, -9);   
    boxx3.physicsImpostor = new BABYLON.PhysicsImpostor(boxx3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx3.checkCollisions = true;
var boxx4 = BABYLON.Mesh.CreateBox("boxx1", 1, scene);
    boxx4.position = new BABYLON.Vector3(-8, 0.5, -9);   
    boxx4.physicsImpostor = new BABYLON.PhysicsImpostor(boxx4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx4.checkCollisions = true;
var boxx5 = BABYLON.Mesh.CreateBox("boxx1", 1, scene);
    boxx5.position = new BABYLON.Vector3(-8, 1, -9);   
    boxx5.physicsImpostor = new BABYLON.PhysicsImpostor(boxx5, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx5.checkCollisions = true;
var boxx6 = BABYLON.Mesh.CreateBox("boxx3", 1, scene);
    boxx6.position = new BABYLON.Vector3(-8, 3, -9);   
    boxx6.physicsImpostor = new BABYLON.PhysicsImpostor(boxx6, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx6.checkCollisions = true;
var boxx7 = BABYLON.Mesh.CreateBox("boxx1", 1, scene);
    boxx7.position = new BABYLON.Vector3(-9, 0.5, -7.7);   
    boxx7.physicsImpostor = new BABYLON.PhysicsImpostor(boxx7, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx7.checkCollisions = true;
var boxx8 = BABYLON.Mesh.CreateBox("boxx1", 1, scene);
    boxx8.position = new BABYLON.Vector3(-9, 1, -7.7);   
    boxx8.physicsImpostor = new BABYLON.PhysicsImpostor(boxx8, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx8.checkCollisions = true;
var boxx9 = BABYLON.Mesh.CreateBox("boxx3", 1, scene);
    boxx9.position = new BABYLON.Vector3(-9, 3, -7.7);   
    boxx9.physicsImpostor = new BABYLON.PhysicsImpostor(boxx9, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);
    boxx9.checkCollisions = true;
var boxMaterial = new BABYLON.StandardMaterial("boxMat1", scene);
    boxMaterial.diffuseTexture = new BABYLON.Texture("assets/crate/crate2.png", scene);
var boxMaterial1 = new BABYLON.StandardMaterial("box2", scene);
    boxMaterial1.diffuseTexture = new BABYLON.Texture("assets/crate/crate.png", scene);
var boxMaterial = new BABYLON.StandardMaterial("ground", scene);
    boxMaterial.diffuseTexture = new BABYLON.Texture("assets/crate/crate.png", scene);
    box1.material = boxMaterial;
    box2.material = boxMaterial;
    box3.material = boxMaterial;
    box4.material = boxMaterial;
    boxx1.material = boxMaterial1;
    boxx2.material = boxMaterial1;
    boxx3.material = boxMaterial1;
    boxx4.material = boxMaterial1;
    boxx5.material = boxMaterial1;
    boxx6.material = boxMaterial1;
    boxx7.material = boxMaterial1;
    boxx8.material = boxMaterial1;
    boxx9.material = boxMaterial1;
//=========================================================

//=================BORDER================
var border0 = BABYLON.Mesh.CreateBox("border0", 1, scene);
    border0.scaling = new BABYLON.Vector3(1, 20, 20);
    border0.position.x = -10.0;
    border0.physicsImpostor = new BABYLON.PhysicsImpostor(border0, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    border0.checkCollisions = true;
    border0.isVisible = false;

    var border1 = BABYLON.Mesh.CreateBox("border1", 1, scene);
    border1.scaling = new BABYLON.Vector3(1, 20, 20);
    border1.position.x = 10.0;
    border1.physicsImpostor = new BABYLON.PhysicsImpostor(border1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    border1.checkCollisions = true;
    border1.isVisible = false;

    var border2 = BABYLON.Mesh.CreateBox("border2", 1, scene);
    border2.scaling = new BABYLON.Vector3(20, 20, 1);
    border2.position.z = 10.0;
    border2.physicsImpostor = new BABYLON.PhysicsImpostor(border2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    border2.checkCollisions = true;
    border2.isVisible = false;

    var border3 = BABYLON.Mesh.CreateBox("border3", 1, scene);
    border3.scaling = new BABYLON.Vector3(20, 20, 1);
    border3.position.z = -10.0;
    border3.physicsImpostor = new BABYLON.PhysicsImpostor(border3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    border3.checkCollisions = true;
    border3.isVisible = false;
//========================================================

//================VR SETUP=============
var vrHelper = scene.createDefaultVRExperience();
    vrHelper.enableInteractions();
    vrHelper.enableTeleportation({floorMeshName: "ground"});
    vrHelper.onAfterEnteringVRObservable.add(()=>{
    if(scene.activeCamera === vrHelper.vrDeviceOrientationCamera){
        BABYLON.FreeCameraDeviceOrientationInput.WaitForOrientationChangeAsync(1000).then(()=>{
            // Successfully received sensor input
        }).catch(()=>{
            alert("Device orientation camera is being used but no sensor is found, prompt user to enable in safari settings");
        })
    }
})
//=========================================================


//=============MESH SETUP=====================================================================================================================
    BABYLON.SceneLoader.ImportMesh("", "assets/arm-robot/", "arm-robot.babylon", scene, function (newMeshes, particleSystem, skeletons) {
            var base = newMeshes[0];
            base.position.y = 0.25;
            var mesh = newMeshes[1];
            mesh.rotation = new BABYLON.Vector3(89.50, 0, 0);
            mesh.checkCollisions = true;
           // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.1 }, scene);

            var mesh1 = newMeshes[2];
            mesh1.rotation = new BABYLON.Vector3(0, 92.65, -0.6);
            mesh1.checkCollisions = true;
           // mesh1.physicsImpostor = new BABYLON.PhysicsImpostor(mesh1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh2 = newMeshes[3];
            mesh2.rotation = new BABYLON.Vector3(0 ,0 ,0.2);
            mesh2.checkCollisions = true;
          //  mesh2.physicsImpostor = new BABYLON.PhysicsImpostor(mesh2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh3 = newMeshes[4];
            mesh3.rotation = new BABYLON.Vector3(-89.6 ,0 ,89.6);
            mesh3.checkCollisions = true;
           // mesh3.physicsImpostor = new BABYLON.PhysicsImpostor(mesh3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh4 = newMeshes[5]; //left grip
            mesh4.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
            mesh4.checkCollisions = true;
           // mesh4.physicsImpostor = new BABYLON.PhysicsImpostor(mesh4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh5 = newMeshes[6]; //right grip
            mesh5.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);
            mesh5.checkCollisions = true;
            //mesh5.physicsImpostor = new BABYLON.PhysicsImpostor(mesh5, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
	
            var meshMaterial = new BABYLON.StandardMaterial("ground", scene);
            meshMaterial.diffuseTexture = new BABYLON.Texture("assets/arm-robot/yellow.jpg", scene);
            var baseMaterial = new BABYLON.StandardMaterial("ground1", scene);
            baseMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            base.material =  baseMaterial;
            mesh.material = meshMaterial;
            mesh1.material = meshMaterial;
            mesh2.material = meshMaterial;
            mesh3.material = meshMaterial;
            mesh4.material = meshMaterial;
            mesh5.material = meshMaterial;


            //SLIDER
            var plane = BABYLON.Mesh.CreatePlane("plane", 5);
            plane.position = new BABYLON.Vector3(-4, 4, -1);
            var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
                var panel = new BABYLON.GUI.StackPanel();
                panel.width = "220px";
                panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                advancedTexture.addControl(panel);

            var header = new BABYLON.GUI.TextBlock();
                header.text = "Base";
                header.height = "30px";
                header.color = "white";
                panel.addControl(header); 

            var slider = new BABYLON.GUI.Slider();
                slider.minimum = 0;
                slider.maximum = 2 * Math.PI;
                slider.value = 0;
                slider.height = "20px";
                slider.width = "200px";
                slider.onValueChangedObservable.add(function(value) {
                    //header.text = "Base-Position: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh) {
                        mesh.rotation.y = value;
                    }
                });
                panel.addControl(slider);
                var header2 = new BABYLON.GUI.TextBlock();
                header2.text = "Joint 1";
                header2.height = "30px";
                header2.color = "white";
                panel.addControl(header2); 

            var slider2 = new BABYLON.GUI.Slider();
                slider2.minimum = -0.6;
                slider2.maximum = 3;
                slider2.value = 0;
                slider2.height = "20px";
                slider2.width = "200px";
                slider2.onValueChangedObservable.add(function(value) {
                    //header2.text = "Joint 1: " + value +" derajat";
                    if (mesh1) {
                        mesh1.rotation.z = value;
                    }
                });
                panel.addControl(slider2);    

            var header3 = new BABYLON.GUI.TextBlock();
                header3.text = "Joint 2";
                header3.height = "30px";
                header3.color = "white";
                panel.addControl(header3); 

            var slider3 = new BABYLON.GUI.Slider();
                slider3.minimum = 0;
                slider3.maximum = 1 * Math.PI;
                slider3.value = 0;
                slider3.height = "20px";
                slider3.width = "200px";
                slider3.onValueChangedObservable.add(function(value) {
                    //header3.text = "Joint 2: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh2) {
                        mesh2.rotation.z = -value;
                    }
                });
                panel.addControl(slider3);
                
            var header4 = new BABYLON.GUI.TextBlock();
                header4.text = "Joint 3";
                header4.height = "30px";
                header4.color = "white";
                panel.addControl(header4); 

            var slider4 = new BABYLON.GUI.Slider();
                slider4.minimum = -3;
                slider4.maximum = 0.5;
                slider4.value = 0;
                slider4.height = "20px";
                slider4.width = "200px";
                slider4.onValueChangedObservable.add(function(value) {
                // header4.text = "Arm: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh3) {
                        mesh3.rotation.x = value;
                        mesh3.rotation.y = 89.6;
                        mesh3.rotation.z = 0;
                    }
                });
                panel.addControl(slider4);  

                var header5 = new BABYLON.GUI.TextBlock();
                header5.text = "Grip";
                header5.height = "30px";
                header5.color = "white";
                panel.addControl(header5); 

                var checkbox = new BABYLON.GUI.Checkbox();
                checkbox.width = "20px";
                checkbox.height = "20px";
                checkbox.isChecked = true;
                checkbox.color = "green";
                checkbox.onIsCheckedChangedObservable.add(function(newMeshes){
                    if (newMeshes) {
                        mesh4.rotation =  new BABYLON.Vector3(89.5, 0, -0.5);
                        mesh5.rotation = new BABYLON.Vector3(-89.5, 0, 90.5);
                    }
                    else{
                        mesh4.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
                        mesh5.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);
                    }
                });
                panel.addControl(checkbox);    

                //mesh4.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
                //       mesh5.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);

                }); 


//================================================================================================================
            BABYLON.SceneLoader.ImportMesh("", "assets/arm-robot/", "arm-robot.babylon", scene, function (newMeshes1, particleSystem1, skeletons1) {
            //newMeshes.position.y = 2;
            var base1 = newMeshes1[0];
            base1.position = new BABYLON.Vector3(6,0.25,6);
            var mesh11 = newMeshes1[1];
            mesh11.rotation = new BABYLON.Vector3(89.50, 0, 0);
            mesh11.checkCollisions = true;
           // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.1 }, scene);

            var mesh12 = newMeshes1[2];
            mesh12.rotation = new BABYLON.Vector3(0, 92.65, -0.6);
            mesh12.checkCollisions = true;
           // mesh1.physicsImpostor = new BABYLON.PhysicsImpostor(mesh1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh22 = newMeshes1[3];
            mesh22.rotation = new BABYLON.Vector3(0 ,0 ,0.2);
            mesh22.checkCollisions = true;
          //  mesh2.physicsImpostor = new BABYLON.PhysicsImpostor(mesh2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh33 = newMeshes1[4];
            mesh33.rotation = new BABYLON.Vector3(-89.6 ,0 ,89.6);
            mesh33.checkCollisions = true;
           // mesh3.physicsImpostor = new BABYLON.PhysicsImpostor(mesh3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh44 = newMeshes1[5]; //left grip
            mesh44.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
            mesh44.checkCollisions = true;
           // mesh4.physicsImpostor = new BABYLON.PhysicsImpostor(mesh4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh55 = newMeshes1[6]; //right grip
            mesh55.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);
            mesh55.checkCollisions = true;
            //mesh5.physicsImpostor = new BABYLON.PhysicsImpostor(mesh5, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
	
            var meshMaterial1 = new BABYLON.StandardMaterial("ground", scene);
            meshMaterial1.diffuseTexture = new BABYLON.Texture("assets/arm-robot/metallic.png", scene);
            base1.material = meshMaterial1;
            mesh11.material = meshMaterial1;
            mesh12.material = meshMaterial1;
            mesh22.material = meshMaterial1;
            mesh33.material = meshMaterial1;
            mesh44.material = meshMaterial1;
            mesh55.material = meshMaterial1;

            var plane1 = BABYLON.Mesh.CreatePlane("plane", 5);
            plane1.position = new BABYLON.Vector3(6, 4, 6);
            var advancedTexture1 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane1);
                var panel1 = new BABYLON.GUI.StackPanel();
                panel1.width = "220px";
                panel1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                panel1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                advancedTexture1.addControl(panel1);

            var header11 = new BABYLON.GUI.TextBlock();
                header11.text = "Base";
                header11.height = "30px";
                header11.color = "white";
                panel1.addControl(header11); 

            var slider11 = new BABYLON.GUI.Slider();
                slider11.minimum = 0;
                slider11.maximum = 2 * Math.PI;
                slider11.value = 0;
                slider11.height = "20px";
                slider11.width = "200px";
                slider11.onValueChangedObservable.add(function(value) {
                    //header.text = "Base-Position: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh11) {
                        mesh11.rotation.y = value;
                    }
                });
                panel1.addControl(slider11);
                var header22 = new BABYLON.GUI.TextBlock();
                header22.text = "Joint 1";
                header22.height = "30px";
                header22.color = "white";
                panel1.addControl(header22); 

            var slider22 = new BABYLON.GUI.Slider();
                slider22.minimum = -0.6;
                slider22.maximum = 3;
                slider22.value = 0;
                slider22.height = "20px";
                slider22.width = "200px";
                slider22.onValueChangedObservable.add(function(value) {
                    //header2.text = "Joint 1: " + value +" derajat";
                    if (mesh12) {
                        mesh12.rotation.z = value;
                    }
                });
                panel1.addControl(slider22);    

            var header33 = new BABYLON.GUI.TextBlock();
                header33.text = "Joint 2";
                header33.height = "30px";
                header33.color = "white";
                panel1.addControl(header33); 

            var slider33 = new BABYLON.GUI.Slider();
                slider33.minimum = 0;
                slider33.maximum = 1 * Math.PI;
                slider33.value = 0;
                slider33.height = "20px";
                slider33.width = "200px";
                slider33.onValueChangedObservable.add(function(value) {
                    //header3.text = "Joint 2: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh22) {
                        mesh22.rotation.z = -value;
                    }
                });
                panel1.addControl(slider33);
                
            var header44 = new BABYLON.GUI.TextBlock();
                header44.text = "Joint 3";
                header44.height = "30px";
                header44.color = "white";
                panel1.addControl(header44); 

            var slider44 = new BABYLON.GUI.Slider();
                slider44.minimum = -3;
                slider44.maximum = 0.5;
                slider44.value = 0;
                slider44.height = "20px";
                slider44.width = "200px";
                slider44.onValueChangedObservable.add(function(value) {
                // header4.text = "Arm: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh33) {
                        mesh33.rotation.x = value;
                        mesh33.rotation.y = 89.6;
                        mesh33.rotation.z = 0;
                    }
                });
                panel1.addControl(slider44);  

                var header55 = new BABYLON.GUI.TextBlock();
                header55.text = "Grip";
                header55.height = "30px";
                header55.color = "white";
                panel1.addControl(header55); 

                var checkbox11 = new BABYLON.GUI.Checkbox();
                checkbox11.width = "20px";
                checkbox11.height = "20px";
                checkbox11.isChecked = true;
                checkbox11.color = "green";
                checkbox11.onIsCheckedChangedObservable.add(function(newMeshes1){
                    if (newMeshes1) {
                        mesh44.rotation =  new BABYLON.Vector3(89.5, 0, -0.5);
                        mesh55.rotation = new BABYLON.Vector3(-89.5, 0, 90.5);
                    }
                    else{
                        mesh44.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
                        mesh55.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);
                    }
                });
                panel1.addControl(checkbox11);    

                //mesh4.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
                //       mesh5.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);

                }); 

//================================================================================================================

//================================================================================================================
    BABYLON.SceneLoader.ImportMesh("", "assets/arm-robot/", "arm-robot.babylon", scene, function (newMeshes100, particleSystem100, skeletons100) {
            //newMeshes.position.y = 2;
            var base100 = newMeshes100[0];
            base100.position = new BABYLON.Vector3(-6,0.25,6);
            var mesh1100 = newMeshes100[1];
            mesh1100.rotation = new BABYLON.Vector3(89.50, 0, 0);
            mesh1100.checkCollisions = true;
           // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.1 }, scene);

            var mesh1200 = newMeshes100[2];
            mesh1200.rotation = new BABYLON.Vector3(0, 92.65, -0.6);
            mesh1200.checkCollisions = true;
           // mesh1.physicsImpostor = new BABYLON.PhysicsImpostor(mesh1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh2200 = newMeshes100[3];
            mesh2200.rotation = new BABYLON.Vector3(0 ,0 ,0.2);
            mesh2200.checkCollisions = true;
          //  mesh2.physicsImpostor = new BABYLON.PhysicsImpostor(mesh2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh3300 = newMeshes100[4];
            mesh3300.rotation = new BABYLON.Vector3(-89.6 ,0 ,89.6);
            mesh3300.checkCollisions = true;
           // mesh3.physicsImpostor = new BABYLON.PhysicsImpostor(mesh3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh4400 = newMeshes100[5]; //left grip
            mesh4400.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
            mesh4400.checkCollisions = true;
           // mesh4.physicsImpostor = new BABYLON.PhysicsImpostor(mesh4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

            var mesh5500 = newMeshes100[6]; //right grip
            mesh5500.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);
            mesh5500.checkCollisions = true;
            //mesh5.physicsImpostor = new BABYLON.PhysicsImpostor(mesh5, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
	
            var meshMaterial100 = new BABYLON.StandardMaterial("ground", scene);
            meshMaterial100.diffuseTexture = new BABYLON.Texture("assets/arm-robot/orange.png", scene);
            base100.material = meshMaterial100;
            mesh1100.material = meshMaterial100;
            mesh1200.material = meshMaterial100;
            mesh2200.material = meshMaterial100;
            mesh3300.material = meshMaterial100;
            mesh4400.material = meshMaterial100;
            mesh5500.material = meshMaterial100;

            var plane100 = BABYLON.Mesh.CreatePlane("plane", 5);
            plane100.position = new BABYLON.Vector3(-10, 4, 6);
            var advancedTexture100 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane100);
                var panel100 = new BABYLON.GUI.StackPanel();
                panel100.width = "220px";
                panel100.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                panel100.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                advancedTexture100.addControl(panel100);

            var header1100 = new BABYLON.GUI.TextBlock();
                header1100.text = "Base";
                header1100.height = "30px";
                header1100.color = "white";
                panel100.addControl(header1100); 

            var slider1100 = new BABYLON.GUI.Slider();
                slider1100.minimum = 0;
                slider1100.maximum = 2 * Math.PI;
                slider1100.value = 0;
                slider1100.height = "20px";
                slider1100.width = "200px";
                slider1100.onValueChangedObservable.add(function(value) {
                    //header.text = "Base-Position: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh1100) {
                        mesh1100.rotation.y = value;
                    }
                });
                panel100.addControl(slider1100);
                var header2200 = new BABYLON.GUI.TextBlock();
                header2200.text = "Joint 1";
                header2200.height = "30px";
                header2200color = "white";
                panel100.addControl(header2200); 

            var slider2200 = new BABYLON.GUI.Slider();
                slider2200.minimum = -0.6;
                slider2200.maximum = 3;
                slider2200.value = 0;
                slider2200.height = "20px";
                slider2200.width = "200px";
                slider2200.onValueChangedObservable.add(function(value) {
                    //header2.text = "Joint 1: " + value +" derajat";
                    if (mesh1200) {
                        mesh1200.rotation.z = value;
                    }
                });
                panel100.addControl(slider2200);    

            var header3300 = new BABYLON.GUI.TextBlock();
                header3300.text = "Joint 2";
                header3300.height = "30px";
                header3300.color = "white";
                panel100.addControl(header3300); 

            var slider3300 = new BABYLON.GUI.Slider();
                slider3300.minimum = 0;
                slider3300.maximum = 1 * Math.PI;
                slider3300.value = 0;
                slider3300.height = "20px";
                slider3300.width = "200px";
                slider3300.onValueChangedObservable.add(function(value) {
                    //header3.text = "Joint 2: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh2200) {
                        mesh2200.rotation.z = -value;
                    }
                });
                panel100.addControl(slider3300);
                
            var header4400 = new BABYLON.GUI.TextBlock();
                header4400.text = "Joint 3";
                header4400.height = "30px";
                header4400.color = "white";
                panel100.addControl(header4400); 

            var slider4400 = new BABYLON.GUI.Slider();
                slider4400.minimum = -3;
                slider4400.maximum = 0.5;
                slider4400.value = 0;
                slider4400.height = "20px";
                slider4400.width = "200px";
                slider4400.onValueChangedObservable.add(function(value) {
                // header4.text = "Arm: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
                    if (mesh3300) {
                        mesh3300.rotation.x = value;
                        mesh3300.rotation.y = 89.6;
                        mesh3300.rotation.z = 0;
                    }
                });
                panel100.addControl(slider4400);  

                var header5500 = new BABYLON.GUI.TextBlock();
                header5500.text = "Grip";
                header5500.height = "30px";
                header5500.color = "white";
                panel100.addControl(header5500); 

                var checkbox1100 = new BABYLON.GUI.Checkbox();
                checkbox1100.width = "20px";
                checkbox1100.height = "20px";
                checkbox1100.isChecked = true;
                checkbox1100.color = "green";
                checkbox1100.onIsCheckedChangedObservable.add(function(newMeshes100){
                    if (newMeshes100) {
                        mesh4400.rotation =  new BABYLON.Vector3(89.5, 0, -0.5);
                        mesh5500.rotation = new BABYLON.Vector3(-89.5, 0, 90.5);
                    }
                    else{
                        mesh4400.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
                        mesh5500.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);
                    }
                });
                panel100.addControl(checkbox1100);    

                //mesh4.rotation =  new BABYLON.Vector3(89.5, 0, 0.5);
                //       mesh5.rotation = new BABYLON.Vector3(-89.5, 0, 91.5);

                }); 

//================================================================================================================

BABYLON.SceneLoader.ImportMesh("", "assets/conveyor/", "conveyor.babylon", scene, function (newMeshesC, particleSystemC, skeletonsC) {
    var conveyor = newMeshesC[0];
    conveyor.position = new BABYLON.Vector3(4,0,6);
    conveyor.checkCollisions = true;
});
BABYLON.SceneLoader.ImportMesh("", "assets/conveyor/", "conveyor.babylon", scene, function (newMeshesCC, particleSystemCC, skeletonsCC) {
    var conveyorc = newMeshesCC[0];
    conveyorc.position = new BABYLON.Vector3(4,0,4);
    conveyorc.checkCollisions = true;
});
BABYLON.SceneLoader.ImportMesh("", "assets/conveyor/", "conveyor.babylon", scene, function (newMeshesCC, particleSystemCC, skeletonsCC) {
    var conveyorc = newMeshesCC[0];
    conveyorc.position = new BABYLON.Vector3(4,0,8);
    conveyorc.checkCollisions = true;
});
BABYLON.SceneLoader.ImportMesh("", "assets/conveyor/", "conveyor.babylon", scene, function (newMeshesCC, particleSystemCC, skeletonsCC) {
    var conveyorc = newMeshesCC[0];
    conveyorc.position = new BABYLON.Vector3(4,0,2);
    conveyorc.checkCollisions = true;
});
BABYLON.SceneLoader.ImportMesh("", "assets/conveyor//", "conveyor.babylon", scene, function (newMeshesCC, particleSystemCC, skeletonsCC) {
    var conveyorc = newMeshesCC[0];
    conveyorc.position = new BABYLON.Vector3(4,0,0);
    conveyorc.checkCollisions = true;
});
BABYLON.SceneLoader.ImportMesh("", "assets/conveyor/", "conveyor.babylon", scene, function (newMeshesCC, particleSystemCC, skeletonsCC) {
    var conveyorc = newMeshesCC[0];
    conveyorc.position = new BABYLON.Vector3(-6.5,0,0);
    conveyorc.rotation = new BABYLON.Vector3(0,11,0);
    conveyorc.checkCollisions = true;
});
BABYLON.SceneLoader.ImportMesh("", "assets/conveyor/", "conveyor.babylon", scene, function (newMeshesCC, particleSystemCC, skeletonsCC) {
    var conveyorc = newMeshesCC[0];
    conveyorc.position = new BABYLON.Vector3(-8.5,0,0);
    conveyorc.rotation = new BABYLON.Vector3(0,11,0);
    conveyorc.checkCollisions = true;
});
  
//roda
var wheel1 =  BABYLON.MeshBuilder.CreateTorus("wheel1", {diameter: 2.0}, scene);
    wheel1.position = new BABYLON.Vector3(8, 2, -8);
var wheelMat = new BABYLON.StandardMaterial("wheelMat", scene);
    wheelMat.diffuseTexture = new BABYLON.Texture("assets/ban/ban.jpg", scene);
    wheelMat.diffuseTexture.uScale = 6;
    wheel1.material = wheelMat; 

var y = 0.0;    
var plane1 = BABYLON.Mesh.CreatePlane("plane1", 6);
plane1.position = new BABYLON.Vector3(8, 2, -3.7);
plane1.rotation = new BABYLON.Vector3(0, 8, 0);
var advancedTexture1 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane1);
var panel1 = new BABYLON.GUI.StackPanel();
    panel1.width = "220px";
    panel1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture1.addControl(panel1);

var header6 = new BABYLON.GUI.TextBlock();
    header6.text = "Kecepatan";
    header6.height = "30px";
    header6.color = "white";
    panel1.addControl(header6); 

var slider5 = new BABYLON.GUI.Slider();
    slider5.minimum = 0;
    slider5.maximum = 0.2;
    slider5.value = 0;
    slider5.height = "20px";
    slider5.width = "200px";
    slider5.onValueChangedObservable.add(function(value) {
       // header4.text = "Arm: " + (BABYLON.Tools.ToDegrees(value) | 0) +" derajat";
        if (wheel1) {
            scene.registerBeforeRender(function() {
            wheel1.rotation.copyFromFloats(0.0, 0.0, Math.PI / 2); //ben vertikal
            wheel1.addRotation(0.0, y, 0.0);  //ben muter
            y += value; 
   // k += 0.02;
    //x = Math.sin(k) / 2.0;
//memberikan collision ke kamera
    scene.collisionsEnabled = true;
    camera.checkCollisions = true;
  //  wheel1.checkCollisions = true;
});
        }
    });
    panel1.addControl(slider5);  

//==================================================================================================================


//===============GIZMO=====================
// Initialize GizmoManager
var gizmoManager = new BABYLON.GizmoManager(scene)
vrHelper.onControllerMeshLoaded.add((webVRController)=>{
    webVRController.onSecondaryButtonStateChangedObservable.add((stateObject)=>{
            if(webVRController.hand==="left"){
                if(stateObject.pressed === true){
                    if(stateObject.pressed === true){
                        gizmoManager.boundingBoxGizmoEnabled=true;
                    }else{
                        gizmoManager.attachToMesh(null);
                }
            }
        }else{
                if(stateObject.pressed === true){
                    if(stateObject.pressed === true){
                        if(stateObject.pressed === true){                            
                            gizmoManager.attachToMesh(null);
                            gizmoManager.boundingBoxGizmoEnabled=false;  
                        }
                    }
                    }
                
            }
        });
});





    return scene;
};
