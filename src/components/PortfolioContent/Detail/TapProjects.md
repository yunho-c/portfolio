## TapVirtualXbox & VirtualCADMouse

[main photo: auto-played mp4]
<!-- <img class="aspect-video object-cover hover:scale-102 transition-all duration-500 ease-in-out transform" src="/assets/MainPhoto_TipLetsWristLets.png"> -->


<!-- 웨어러블 마우스/키보드 입력 장치인 Tap Strap 2를 활용한 HCI 실험 프로젝트입니다. -->
### What

- 비주얼 갤러리
    
    [https://www.youtube.com/watch?v=knA5WmF07sk&t=57s](https://www.youtube.com/watch?v=knA5WmF07sk&t=57s)
    
    [https://www.youtube.com/watch?v=NB5KgMTxs4k](https://www.youtube.com/watch?v=NB5KgMTxs4k)
    

### Why

This is an HCI experiment project using Tap Strap 2, a wearable mouse/keyboard input device.

### How

**TapVirtualXbox**

The gesture recognition function was not implemented directly, but the Tap Strap SDK was used. Recreate an Xbox controller with the ViGEm library.

**VirtualCADMouse**

The Madgwick sensor fusion algorithm is used to recognize the posture of the IMU. Control various 3D modeling software using the PyAutoGUI library.

### Learn More

Part of Internship @ Tap Systems Inc. (Summer 2020)