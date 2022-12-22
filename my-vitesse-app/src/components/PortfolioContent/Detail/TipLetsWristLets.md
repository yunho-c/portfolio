# TipLets & WristLets

## What

**Gallery**
1. TipLets Components
        
    ![tiplets_pcbs.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23f49b0d-e58f-44f7-a085-707a7dcaa938/tiplets_pcbs.jpg)
        
2. WristLets PCB Render
        
    ![wristlets3.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/008b6753-59c5-4b90-80b4-132436e42f02/wristlets3.jpg)
        

Small, wireless, battery-powered haptic devices for fingertips (TipLets) and wrist (WristLets).

## Why

### TipLets

<aside>
💡 Omitted because the research results have not yet been published.

</aside>

### WristLets

This prototype was inspired by Jung et al.'s wearable modular haptic patch. It is a device made of flexible PCB that wraps around the wrist and is used for object finding assistance through directional haptic patterns.

## How

### TipLets

It contains 6 DRV2605 haptic motor drivers and a rechargeable coin cell battery on a small 30mm * 40mm board, and is composed of a commercial ESP32 board that is connected in a shield form and is responsible for calculation and wireless communication. From idea drafting, component selection, circuit design, PCB artwork, production request, and SMT assembly process were directly carried out.

<aside>
🥚 **Keywords**: `ESP32`, `LRA`, `BLE`, `BGA`, `PlatformIO`

</aside>

### WristLets

Using the TLC5940 16-channel LED driver, it contains a total of 32 haptic motors across the wrist. Designed for daisy-chaining (mechanically and electrically). Therefore, if necessary, we plan to conduct various sensory replacement experiments by connecting the size of various body parts such as the waist and legs.

### Learn More

Part of Internship @ Asan Medical Center Biomedical Research Institute HEART Lab