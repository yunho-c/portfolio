## RTSA

(In Progress)

<!-- <img class="aspect-video object-cover hover:scale-102 transition-all duration-500 ease-in-out transform" src="/assets/MainPhoto_TipLetsWristLets.png"> -->

### What

- Gallery
    1. Working Video
        
        
    2. SnakeViz Profiling
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6068cfc-2d39-4d8b-9072-4a8b0bf1ec53/Untitled.png)
        

A complementary software running computer vision algorithms in real-time to support visual-tactile sensory substitution (VTSS) device

### Why

Existing VTSS devices have a very narrow information bandwidth. [1] In addition, sensory overload occurs when an excessive amount of information is transmitted to the tactile channel. [2] Therefore, it is necessary to identify and emphasize the most valuable information in the field of view, while erasing the less important information. This software combines visual field analysis function, natural language interaction and VTSS hardware [1. It is planned to be used to assist tasks such as explanation of field of view and Q&A, 2. Expressing the basic shape of a desired object, and 3. Assisting in finding an object in an unclear location.

### How

ONNX runtime profiling and optimization reduced the runtime of major computer vision algorithms (semantic segmentation, edge detection, multi-object tracking) by 10 times, enabling real-time operation of 60 FPS based on high-end PCs. With Multimodal Transformer technology, natural language explanations and Q&A about the current field of view were implemented, and the function of returning the location of the object desired by the user was implemented. The natural language processing system runs on a separate GPU server and connects to the client app (GUI) via a REST API.

<aside>
🥚 **Keywords**: `ONNX`, `PyTorch`, `YOLACT`, `Deep SORT`, `MediaPipe`, `PiDiNet`, `OpenCV`, `TensorRT`, `Huggingface`, `DearPyGUI`, `cProfile`, `nginx`, `FastAPI`

</aside>

### Learn More:

Part of Internship at Asan Medical Center Biomedical Research Institute HEART Lab