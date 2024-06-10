"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import gsap from "gsap";
import styles from "./style.module.scss";

let mouse = {
  x: 0,
  y: 0,
};

export default function CanvasPlane() {
  const canvas = useRef(null);
  const paramsRef = useRef({
    first: true,
  });
  useEffect(() => {
    if (paramsRef.current.first) {
      paramsRef.current.first = true;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
      scene.add(light);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 32, 64);
      scene.add(directionalLight);

      /*       const moveContainerX = gsap.quickTo(mouse.x, {
        duration: 0.8,
      });
      const moveContainerY = gsap.quickTo(mouse.y, {
        duration: 0.8,
      }); */

      const matcap = new THREE.TextureLoader().load("3d/matcap/8.png");
      const material = new THREE.MeshMatcapMaterial({ matcap: matcap });

      const loader = new OBJLoader();
      let model;

      loader.load(
        // resource URL
        "/3d/paperplane.obj",
        // called when resource is loaded
        function (object) {
          object.children[0].material = material;
          model = object;
          scene.add(model);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened");
        }
      );

      const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setAnimationLoop(animate);
      renderer.setClearColor(0xffffff, 0);

      camera.position.z = 5;

      const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;

        const x = (clientX / innerWidth) * 2 - 1;
        const y = 2 - (clientY / innerHeight) * 2 - 1;

        gsap.to(mouse, {
          x: x,
          y: y,
          duration: 3, // Use a shorter duration
          ease: "power4.out",
        });

        /*       moveContainerX(clientX);
        moveContainerY(clientY); */

        /*       const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        mouse.x = (clientX / innerWidth) * 2 - 1;
        mouse.y = 2 - (clientY / innerHeight) * 2 - 1; */

        //console.log(mouse);
      };

      const manageWindowResize = () => {
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", manageWindowResize);

      window.addEventListener("mousemove", manageMouseMove);

      function animate() {
        if (scene.children[2]) {
          scene.children[2].lookAt(mouse.x * 7, mouse.y * 7, 0);
          scene.children[2].position.y = mouse.y * 7;
          scene.children[2].position.x = mouse.x * 7;
        }

        renderer.render(scene, camera);
      }
    }
  }, []);
  return <canvas ref={canvas} className={styles.main}></canvas>;
}
