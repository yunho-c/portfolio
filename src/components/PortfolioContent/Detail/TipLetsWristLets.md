# TipLets & WristLets

## What

Small, wireless, battery-powered haptic devices for fingertips (*TipLets*) and wrist (*WristLets*).

**Gallery**
1. TipLets Components
    <img class="aspect-square object-cover rounded-lg shadow-xl" src="/assets/TipLetsWristLets/tiplets_pcbs.jpeg">

2. WristLets PCB Render
    <img class="aspect-square object-cover rounded-lg shadow-xl" src="/assets/TipLetsWristLets/wristlets3.jpeg">

## Why

### TipLets

<aside>
💡 Omitted because the research results have not yet been published.

</aside>

### WristLets

This prototype was inspired by Jung et al.'s wearable modular haptic patch. It is a device made of flexible PCB that wraps around the wrist and is used for object finding assistance through directional haptic patterns.

## How

### TipLets

Each unit contains six `DRV2605` haptic motor drivers and a rechargeable coin cell battery on a small 30mm * 40mm board, and is composed of a commercial ESP32 board that is connected in a shield form and is responsible for calculation and wireless communication. From idea drafting, component selection, circuit design, PCB artwork, production request, and SMT assembly process were directly carried out.

<aside>
<div class="font-semibold leading-10">Keywords:
  <div class="tag-bubble">Bluetooth Low Energy</div>
  <div class="tag-bubble">ESP32</div>
  <div class="tag-bubble">Linear Resonant Actuator (LRA)</div>
  <div class="tag-bubble">Ball Grid Array (BGA)</div>
  <div class="tag-bubble">PlatformIO</div>
</div>
</aside>

### WristLets

Using the `TLC5940` 16-channel LED driver, it contains a total of 32 haptic motors across the wrist. Designed for daisy-chaining (mechanically and electrically). Therefore, if necessary, we plan to conduct various sensory replacement experiments by connecting the size of various body parts such as the waist and legs.

### Learn More

Part of Internship @ Asan Medical Center Biomedical Research Institute HEART Lab